"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { englishLetters, hindiConsonants, hindiVowels, type Letter } from "@/lib/letters";
import type { Lang } from "@/lib/stories";
import { Petal } from "./PetalScene";
import { listen, micErrorMessage, normalizeWords, speak, sttSupported } from "@/lib/speech";

type SetId = "abc" | "swar" | "vyanjan";
type Status = "idle" | "right" | "wrong" | "listening";

const sets: Record<SetId, { label: string; lang: Lang; letters: Letter[] }> = {
  abc: { label: "ABC", lang: "en", letters: englishLetters },
  swar: { label: "स्वर (Vowels)", lang: "hi", letters: hindiVowels },
  vyanjan: { label: "व्यंजन (Consonants)", lang: "hi", letters: hindiConsonants },
};

const STORAGE_KEY = "story-petals-mastered";
const noop = () => () => {};

const burst = Array.from({ length: 10 }, (_, i) => {
  const angle = (i / 10) * Math.PI * 2;
  const dist = 110 + (i % 3) * 30;
  return { x: `${Math.round(Math.cos(angle) * dist)}px`, y: `${Math.round(Math.sin(angle) * dist)}px`, color: i % 2 ? "#e8b4b8" : "#b76e79" };
});

function loadMastered(): string[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

/** Deterministic shuffle so server and browser render the same tiles. */
function pickOptions(letters: Letter[], index: number, round: number) {
  const others = letters.filter((_, i) => i !== index);
  let seed = index * 31 + round * 17 + 7;
  const rand = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
  const picks = [...others].sort(() => rand() - 0.5).slice(0, 5);
  picks.splice(Math.floor(rand() * 6), 0, letters[index]);
  return picks;
}

function phraseFor(letter: Letter, lang: Lang) {
  if (!letter.word) return letter.char;
  return lang === "hi" ? `${letter.char}। ${letter.char} से ${letter.word}` : `${letter.char}. ${letter.char} for ${letter.word}`;
}

function spokenMatches(letter: Letter, lang: Lang, alternatives: string[]) {
  const word = letter.word.toLowerCase();
  return alternatives.some((alt) => {
    const full = normalizeWords(alt).join(" ");
    const tokens = normalizeWords(alt);
    if (letter.say.includes(full) || (word && full.includes(word))) return true;
    if (lang === "en") return tokens.some((t) => letter.say.includes(t));
    // Hindi: accept the letter, the example word, a romanised sound, or a word that starts with the letter.
    return tokens.some((t) => letter.say.includes(t) || t.startsWith(letter.char));
  });
}

export default function LetterPractice() {
  const [setId, setSetId] = useState<SetId>("abc");
  const [index, setIndex] = useState(0);
  const [round, setRound] = useState(0);
  const [mode, setMode] = useState<"type" | "speak">("type");
  const [status, setStatus] = useState<Status>("idle");
  const [typed, setTyped] = useState("");
  const [heard, setHeard] = useState("");
  const [note, setNote] = useState("");
  const [mastered, setMastered] = useState<string[]>([]);
  const micOk = useSyncExternalStore(noop, sttSupported, () => false);
  const stopRef = useRef<() => void>(() => {});
  const timerRef = useRef<number | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);

  const { lang, letters } = sets[setId];
  const letter = letters[index];
  const options = useMemo(() => pickOptions(letters, index, round), [letters, index, round]);
  const doneCount = letters.filter((l) => mastered.includes(l.char)).length;

  useEffect(() => {
    // Read saved progress after mount (localStorage is not available on the server).
    const saved = loadMastered();
    if (saved.length) setMastered(saved); // eslint-disable-line react-hooks/set-state-in-effect
    return () => {
      stopRef.current();
      window.clearTimeout(timerRef.current);
    };
  }, []);

  function reset() {
    stopRef.current();
    window.clearTimeout(timerRef.current);
    setStatus("idle");
    setTyped("");
    setHeard("");
    setNote("");
  }

  function select(i: number, newSet: SetId = setId) {
    reset();
    setSetId(newSet);
    setIndex(i);
    setRound((r) => r + 1);
    const l = sets[newSet].letters[i];
    speak(phraseFor(l, sets[newSet].lang), sets[newSet].lang, { rate: 0.8 });
  }

  function markRight() {
    setStatus("right");
    setMastered((m) => {
      const next = m.includes(letter.char) ? m : [...m, letter.char];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
    speak(lang === "hi" ? "शाबाश!" : "Great job!", lang);
    timerRef.current = window.setTimeout(() => select((index + 1) % letters.length), 1600);
  }

  function markWrong() {
    setStatus("wrong");
    speak(lang === "hi" ? "फिर से कोशिश करो" : "Try again", lang);
    timerRef.current = window.setTimeout(() => {
      setStatus("idle");
      setTyped("");
    }, 1100);
  }

  function check(answer: string) {
    if (status === "right") return;
    const a = answer.trim().normalize("NFC");
    if (!a) return;
    const ok = lang === "en" ? a.toLowerCase() === letter.char.toLowerCase() : a === letter.char;
    if (ok) markRight();
    else markWrong();
  }

  function startSpeaking() {
    reset();
    setStatus("listening");
    let decided = false;
    stopRef.current = listen(lang, {
      onResult: (transcript, alternatives) => {
        setHeard(transcript);
        if (!decided && spokenMatches(letter, lang, [transcript, ...alternatives])) {
          decided = true;
          stopRef.current();
          markRight();
        }
      },
      onError: (err) => {
        decided = true;
        setStatus("idle");
        setNote(micErrorMessage(err));
      },
      onEnd: () => {
        if (!decided) markWrong();
      },
    });
  }

  const cardTone =
    status === "right"
      ? "ring-4 ring-success bg-success/10"
      : status === "wrong"
        ? "ring-4 ring-petal-deep animate-shake"
        : status === "listening"
          ? "ring-4 ring-blush"
          : "ring-1 ring-blush/60";

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:py-10">
      <div className="flex flex-wrap justify-center gap-2">
        {(Object.keys(sets) as SetId[]).map((id) => (
          <button
            key={id}
            onClick={() => select(0, id)}
            aria-pressed={setId === id}
            className={`rounded-full px-5 py-2 font-semibold transition ${
              setId === id ? "bg-petal text-white shadow" : "bg-white text-ink ring-1 ring-blush hover:bg-champagne"
            }`}
          >
            {sets[id].label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        {/* Big letter card */}
        <section className={`relative rounded-[2rem] bg-white p-6 text-center shadow-[0_10px_40px_-12px_rgba(183,110,121,0.45)] transition sm:p-8 ${cardTone}`}>
          {status === "right" && (
            <div className="pointer-events-none absolute left-1/2 top-1/2" aria-hidden>
              {burst.map((b, i) => (
                <Petal
                  key={`${round}-${i}`}
                  color={b.color}
                  size={22}
                  className="absolute -left-3 -top-3 animate-burst"
                  style={{ ["--x" as string]: b.x, ["--y" as string]: b.y }}
                />
              ))}
            </div>
          )}
          <div className="flex items-center justify-between gap-4 text-sm text-ink/60">
            <div className="flex-1 text-left">
              <span>
                {doneCount} of {letters.length} learned
              </span>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-champagne">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blush to-petal transition-all duration-700"
                  style={{ width: `${(doneCount / letters.length) * 100}%` }}
                />
              </div>
            </div>
            <button onClick={() => speak(phraseFor(letter, lang), lang, { rate: 0.8 })} className="font-semibold text-petal-deep hover:underline">
              Listen
            </button>
          </div>

          <div key={`${setId}-${index}`} lang={lang} className="mt-2 animate-pop text-[7rem] font-bold leading-none text-petal sm:text-[9rem]">
            {letter.char}
            {lang === "en" && <span className="text-[4rem] text-blush sm:text-[5rem]">{letter.char.toLowerCase()}</span>}
          </div>
          {letter.word && (
            <p key={`w-${setId}-${index}`} lang={lang} className="mt-3 animate-fade-up text-xl font-semibold text-ink [animation-delay:150ms]">
              {lang === "hi" ? `${letter.char} से ${letter.word}` : `${letter.char} for ${letter.word}`}
            </p>
          )}

          <p role="status" className="mt-4 min-h-8 text-lg font-bold">
            {status === "right" && <span className="inline-block animate-pop text-success">{lang === "hi" ? "शाबाश!" : "Great job!"}</span>}
            {status === "wrong" && <span className="text-petal-deep">{lang === "hi" ? "फिर से कोशिश करो" : "Try again!"}</span>}
            {status === "listening" && <span className="text-ink/70">Say “{letter.char}”...</span>}
          </p>
          {heard && <p className="text-sm text-ink/60">I heard: “{heard}”</p>}
          {note && <p className="mt-2 rounded-xl bg-champagne px-3 py-2 text-sm text-ink">{note}</p>}
        </section>

        {/* Practice panel */}
        <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-blush/60 sm:p-8">
          <div role="group" aria-label="Practice mode" className="flex rounded-full bg-champagne/60 p-1">
            {(["type", "speak"] as const).map((m) => (
              <button
                key={m}
                onClick={() => {
                  reset();
                  setMode(m);
                }}
                aria-pressed={mode === m}
                className={`flex-1 rounded-full py-2 font-semibold transition duration-300 ${mode === m ? "bg-white text-petal-deep shadow" : "text-ink/70"}`}
              >
                {m === "type" ? "Type" : "Speak"}
              </button>
            ))}
          </div>

          {mode === "type" ? (
            <div key="type" className="mt-6 animate-fade-up">
              <p className="text-center font-semibold text-ink">Find and tap the letter, or type it:</p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {options.map((o, i) => (
                  <button
                    key={`${round}-${o.char}`}
                    style={{ animationDelay: `${i * 60}ms` }}
                    lang={lang}
                    onClick={() => check(o.char)}
                    className="aspect-square animate-pop rounded-2xl bg-champagne/60 text-4xl font-bold text-ink ring-1 ring-blush transition hover:-translate-y-0.5 hover:bg-blush/50 active:scale-95"
                  >
                    {o.char}
                  </button>
                ))}
              </div>
              <form
                className="mt-5 flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  check(typed);
                }}
              >
                <input
                  ref={inputRef}
                  value={typed}
                  lang={lang}
                  onChange={(e) => {
                    const v = e.target.value;
                    setTyped(v);
                    if (lang === "en" && v.trim().length === 1) check(v);
                  }}
                  maxLength={4}
                  placeholder={lang === "en" ? "Type here" : "यहाँ लिखो"}
                  aria-label="Type the letter"
                  autoCapitalize="characters"
                  autoComplete="off"
                  className="min-w-0 flex-1 rounded-2xl border-2 border-blush bg-white px-4 py-3 text-center text-2xl font-bold text-ink outline-none focus:border-petal"
                />
                {lang === "hi" && (
                  <button type="submit" className="btn-primary px-5">
                    Check
                  </button>
                )}
              </form>
              {lang === "hi" && <p className="mt-2 text-center text-xs text-ink/50">Use a Hindi keyboard, or just tap a tile above.</p>}
            </div>
          ) : (
            <div key="speak" className="mt-8 animate-fade-up text-center">
              {micOk ? (
                <>
                  <p className="font-semibold text-ink">Tap the mic and say the letter out loud.</p>
                  <div className="relative mx-auto mt-6 h-32 w-32">
                    {status === "listening" && (
                      <>
                        <span className="absolute inset-0 animate-ripple rounded-full bg-blush" />
                        <span className="absolute inset-0 animate-ripple rounded-full bg-blush [animation-delay:0.8s]" />
                      </>
                    )}
                    <button
                      onClick={status === "listening" ? reset : startSpeaking}
                      className={`relative flex h-32 w-32 items-center justify-center rounded-full text-lg font-bold text-white shadow-lg transition duration-300 hover:scale-105 active:scale-95 ${
                        status === "listening" ? "bg-petal-deep" : "bg-petal hover:bg-petal-deep"
                      }`}
                    >
                      {status === "listening" ? "Listening..." : "Tap to speak"}
                    </button>
                  </div>
                  <p className="mt-4 text-sm text-ink/60">
                    You can say the letter or the word — like “{letter.char}” or “{letter.word || letter.char}”.
                  </p>
                </>
              ) : (
                <p className="rounded-2xl bg-champagne p-4 text-ink">
                  Speaking practice needs Chrome, Edge or Safari. You can still practise with Type!
                </p>
              )}
            </div>
          )}
        </section>
      </div>

      {/* All letters */}
      <section className="mt-8">
        <h2 className="mb-3 text-lg font-bold text-ink">Pick a letter</h2>
        <div className="flex flex-wrap gap-2">
          {letters.map((l, i) => {
            const isDone = mastered.includes(l.char);
            return (
              <button
                key={`${setId}-${l.char}`}
                style={{ animationDelay: `${i * 25}ms` }}
                lang={lang}
                onClick={() => select(i)}
                aria-current={i === index}
                className={`relative h-14 w-14 animate-pop rounded-2xl text-2xl font-bold transition duration-200 hover:-translate-y-0.5 ${
                  i === index
                    ? "bg-petal text-white shadow"
                    : isDone
                      ? "bg-champagne text-petal-deep ring-1 ring-petal/40"
                      : "bg-white text-ink ring-1 ring-blush hover:bg-champagne"
                }`}
              >
                {l.char}
                {isDone && <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-petal ring-2 ring-white" aria-label="learned" />}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}

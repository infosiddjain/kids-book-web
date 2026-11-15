"use client";

import Link from "next/link";
import { Fragment, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import PetalScene from "./PetalScene";
import type { Lang, Story } from "@/lib/stories";
import {
  getVoice,
  listen,
  micErrorMessage,
  normalizeWords,
  similarWord,
  speak,
  sttSupported,
  stopSpeaking,
  useVoices,
} from "@/lib/speech";

const noop = () => () => {};

type Mode = "idle" | "reading" | "listening";

const sizes = ["text-xl sm:text-2xl", "text-2xl sm:text-3xl", "text-3xl sm:text-4xl"];
const ui = {
  en: { listen: "Read to me", stop: "Stop", myTurn: "I'll read", next: "Next", back: "Back" },
  hi: { listen: "मुझे सुनाओ", stop: "रुको", myTurn: "मैं पढ़ूँगा", next: "आगे", back: "पीछे" },
};

function tokenize(text: string) {
  return [...text.matchAll(/\S+/g)].map((m) => ({ word: m[0], start: m.index ?? 0 }));
}

/** How many tokens of the page have been read aloud, following the child's words in order. */
function readProgress(tokens: { word: string }[], spoken: string[]) {
  const flat = tokens.flatMap((t, tok) => normalizeWords(t.word).map((w) => ({ w, tok })));
  let p = 0;
  for (const w of spoken) {
    if (p >= flat.length) break;
    if (similarWord(w, flat[p].w)) p++;
    else if (p + 1 < flat.length && similarWord(w, flat[p + 1].w)) p += 2;
  }
  return p >= flat.length ? tokens.length : flat[p].tok;
}

export default function Reader({ story }: { story: Story }) {
  const [lang, setLang] = useState<Lang>("en");
  const [showTranslation, setShowTranslation] = useState(false);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(1);
  const [slow, setSlow] = useState(false);
  const [mode, setMode] = useState<Mode>("idle");
  const [activeWord, setActiveWord] = useState(-1);
  const [readCount, setReadCount] = useState(0);
  const [message, setMessage] = useState("");
  const [autoNext, setAutoNext] = useState(true);
  const autoNextRef = useRef(autoNext);
  useEffect(() => {
    autoNextRef.current = autoNext;
  }, [autoNext]);
  const stopRef = useRef<() => void>(() => {});
  const voicesReady = useVoices();
  const micOk = useSyncExternalStore(noop, sttSupported, () => false);
  useEffect(() => () => stopRef.current(), []);

  const last = story.pages.length - 1;
  const current = story.pages[page];
  const other: Lang = lang === "en" ? "hi" : "en";
  const tokens = useMemo(() => tokenize(current[lang]), [current, lang]);
  const t = ui[lang];

  function stopAll() {
    stopRef.current();
    stopSpeaking();
    setMode("idle");
    setActiveWord(-1);
  }

  function goTo(i: number) {
    stopAll();
    setReadCount(0);
    setMessage("");
    setPage(Math.max(0, Math.min(last, i)));
  }

  function readPage(i: number) {
    const text = story.pages[i][lang];
    const pageTokens = tokenize(text);
    setMode("reading");
    setReadCount(0);
    setMessage("");
    stopRef.current = speak(text, lang, {
      rate: slow ? 0.7 : 0.9,
      onBoundary: (ci) => {
        let idx = 0;
        while (idx + 1 < pageTokens.length && pageTokens[idx + 1].start <= ci) idx++;
        setActiveWord(idx);
      },
      onEnd: () => {
        setActiveWord(-1);
        if (autoNextRef.current && i < last) {
          setPage(i + 1);
          readPage(i + 1);
        } else {
          setMode("idle");
        }
      },
    });
  }

  function startReadAlong() {
    stopAll();
    setReadCount(0);
    setMessage(lang === "hi" ? "पढ़ना शुरू करो... मैं सुन रहा हूँ" : "Start reading... I'm listening");
    setMode("listening");
    let finished = false;
    const stop = listen(lang, {
      continuous: true,
      onResult: (transcript) => {
        const n = readProgress(tokens, normalizeWords(transcript));
        setReadCount((prev) => Math.max(prev, n));
        if (n >= tokens.length && !finished) {
          finished = true;
          stop();
          setMessage(lang === "hi" ? "शाबाश! बहुत अच्छा पढ़ा!" : "Wonderful reading! Well done!");
        }
      },
      onError: (err) => {
        finished = true;
        setMessage(micErrorMessage(err));
      },
      onEnd: () => {
        setMode("idle");
        if (!finished) setMessage(lang === "hi" ? "फिर से कोशिश करो!" : "Keep going! Tap the button to continue.");
      },
    });
    stopRef.current = stop;
  }

  const sayWord = (word: string) => {
    if (mode !== "idle") return;
    speak(word.replace(/[^\p{L}\p{M}\p{N}'-]/gu, ""), lang, { rate: 0.8 });
  };

  const noHindiVoice = voicesReady && !getVoice("hi") && (lang === "hi" || showTranslation);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:py-10">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Link href="/books" className="text-sm font-semibold text-petal-deep hover:underline">
          All stories
        </Link>
        <div className="flex items-center gap-2">
          <div role="group" aria-label="Story language" className="flex rounded-full bg-white p-1 shadow-sm ring-1 ring-blush">
            {(["en", "hi"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => {
                  stopAll();
                  setReadCount(0);
                  setMessage("");
                  setLang(l);
                }}
                aria-pressed={lang === l}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  lang === l ? "bg-petal text-white" : "text-ink hover:bg-champagne"
                }`}
              >
                {l === "en" ? "English" : "हिंदी"}
              </button>
            ))}
          </div>
          <button
            onClick={() => setSize((s) => (s + 1) % sizes.length)}
            className="rounded-full bg-white px-3 py-1.5 text-sm font-bold text-ink shadow-sm ring-1 ring-blush hover:bg-champagne"
            aria-label="Change text size"
          >
            A<span className="text-lg">A</span>
          </button>
        </div>
      </div>

      <h1 className="animate-fade-up text-center text-2xl font-bold text-ink sm:text-3xl" lang={lang}>
        {story.title[lang]}
      </h1>
      <p className="mt-1 text-center text-sm text-ink/60">
        Page {page + 1} of {story.pages.length}
      </p>

      <div className="mt-3 flex justify-center gap-1.5" aria-hidden>
        {story.pages.map((_, i) => (
          <span key={i} className={`h-2 rounded-full transition-all duration-500 ${i === page ? "w-6 bg-petal" : "w-2 bg-blush"}`} />
        ))}
      </div>

      <article key={`${page}-${lang}`} className="mt-5 animate-page-in overflow-hidden rounded-[2rem] bg-white shadow-[0_10px_40px_-12px_rgba(183,110,121,0.45)] ring-1 ring-blush/60">
        <PetalScene seed={page + story.slug.length} count={11} className="h-32 sm:h-44">
          <div className="animate-pop text-center [animation-delay:150ms]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-petal-deep/70">{lang === "hi" ? "पन्ना" : "Page"}</p>
            <p className="text-6xl font-bold text-petal sm:text-7xl">{page + 1}</p>
          </div>
        </PetalScene>

        <div className="space-y-5 p-6 sm:p-10">
          <p lang={lang} className={`${sizes[size]} font-medium leading-relaxed text-ink`}>
            {tokens.map((tk, i) => {
              const isActive = mode === "reading" && i === activeWord;
              const isRead = i < readCount;
              return (
                <Fragment key={i}>
                  <button
                    type="button"
                    onClick={() => sayWord(tk.word)}
                    style={{ animationDelay: `${i * 35}ms` }}
                    className={`inline-block animate-fade-up rounded-lg px-0.5 transition-all duration-200 ${
                      isActive
                        ? "-translate-y-1 scale-110 bg-petal text-white shadow-md"
                        : isRead
                          ? "bg-champagne text-petal-deep underline decoration-petal decoration-2 underline-offset-4"
                          : "hover:bg-champagne/70"
                    }`}
                  >
                    {tk.word}
                  </button>{" "}
                </Fragment>
              );
            })}
          </p>

          {showTranslation && (
            <div className="flex animate-fade-up items-start gap-3 rounded-2xl bg-champagne/50 p-4">
              <button
                onClick={() => speak(current[other], other, { rate: slow ? 0.7 : 0.9 })}
                className="shrink-0 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-petal-deep shadow-sm transition hover:-translate-y-0.5"
                aria-label="Listen to translation"
              >
                Listen
              </button>
              <p lang={other} className="text-lg leading-relaxed text-ink/80">
                {current[other]}
              </p>
            </div>
          )}

          {page === last && (
            <div className="relative animate-pop overflow-hidden rounded-2xl border-2 border-dashed border-blush p-5 text-center [animation-delay:400ms]">
              <p className="text-2xl font-bold text-petal-deep">{lang === "hi" ? "समाप्त" : "The End"}</p>
              <p className="mt-2 font-semibold text-ink" lang={lang}>
                {lang === "hi" ? "सीख: " : "Moral: "}
                {story.moral[lang]}
              </p>
              <button
                onClick={() => speak(story.moral[lang], lang)}
                className="mt-3 text-sm font-semibold text-petal-deep hover:underline"
              >
                {lang === "hi" ? "सीख सुनो" : "Hear the moral"}
              </button>
            </div>
          )}

          {message && (
            <p role="status" key={message} className="animate-pop rounded-2xl bg-champagne px-4 py-3 text-center font-semibold text-ink">
              {message}
            </p>
          )}
        </div>
      </article>

      <div className="mt-6 grid grid-cols-[auto_1fr_auto] items-center gap-3">
        <button
          onClick={() => goTo(page - 1)}
          disabled={page === 0}
          className="h-14 rounded-full bg-white px-5 font-semibold text-petal-deep shadow ring-1 ring-blush transition hover:-translate-x-0.5 hover:bg-champagne disabled:opacity-30"
        >
          {t.back}
        </button>

        <div className="flex flex-wrap justify-center gap-3">
          {mode === "reading" ? (
            <button onClick={stopAll} className="btn-primary relative"><span className="absolute inset-0 animate-ripple rounded-full bg-petal" /><span className="relative">{t.stop}</span></button>
          ) : (
            <button onClick={() => readPage(page)} disabled={mode === "listening"} className="btn-primary">
              {t.listen}
            </button>
          )}
          {micOk &&
            (mode === "listening" ? (
              <button onClick={stopAll} className="btn-secondary relative"><span className="absolute inset-0 animate-ripple rounded-full bg-blush" /><span className="relative">{t.stop}</span></button>
            ) : (
              <button onClick={startReadAlong} disabled={mode === "reading"} className="btn-secondary">
                {t.myTurn}
              </button>
            ))}
        </div>

        <button
          onClick={() => goTo(page + 1)}
          disabled={page === last}
          className="h-14 rounded-full bg-petal px-5 font-semibold text-white shadow transition hover:translate-x-0.5 hover:bg-petal-deep disabled:opacity-30"
        >
          {t.next}
        </button>
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink/80">
        <label className="flex cursor-pointer items-center gap-2">
          <input type="checkbox" checked={slow} onChange={(e) => setSlow(e.target.checked)} className="accent-petal" />
          Slow voice
        </label>
        <label className="flex cursor-pointer items-center gap-2">
          <input type="checkbox" checked={autoNext} onChange={(e) => setAutoNext(e.target.checked)} className="accent-petal" />
          Keep reading next pages
        </label>
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            checked={showTranslation}
            onChange={(e) => setShowTranslation(e.target.checked)}
            className="accent-petal"
          />
          Show {other === "hi" ? "Hindi" : "English"} too
        </label>
      </div>

      <p className="mt-4 text-center text-xs text-ink/50">
        Tip: tap any word to hear it. Story from {story.source} (public domain), retold by Story Petals.
      </p>
      {noHindiVoice && (
        <p className="mt-2 text-center text-xs text-petal-deep">
          This device has no Hindi voice installed, so Hindi may sound unusual. Add one in your device&apos;s language settings.
        </p>
      )}
    </div>
  );
}

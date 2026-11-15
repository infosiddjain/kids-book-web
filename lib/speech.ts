"use client";

import { useEffect, useState } from "react";
import type { Lang } from "./stories";

export const speechLang = (lang: Lang) => (lang === "hi" ? "hi-IN" : "en-US");

/* ---------------- Text to speech ---------------- */

export function ttsSupported() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function getVoice(lang: Lang): SpeechSynthesisVoice | undefined {
  if (!ttsSupported()) return undefined;
  const prefix = lang === "hi" ? "hi" : "en";
  const matches = window.speechSynthesis
    .getVoices()
    .filter((v) => v.lang.toLowerCase().replace("_", "-").startsWith(prefix));
  if (lang === "en") {
    return (
      matches.find((v) => /en-(us|gb|in)/i.test(v.lang) && /samantha|google|female|aria|jenny/i.test(v.name)) ??
      matches[0]
    );
  }
  return matches.find((v) => /google|lekha|swara|kalpana/i.test(v.name)) ?? matches[0];
}

/** Re-renders once the browser has loaded its voice list. */
export function useVoices() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!ttsSupported()) return;
    const update = () => setReady(window.speechSynthesis.getVoices().length > 0);
    update();
    window.speechSynthesis.addEventListener("voiceschanged", update);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", update);
  }, []);
  return ready;
}

type SpeakOptions = {
  rate?: number;
  /** Called with the character index of the word being spoken. */
  onBoundary?: (charIndex: number) => void;
  onEnd?: () => void;
};

let stopCurrent: (() => void) | null = null;

export function stopSpeaking() {
  stopCurrent?.();
  stopCurrent = null;
}

export function speak(text: string, lang: Lang, { rate = 0.9, onBoundary, onEnd }: SpeakOptions = {}) {
  if (!ttsSupported()) {
    onEnd?.();
    return () => {};
  }
  stopSpeaking();
  const synth = window.speechSynthesis;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = speechLang(lang);
  const voice = getVoice(lang);
  if (voice) u.voice = voice;
  u.rate = rate;
  u.pitch = 1.1;

  const wordStarts = [...text.matchAll(/\S+/g)].map((m) => m.index ?? 0);
  let gotBoundary = false;
  let done = false;
  let timer: number | undefined;

  u.onboundary = (e) => {
    if (e.name && e.name !== "word") return;
    gotBoundary = true;
    window.clearTimeout(timer);
    onBoundary?.(e.charIndex);
  };

  // Some voices (often Hindi ones) never fire boundary events, so estimate word timing instead.
  u.onstart = () => {
    if (!onBoundary) return;
    window.setTimeout(() => {
      if (gotBoundary || done) return;
      let i = 0;
      const step = () => {
        if (gotBoundary || done || i >= wordStarts.length) return;
        onBoundary(wordStarts[i]);
        const len = (wordStarts[i + 1] ?? text.length) - wordStarts[i];
        i++;
        timer = window.setTimeout(step, (len * 70 + 80) / rate);
      };
      step();
    }, 300);
  };

  const finish = () => {
    if (done) return;
    done = true;
    window.clearTimeout(timer);
    stopCurrent = null;
    onEnd?.();
  };
  u.onend = finish;
  u.onerror = finish;

  const stop = () => {
    done = true;
    window.clearTimeout(timer);
    synth.cancel();
  };
  stopCurrent = stop;
  synth.cancel();
  synth.speak(u);
  return stop;
}

/* ---------------- Speech recognition ---------------- */

type SRAlternative = { transcript: string };
type SRResult = { isFinal: boolean; length: number; [i: number]: SRAlternative };
type SREvent = { results: { length: number; [i: number]: SRResult } };
type SR = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((e: SREvent) => void) | null;
  onend: (() => void) | null;
  onerror: ((e: { error: string }) => void) | null;
};
type SRConstructor = new () => SR;

function getRecognitionCtor(): SRConstructor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { SpeechRecognition?: SRConstructor; webkitSpeechRecognition?: SRConstructor };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function sttSupported() {
  return getRecognitionCtor() !== null;
}

type ListenOptions = {
  continuous?: boolean;
  /** transcript = best guess for everything heard so far; alternatives = all guesses for the latest phrase. */
  onResult: (transcript: string, alternatives: string[]) => void;
  onEnd?: () => void;
  onError?: (error: string) => void;
};

export function listen(lang: Lang, { continuous = false, onResult, onEnd, onError }: ListenOptions) {
  const Ctor = getRecognitionCtor();
  if (!Ctor) {
    onError?.("not-supported");
    return () => {};
  }
  stopSpeaking();
  const rec = new Ctor();
  rec.lang = speechLang(lang);
  rec.continuous = continuous;
  rec.interimResults = true;
  rec.maxAlternatives = 5;
  rec.onresult = (e) => {
    let transcript = "";
    for (let i = 0; i < e.results.length; i++) transcript += " " + e.results[i][0].transcript;
    const last = e.results[e.results.length - 1];
    const alternatives: string[] = [];
    for (let i = 0; i < last.length; i++) alternatives.push(last[i].transcript);
    onResult(transcript.trim(), alternatives);
  };
  rec.onerror = (e) => onError?.(e.error);
  rec.onend = () => onEnd?.();
  try {
    rec.start();
  } catch {
    onError?.("start-failed");
  }
  return () => rec.stop();
}

export function micErrorMessage(error: string) {
  if (error === "not-allowed" || error === "service-not-allowed")
    return "Please allow the microphone so I can hear you.";
  if (error === "no-speech") return "I didn't hear anything. Try again a little louder!";
  if (error === "not-supported")
    return "Speaking practice needs Chrome, Edge or Safari. You can still use typing!";
  if (error === "network") return "Speech needs an internet connection on this browser.";
  return "Something went wrong with the microphone. Please try again.";
}

/* ---------------- Text helpers ---------------- */

export function normalizeWords(text: string) {
  return text
    .toLowerCase()
    .normalize("NFC")
    .replace(/[^\p{L}\p{M}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function editDistance(a: string, b: string) {
  const dp = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = dp[j];
      dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = tmp;
    }
  }
  return dp[b.length];
}

export function similarWord(spoken: string, target: string) {
  if (spoken === target) return true;
  if (target.length >= 4 && editDistance(spoken, target) <= 1) return true;
  if (target.length >= 3 && spoken.length >= 3 && (spoken.startsWith(target) || target.startsWith(spoken))) return true;
  return false;
}

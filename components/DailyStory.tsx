"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import PetalScene from "./PetalScene";
import { dailyIndex, localDayNumber, minutesUntilMidnight } from "@/lib/daily";

export type DailyItem = {
  slug: string;
  source: string;
  minutes: number;
  title: { en: string; hi: string };
  moral: { en: string; hi: string };
  opening: string;
};

const SEEN_KEY = "story-petals-daily-seen";

// Re-check the clock every 30 seconds so the countdown ticks and the story flips at midnight.
const listeners = new Set<() => void>();
let timer: number | undefined;
function subscribe(cb: () => void) {
  listeners.add(cb);
  if (!timer) timer = window.setInterval(() => listeners.forEach((l) => l()), 30_000);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
    if (!listeners.size) {
      window.clearInterval(timer);
      timer = undefined;
    }
  };
}
const notify = () => listeners.forEach((l) => l());

function readSeen() {
  try {
    return Number(localStorage.getItem(SEEN_KEY) ?? -1);
  } catch {
    return -1;
  }
}

function formatCountdown(mins: number) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return h ? `${h}h ${m}m` : `${m}m`;
}

export default function DailyStory({ items }: { items: DailyItem[] }) {
  const day = useSyncExternalStore(subscribe, () => localDayNumber(), () => -1);
  const minsLeft = useSyncExternalStore(subscribe, () => minutesUntilMidnight(), () => 0);
  const seenDay = useSyncExternalStore(subscribe, readSeen, () => -1);

  if (day < 0) {
    return <div className="h-80 animate-pulse rounded-[2rem] bg-champagne/60 sm:h-72" aria-label="Loading today's story" />;
  }

  const item = items[dailyIndex(day, items.length)];
  const isNew = seenDay !== day;
  const today = new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });

  const markSeen = () => {
    try {
      localStorage.setItem(SEEN_KEY, String(day));
    } catch {}
    notify();
  };

  return (
    <article
      key={item.slug}
      className="grid animate-fade-up overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_50px_-20px_rgba(142,74,85,0.45)] ring-1 ring-blush md:grid-cols-[0.9fr_1.1fr]"
    >
      <PetalScene seed={day % 97} count={12} className="min-h-56">
        <div className="animate-pop text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-petal-deep/80">Story of the day</p>
          <p className="mt-2 text-8xl font-bold text-petal">{item.title.en.replace(/^The /, "").charAt(0)}</p>
          <p className="mt-1 text-sm font-medium text-ink/60">{today}</p>
        </div>
      </PetalScene>

      <div className="flex flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          {isNew ? (
            <span className="relative inline-flex items-center gap-2 rounded-full bg-petal px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              <span className="absolute inset-0 animate-ripple rounded-full bg-petal" />
              <span className="relative">New today</span>
            </span>
          ) : (
            <span className="rounded-full bg-champagne px-3 py-1 text-xs font-bold uppercase tracking-wide text-petal-deep">
              Today&apos;s story
            </span>
          )}
          <span className="text-xs text-ink/55">
            {item.source} · {item.minutes} min
          </span>
        </div>

        <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">{item.title.en}</h2>
        <p lang="hi" className="text-lg font-medium text-petal-deep">{item.title.hi}</p>
        <p className="mt-3 line-clamp-3 text-ink/70">{item.opening}</p>

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
          <Link href={`/books/${item.slug}`} onClick={markSeen} className="btn-primary">
            Read today&apos;s story
          </Link>
          <p className="text-sm text-ink/60">
            A new story arrives in <span className="font-semibold text-petal-deep">{formatCountdown(minsLeft)}</span>
          </p>
        </div>
      </div>
    </article>
  );
}

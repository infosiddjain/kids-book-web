"use client";

import { useMemo, useState } from "react";
import StoryCard from "./StoryCard";
import type { Story } from "@/lib/story-types";

export default function StoryLibrary({ stories, sources }: { stories: Story[]; sources: string[] }) {
  const [source, setSource] = useState("All");
  const [query, setQuery] = useState("");

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return stories.filter(
      (s) =>
        (source === "All" || s.source === source) &&
        (!q || s.title.en.toLowerCase().includes(q) || s.title.hi.includes(q) || s.source.toLowerCase().includes(q)),
    );
  }, [stories, source, query]);

  return (
    <section className="mt-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-ink">All {stories.length} stories</h2>
          <p lang="hi" className="text-petal-deep">सभी कहानियाँ</p>
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search stories / कहानी खोजें"
          aria-label="Search stories"
          className="w-full rounded-full border-2 border-blush bg-white px-5 py-2.5 text-ink outline-none transition focus:border-petal sm:w-72"
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter by collection">
        {["All", ...sources].map((s) => (
          <button
            key={s}
            onClick={() => setSource(s)}
            aria-pressed={source === s}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition duration-300 ${
              source === s ? "bg-petal text-white shadow" : "bg-white text-ink ring-1 ring-blush hover:bg-champagne"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div key={`${source}-${query}`} className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((s, i) => (
          <StoryCard key={s.slug} story={s} index={Math.min(i, 8)} />
        ))}
      </div>
      {shown.length === 0 && (
        <p className="mt-8 rounded-2xl bg-champagne/60 p-6 text-center text-ink/70">No stories match. Try another word!</p>
      )}
    </section>
  );
}

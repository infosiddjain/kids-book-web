import Link from "next/link";
import PetalScene from "./PetalScene";
import type { Story } from "@/lib/stories";

const seedFor = (slug: string) => [...slug].reduce((n, c) => n + c.charCodeAt(0), 0);

export default function StoryCard({ story, index = 0 }: { story: Story; index?: number }) {
  return (
    <Link
      href={`/books/${story.slug}`}
      style={{ animationDelay: `${index * 90}ms` }}
      className="group animate-fade-up overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-blush/60 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-12px_rgba(183,110,121,0.55)]"
    >
      <PetalScene seed={seedFor(story.slug)} count={7} className="h-36">
        <span className="text-6xl font-bold text-petal/90 transition duration-500 group-hover:scale-110 group-hover:-rotate-3">
          {story.title.en.replace(/^The /, "").charAt(0)}
        </span>
      </PetalScene>
      <div className="p-5">
        <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-petal-deep">{story.title.en}</h3>
        <p lang="hi" className="font-medium text-petal-deep">{story.title.hi}</p>
        <p className="mt-2 text-xs text-ink/60">
          {story.source} · {story.pages.length} pages · {story.minutes} min
        </p>
        <span className="mt-3 block h-0.5 origin-left scale-x-0 rounded-full bg-petal transition-transform duration-500 group-hover:scale-x-100" />
      </div>
    </Link>
  );
}

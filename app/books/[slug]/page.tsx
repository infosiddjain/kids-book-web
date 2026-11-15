import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Reader from "@/components/Reader";
import { getStory, stories } from "@/lib/stories";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const story = getStory((await params).slug);
  return story ? { title: `${story.title.en} | ${story.title.hi}`, description: story.moral.en } : {};
}

// The page renders a fallback straight away; the story streams in once the URL params resolve.
export default function StoryPage({ params }: Props) {
  return (
    <Suspense fallback={<ReaderSkeleton />}>
      <StoryReader params={params} />
    </Suspense>
  );
}

async function StoryReader({ params }: Props) {
  const story = getStory((await params).slug);
  if (!story) notFound();
  return <Reader story={story} />;
}

function ReaderSkeleton() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:py-10" aria-label="Opening story">
      <div className="mx-auto h-8 w-2/3 animate-pulse rounded-full bg-champagne" />
      <div className="mx-auto mt-3 h-4 w-24 animate-pulse rounded-full bg-champagne/70" />
      <div className="mt-8 overflow-hidden rounded-[2rem] bg-white ring-1 ring-blush/60">
        <div className="h-32 animate-pulse bg-gradient-to-br from-champagne via-white to-blush/50 sm:h-44" />
        <div className="space-y-3 p-6 sm:p-10">
          <div className="h-6 w-full animate-pulse rounded-full bg-champagne/80" />
          <div className="h-6 w-11/12 animate-pulse rounded-full bg-champagne/80" />
          <div className="h-6 w-3/4 animate-pulse rounded-full bg-champagne/80" />
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import DailyStory from "@/components/DailyStory";
import StoryLibrary from "@/components/StoryLibrary";
import { dailyItems, sources, stories } from "@/lib/stories";

export const metadata: Metadata = { title: "Stories" };

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="animate-fade-up text-3xl font-bold text-ink sm:text-4xl">Stories</h1>
      <p className="mt-2 max-w-2xl animate-fade-up text-ink/75 [animation-delay:100ms]">
        {stories.length} classic public-domain tales from Aesop, the Panchatantra, Jataka, Akbar–Birbal, Tenali Raman, the
        Brothers Grimm, Hans Christian Andersen and folk tales, retold simply in English and Hindi. A new story is picked
        for you every day!
      </p>
      <div className="mt-8">
        <DailyStory items={dailyItems} />
      </div>
      <StoryLibrary stories={stories} sources={sources} />
    </div>
  );
}

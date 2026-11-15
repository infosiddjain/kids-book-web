import type { Metadata } from "next";
import LetterPractice from "@/components/LetterPractice";

export const metadata: Metadata = { title: "Letter practice" };

export default function LearnPage() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 text-center">
        <h1 className="animate-fade-up text-3xl font-bold text-ink">Letter practice</h1>
        <p className="mt-2 text-ink/75">
          Listen to a letter, then tap it, type it or say it out loud. Get it right and it lights up green!
        </p>
      </div>
      <LetterPractice />
    </>
  );
}

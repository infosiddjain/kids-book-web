export type Lang = "en" | "hi";

export type StoryPage = { en: string; hi: string };

export type Story = {
  slug: string;
  source: string;
  minutes: number;
  title: Record<Lang, string>;
  moral: Record<Lang, string>;
  pages: StoryPage[];
};

/** Compact way to write a bilingual story. Reading time assumes ~60 words a minute for young readers. */
export function story(
  slug: string,
  source: string,
  [titleEn, titleHi]: [string, string],
  [moralEn, moralHi]: [string, string],
  pages: [string, string][],
): Story {
  const words = pages.reduce((n, [en]) => n + en.split(/\s+/).length, 0);
  return {
    slug,
    source,
    minutes: Math.max(2, Math.ceil(words / 60)),
    title: { en: titleEn, hi: titleHi },
    moral: { en: moralEn, hi: moralHi },
    pages: pages.map(([en, hi]) => ({ en, hi })),
  };
}

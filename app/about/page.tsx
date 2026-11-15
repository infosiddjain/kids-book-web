import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="animate-fade-up text-3xl font-bold text-ink">About {site.name}</h1>
      <div className="prose-page mt-4">
        <p>
          {site.name} is a free reading app for young children. It helps kids fall in love with stories while building
          early reading skills in <strong>English</strong> and <strong lang="hi">हिंदी</strong>.
        </p>

        <h2>What kids can do</h2>
        <ul>
          <li><strong>Listen</strong> to stories read aloud, with each word highlighted as it is spoken.</li>
          <li><strong>Read aloud</strong> themselves: the app listens and highlights the words they read.</li>
          <li><strong>Tap any word</strong> to hear how it sounds.</li>
          <li><strong>Practise letters</strong> (ABC, स्वर and व्यंजन) by tapping, typing or speaking.</li>
          <li>Switch between English and Hindi, or show both together.</li>
        </ul>

        <h2>Our stories</h2>
        <p>
          All stories are classic tales in the <strong>public domain</strong>: Aesop&apos;s Fables, the Panchatantra, Jataka Tales, the Hitopadesha, Akbar–Birbal and Tenali Raman folk tales, the Brothers Grimm, Hans Christian Andersen and traditional folk tales. A different story is featured every day.
          We retell them in our own simple words for young readers, so there are no copyrighted texts or pictures in the
          app.
        </p>

        <h2>Safe for kids</h2>
        <p>
          No sign-up, no ads and no tracking. Progress is saved only on your own device. Read our{" "}
          <Link href="/privacy">Privacy Policy</Link> to learn more.
        </p>
      </div>

      <section className="mt-10 animate-fade-up rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-blush/60 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-petal">Developer</p>
        <div className="mt-3 flex flex-wrap items-center gap-4">
          <div className="relative flex h-16 w-16 items-center justify-center">
            <span className="absolute inset-0 animate-ripple rounded-2xl bg-blush" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-petal to-blush text-xl font-bold text-white">
              {site.developer.split(" ").map((w) => w[0]).join("")}
            </span>
          </div>
          <div>
            <p className="text-xl font-bold text-ink">{site.developer}</p>
            <p className="text-ink/70">Designed and developed {site.name}</p>
            <a href={`mailto:${site.supportEmail}`} className="font-semibold text-petal-deep hover:underline">
              {site.supportEmail}
            </a>
          </div>
        </div>
        <p className="mt-4 text-sm text-ink/60">Version {site.version}</p>
      </section>
    </div>
  );
}

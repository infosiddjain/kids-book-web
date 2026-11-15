import Link from "next/link";
import PetalScene from "@/components/PetalScene";
import StoryCard from "@/components/StoryCard";
import { site } from "@/lib/site";
import DailyStory from "@/components/DailyStory";
import { dailyItems, stories } from "@/lib/stories";

const features = [
  { title: "Listen", text: "Stories are read aloud and every word lights up as it is spoken." },
  { title: "Read aloud", text: "Your child reads, and words turn gold as they say them correctly." },
  { title: "Learn letters", text: "ABC and हिंदी वर्णमाला practice by tapping, typing or speaking." },
  { title: "Two languages", text: "Every story in English and Hindi. Switch any time or show both." },
];

const demoWords = ["A", "big", "lion", "was", "sleeping..."];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        {/* Background: drifting petals and soft glows */}
        <PetalScene seed={7} count={16} className="absolute inset-0 -z-10 !bg-none" />
        <div className="absolute -left-32 top-10 -z-10 h-96 w-96 animate-float rounded-full bg-champagne blur-3xl" />
        <div className="absolute -right-24 bottom-0 -z-10 h-[28rem] w-[28rem] animate-float rounded-full bg-blush/45 blur-3xl [animation-delay:-3s]" />

        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-16 pt-12 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_1fr]">
          <div className="text-center lg:text-left">
            <p className="inline-flex animate-fade-up items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-sm font-semibold text-petal-deep shadow-sm ring-1 ring-blush backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ripple rounded-full bg-petal" />
                <span className="relative h-2 w-2 rounded-full bg-petal" />
              </span>
              Free · No sign-up · No ads
            </p>
            <h1 className="mt-6 animate-fade-up text-5xl font-bold leading-[1.05] tracking-tight text-ink [animation-delay:100ms] sm:text-6xl lg:text-7xl">
              Little readers,
              <br />
              <span className="text-shimmer">big stories.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-ink/70 [animation-delay:200ms] lg:mx-0">
              {site.tagline}. Classic tales kids love, read aloud with words that light up, plus fun letter practice.
            </p>
            <div className="mt-9 flex animate-fade-up flex-wrap justify-center gap-3 [animation-delay:300ms] lg:justify-start">
              <Link href="/books" className="btn-primary px-8 py-4 text-lg">Start reading</Link>
              <Link href="/learn" className="btn-secondary px-8 py-4 text-lg">Practise letters</Link>
            </div>
            <dl className="mt-10 flex animate-fade-up justify-center gap-8 [animation-delay:400ms] lg:justify-start">
              {[
                [String(stories.length), "Stories"],
                ["2", "Languages"],
                ["75", "Letters"],
              ].map(([n, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="text-3xl font-bold text-petal-deep">{n}</dd>
                  <dd className="text-sm text-ink/60">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Storybook preview */}
          <div className="relative mx-auto w-full max-w-md animate-pop px-4 [animation-delay:250ms] sm:px-8">
            <div className="absolute inset-x-6 inset-y-2 animate-tilt rounded-[2.5rem] bg-gradient-to-br from-blush to-petal/70 sm:inset-x-10" />
            <div className="relative overflow-hidden rounded-[2.25rem] bg-white shadow-[0_30px_60px_-20px_rgba(142,74,85,0.45)] ring-1 ring-blush">
              <PetalScene seed={2} count={10} className="h-40">
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-petal-deep/70">Now reading</p>
                  <p className="mt-1 text-2xl font-bold text-ink">The Lion and the Mouse</p>
                  <p lang="hi" className="text-petal-deep">शेर और चूहा</p>
                </div>
              </PetalScene>
              <div className="p-6 sm:p-7">
                <p className="text-2xl font-semibold leading-relaxed text-ink">
                  {demoWords.map((w, i) => (
                    <span key={i}>
                      <span className="animate-highlight rounded-md px-1" style={{ animationDelay: `${i}s` }}>
                        {w}
                      </span>{" "}
                    </span>
                  ))}
                </p>
                <p lang="hi" className="mt-2 text-lg text-ink/60">एक बड़ा शेर सो रहा था…</p>
                <div className="mt-6 flex items-center gap-4">
                  <span className="relative inline-flex shrink-0 items-center rounded-full bg-petal px-4 py-2 text-sm font-semibold text-white">
                    <span className="absolute inset-0 animate-ripple rounded-full bg-petal/60" />
                    <span className="relative">Read to me</span>
                  </span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-champagne">
                    <div className="h-full origin-left animate-progress rounded-full bg-gradient-to-r from-blush to-petal" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-1 top-28 animate-bob rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-blush sm:-left-6">
              <p className="text-xs text-ink/50">Language</p>
              <p className="font-semibold text-ink">
                English · <span lang="hi">हिंदी</span>
              </p>
            </div>
            <div className="absolute -bottom-6 -right-1 animate-bob rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-blush [animation-delay:-2.5s] sm:-right-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-petal">
                  A<span className="text-blush">a</span>
                </span>
                <div>
                  <p className="text-xs text-ink/50">Letter practice</p>
                  <p className="font-semibold text-success">Great job!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-ink">Today&apos;s story</h2>
            <p className="text-sm text-ink/60">A new story every day. Come back tomorrow for another!</p>
          </div>
        </div>
        <DailyStory items={dailyItems} />
      </section>

      <section className="bg-white/70 py-12">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              style={{ animationDelay: `${i * 100}ms` }}
              className="group animate-fade-up rounded-3xl bg-champagne/50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-champagne"
            >
              <p className="text-3xl font-bold text-petal/70 transition group-hover:text-petal">0{i + 1}</p>
              <h2 className="mt-2 text-lg font-bold text-ink">{f.title}</h2>
              <p className="mt-1 text-sm text-ink/75">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-ink">More stories</h2>
          <Link href="/books" className="font-semibold text-petal-deep hover:underline">See all {stories.length}</Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.slice(6, 9).map((s, i) => (
            <StoryCard key={s.slug} story={s} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}

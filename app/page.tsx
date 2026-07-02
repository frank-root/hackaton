import Link from "next/link";
import { event } from "@/content/event";
import { teams } from "@/content/teams";
import SpaceNeedle from "@/components/SpaceNeedle";

const sections = [
  {
    href: "/story",
    icon: "📖",
    title: "The Story",
    blurb: "The full recap of the night, hour by hour.",
  },
  {
    href: "/projects",
    icon: "🛠",
    title: "Projects",
    blurb: "Every team, what they built, and who took home prizes.",
  },
  {
    href: "/gallery",
    icon: "📷",
    title: "Gallery",
    blurb: "The photos to prove it all happened.",
  },
];

// Flat skyline strip for the hero — buildings with needles rising between.
const buildings = [10, 22, 14, 30, 18, 26, 12, 34, 20, 16, 28, 14];

export default function Home() {
  const winners = teams.filter((t) => t.prize);

  return (
    <>
      {/* Full-bleed hero: navy gradient, centered uppercase title, ghost CTA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy to-navy-soft text-center text-white">
        <div className="relative z-10 mx-auto max-w-3xl px-5 pt-20 pb-36">
          <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-green">
            Event recap · {event.date} · {event.city}
          </p>
          <h1 className="mt-4 font-display text-5xl font-extrabold uppercase tracking-wide sm:text-6xl">
            {event.name}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-wolf">
            {event.tagline}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/story"
              className="bg-green px-6 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-navy transition-colors hover:bg-white"
            >
              Read the story
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white/70 px-6 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-green hover:text-green"
            >
              See the projects
            </Link>
          </div>
        </div>
        <div
          className="absolute inset-x-0 bottom-0 flex items-end justify-between px-2 text-[#001529]"
          aria-hidden="true"
        >
          {buildings.map((h, i) =>
            i % 4 === 2 ? (
              <SpaceNeedle key={i} className="h-28 shrink-0" />
            ) : (
              <div
                key={i}
                className="w-10 shrink-0 bg-current sm:w-14"
                style={{ height: `${h * 2.4}px` }}
              />
            )
          )}
        </div>
      </section>

      {/* Big-number stats strip — peak 2016 */}
      <section className="bg-white shadow-sm">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-10 text-center sm:grid-cols-4">
          {event.stats.map(({ label, value }) => (
            <div key={label}>
              <dd className="font-display text-4xl font-extrabold text-navy">
                {value}
              </dd>
              <dt className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-wolf">
                {label}
              </dt>
            </div>
          ))}
        </dl>
      </section>

      {/* Section cards */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <p className="mx-auto max-w-2xl text-center text-lg">{event.summary}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {sections.map(({ href, icon, title, blurb }) => (
            <Link key={href} href={href} className="card p-6 text-center">
              <span className="text-3xl" aria-hidden="true">
                {icon}
              </span>
              <h2 className="mt-3 font-display text-sm font-extrabold uppercase tracking-[0.15em] text-navy">
                {title}
              </h2>
              <div className="mx-auto mt-2 h-0.5 w-8 bg-green" />
              <p className="mt-3 text-sm text-ink/70">{blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Winners */}
      {winners.length > 0 && (
        <section className="bg-navy py-14 text-white">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-center font-display text-2xl font-extrabold uppercase tracking-wide">
              The podium
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-green" />
            <ul className="mx-auto mt-8 max-w-2xl space-y-3">
              {winners.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/projects/${t.slug}`}
                    className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-l-4 border-green bg-navy-soft px-5 py-4 transition-colors hover:bg-[#12406b]"
                  >
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-green">
                      {t.prize}
                    </span>
                    <span className="font-display text-lg font-bold">
                      {t.projectName}
                    </span>
                    <span className="text-sm text-wolf">by {t.teamName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}

import Link from "next/link";
import { event } from "@/content/event";
import { teams } from "@/content/teams";

// 25 ticks = a 24-hour span with a tick on each hour, taller every 6h.
const ticks = Array.from({ length: 25 }, (_, i) => i);

const sections = [
  {
    href: "/story",
    title: "The Story",
    blurb: "The full recap of the night, hour by hour.",
  },
  {
    href: "/projects",
    title: "Projects",
    blurb: "Every team, what they built, and who took home prizes.",
  },
  {
    href: "/gallery",
    title: "Gallery",
    blurb: "The photos to prove it all happened.",
  },
];

export default function Home() {
  const winners = teams.filter((t) => t.prize);

  return (
    <>
      {/* Night: the hero is the night itself */}
      <section className="bg-night text-dawn">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16">
          <p className="font-mono text-sm uppercase tracking-widest text-sodium">
            Event recap · {event.date} · {event.city}
          </p>
          <h1 className="mt-4 font-display text-6xl font-bold tracking-tight sm:text-8xl">
            {event.name}
          </h1>
          <p className="mt-6 max-w-xl text-xl text-mist">{event.tagline}</p>

          {/* The 24-hour strip: the whole event, one glance */}
          <div className="mt-16" aria-hidden="true">
            <div className="flex items-end justify-between">
              {ticks.map((h) => (
                <div
                  key={h}
                  className={`w-px ${
                    h % 6 === 0 ? "h-6 bg-sodium" : "h-3 bg-mist/40"
                  }`}
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between font-mono text-xs text-mist">
              <span>doors open</span>
              <span className="hidden sm:inline">the long night</span>
              <span>demos</span>
            </div>
          </div>

          {/* Stats as log lines, not big-number cards */}
          <dl className="mt-14 grid gap-2 font-mono text-sm sm:grid-cols-2">
            {event.stats.map(({ label, value }) => (
              <div key={label} className="flex gap-3">
                <dt className="text-mist">
                  <span className="pr-3 text-sodium">&gt;</span>
                  {label}
                </dt>
                <dd className="text-dawn">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Dawn: what came out of the night */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="max-w-2xl text-lg">{event.summary}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {sections.map(({ href, title, blurb }) => (
            <Link
              key={href}
              href={href}
              className="group rounded-md border border-ink/10 bg-white p-6 transition-colors hover:border-sodium"
            >
              <h2 className="font-display text-2xl font-bold group-hover:text-night">
                {title}
              </h2>
              <p className="mt-2 text-sm text-ink/70">{blurb}</p>
              <p className="mt-4 font-mono text-sm text-sodium">Read →</p>
            </Link>
          ))}
        </div>

        {winners.length > 0 && (
          <div className="mt-16">
            <h2 className="font-mono text-sm uppercase tracking-widest text-ink/60">
              Winners
            </h2>
            <ul className="mt-4 divide-y divide-ink/10">
              {winners.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/projects/${t.slug}`}
                    className="group flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4"
                  >
                    <span className="rounded bg-sodium px-2 py-0.5 font-mono text-xs font-medium text-night">
                      {t.prize}
                    </span>
                    <span className="font-display text-xl font-bold group-hover:text-sodium">
                      {t.projectName}
                    </span>
                    <span className="text-sm text-ink/60">{t.teamName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}

import Link from "next/link";
import { event } from "@/content/event";
import { teams } from "@/content/teams";
import RetroPanel from "@/components/RetroPanel";
import { NeedleDivider } from "@/components/SpaceNeedle";

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
    title: "Photo Gallery",
    blurb: "The photos to prove it all happened.",
  },
];

export default function Home() {
  const winners = teams.filter((t) => t.prize);

  return (
    <>
      {/* The obligatory scrolling welcome */}
      <div className="marquee bevel-in mb-4 bg-silhouette py-1 font-mono text-[12px] font-bold text-gold">
        <span className="marquee-track">
          ★·.·´¯`·.·★ Welcome to the OFFICIAL {event.name} recap page!! You are
          now surfing the story of {event.date} in {event.city}. Enjoy your
          stay and don&apos;t forget to sign the guestbook!! ★·.·´¯`·.·★
        </span>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        {/* Main column */}
        <div className="flex-1 space-y-4">
          <RetroPanel title="⚡ What is this page?">
            <p className="retro-links text-[13px] leading-relaxed">
              {event.summary} Everything below was built, photographed, and
              barely slept through during <b>{event.name}</b> — 24 hours of
              hacking in the shadow of the Space Needle.
            </p>
            <NeedleDivider />
            <ul className="retro-links space-y-2 text-[13px]">
              {sections.map(({ href, title, blurb }) => (
                <li key={href}>
                  <span className="mr-1 text-navy">▸</span>
                  <Link href={href} className="font-bold">
                    {title}
                  </Link>{" "}
                  — {blurb}
                </li>
              ))}
            </ul>
          </RetroPanel>

          {winners.length > 0 && (
            <RetroPanel title="🏆 Hall of Fame">
              <table className="w-full border-collapse text-[13px]">
                <tbody>
                  {winners.map((t) => (
                    <tr key={t.slug} className="border-b border-dotted border-navy/40 last:border-0">
                      <td className="py-1.5 pr-2 whitespace-nowrap font-mono text-[11px] font-bold text-navy">
                        {t.prize}
                      </td>
                      <td className="retro-links py-1.5">
                        <Link href={`/projects/${t.slug}`} className="font-bold">
                          {t.projectName}
                        </Link>{" "}
                        <span className="text-[11px]">by {t.teamName}</span>
                      </td>
                      <td className="py-1.5 text-right">
                        <span className="blink bg-gold px-1 text-[10px] font-bold text-[#cc0000]">
                          NEW!
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </RetroPanel>
          )}
        </div>

        {/* Sidebar */}
        <div className="w-full space-y-4 sm:w-52">
          <RetroPanel title="📊 Event stats">
            <table className="w-full text-[12px]">
              <tbody>
                {event.stats.map(({ label, value }) => (
                  <tr key={label}>
                    <td className="py-0.5">{label}</td>
                    <td className="py-0.5 text-right font-mono font-bold text-navy">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </RetroPanel>

          <RetroPanel title="👁 Visitors">
            <p className="text-center text-[11px]">You are visitor number:</p>
            <p className="bevel-in mx-auto mt-1 w-fit bg-black px-2 py-0.5 font-mono text-lg font-bold tracking-widest text-[#33ff33]">
              013847
            </p>
            <p className="mt-1 text-center text-[10px] text-[#555555]">
              (counter may be aspirational)
            </p>
          </RetroPanel>

          <RetroPanel title="🌧 Seattle weather">
            <p className="text-center text-[12px]">
              Raining.
              <br />
              <span className="text-[10px] text-[#555555]">
                (forecast valid year-round)
              </span>
            </p>
          </RetroPanel>
        </div>
      </div>
    </>
  );
}

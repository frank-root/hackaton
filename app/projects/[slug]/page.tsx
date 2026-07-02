import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBand from "@/components/PageBand";
import RetroPanel from "@/components/RetroPanel";
import { teams } from "@/content/teams";

type Props = { params: Promise<{ slug: string }> };

// With `output: "export"` every route must be known at build time.
// This tells Next exactly which /projects/<slug> pages to generate.
export function generateStaticParams() {
  return teams.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const team = teams.find((t) => t.slug === slug);
  return { title: team ? team.projectName : "Project" };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const team = teams.find((t) => t.slug === slug);
  if (!team) notFound();

  return (
    <article>
      <PageBand
        eyebrow={team.prize ? `🏆 ${team.prize}` : team.teamName}
        title={team.projectName}
        intro={team.pitch}
      />

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex-1 space-y-4">
          <RetroPanel title="📝 The write-up">
            <div className="space-y-3 text-sm leading-relaxed">
              {team.description.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </RetroPanel>

          {team.images && team.images.length > 0 && (
            <RetroPanel title="📷 Screenshots">
              <div className="grid gap-2 sm:grid-cols-2">
                {team.images.map((img) => (
                  <Image
                    key={img}
                    src={`/projects/${team.slug}/${img}`}
                    alt={`${team.projectName} screenshot`}
                    width={800}
                    height={450}
                    className="bevel-in"
                  />
                ))}
              </div>
            </RetroPanel>
          )}
        </div>

        <div className="w-full space-y-4 sm:w-52">
          <RetroPanel title="ℹ Team info">
            <table className="w-full text-[13px]">
              <tbody>
                <tr>
                  <td className="py-0.5 pr-2 align-top font-bold">Team:</td>
                  <td className="py-0.5">{team.teamName}</td>
                </tr>
                <tr>
                  <td className="py-0.5 pr-2 align-top font-bold">Who:</td>
                  <td className="py-0.5">{team.members.join(", ")}</td>
                </tr>
                {team.prize && (
                  <tr>
                    <td className="py-0.5 pr-2 align-top font-bold">Won:</td>
                    <td className="py-0.5">
                      <span className="bg-gold px-1 font-mono text-[10px] font-bold text-[#cc0000]">
                        {team.prize}
                      </span>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {(team.demoUrl || team.repoUrl) && (
              <ul className="retro-links mt-2 space-y-1 border-t border-dotted border-navy/40 pt-2 text-[13px]">
                {team.demoUrl && (
                  <li>
                    <span className="mr-1 text-navy">▸</span>
                    <a href={team.demoUrl}>Live demo</a>
                  </li>
                )}
                {team.repoUrl && (
                  <li>
                    <span className="mr-1 text-navy">▸</span>
                    <a href={team.repoUrl}>Source code</a>
                  </li>
                )}
              </ul>
            )}
          </RetroPanel>

          <p className="retro-links text-[13px]">
            « <Link href="/projects">Back to all projects</Link>
          </p>
        </div>
      </div>
    </article>
  );
}

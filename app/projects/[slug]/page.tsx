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

      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row">
        <div className="flex-1 space-y-6">
          <RetroPanel title="The write-up">
            <div className="space-y-4 leading-relaxed">
              {team.description.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </RetroPanel>

          {team.images && team.images.length > 0 && (
            <RetroPanel title="Screenshots">
              <div className="grid gap-3 sm:grid-cols-2">
                {team.images.map((img) => (
                  <Image
                    key={img}
                    src={`/projects/${team.slug}/${img}`}
                    alt={`${team.projectName} screenshot`}
                    width={800}
                    height={450}
                    className="rounded"
                  />
                ))}
              </div>
            </RetroPanel>
          )}
        </div>

        <div className="w-full space-y-6 sm:w-64">
          <RetroPanel title="Team info">
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-wolf">
                  Team
                </dt>
                <dd className="mt-0.5">{team.teamName}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-wolf">
                  Members
                </dt>
                <dd className="mt-0.5">{team.members.join(", ")}</dd>
              </div>
              {team.prize && (
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-wolf">
                    Won
                  </dt>
                  <dd className="mt-1">
                    <span className="bg-green px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-wider text-navy">
                      {team.prize}
                    </span>
                  </dd>
                </div>
              )}
            </dl>
            {(team.demoUrl || team.repoUrl) && (
              <ul className="body-links mt-4 space-y-1.5 border-t border-mist pt-4 text-sm">
                {team.demoUrl && (
                  <li>
                    <a href={team.demoUrl}>Live demo →</a>
                  </li>
                )}
                {team.repoUrl && (
                  <li>
                    <a href={team.repoUrl}>Source code →</a>
                  </li>
                )}
              </ul>
            )}
          </RetroPanel>

          <p className="body-links text-sm">
            <Link href="/projects">← Back to all projects</Link>
          </p>
        </div>
      </div>
    </article>
  );
}

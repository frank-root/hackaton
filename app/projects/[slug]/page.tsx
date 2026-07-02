import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBand from "@/components/PageBand";
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
    <>
      <PageBand
        eyebrow={team.prize ? `🏆 ${team.prize}` : team.teamName}
        title={team.projectName}
        intro={team.pitch}
      />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <dl className="grid gap-x-8 gap-y-4 font-mono text-sm sm:grid-cols-2">
          <div>
            <dt className="uppercase tracking-widest text-ink/50">Team</dt>
            <dd className="mt-1">{team.teamName}</dd>
          </div>
          <div>
            <dt className="uppercase tracking-widest text-ink/50">Members</dt>
            <dd className="mt-1">{team.members.join(", ")}</dd>
          </div>
          {(team.demoUrl || team.repoUrl) && (
            <div className="sm:col-span-2">
              <dt className="uppercase tracking-widest text-ink/50">Links</dt>
              <dd className="mt-1 flex gap-4">
                {team.demoUrl && (
                  <a
                    href={team.demoUrl}
                    className="text-sodium underline underline-offset-4 hover:text-night"
                  >
                    Live demo
                  </a>
                )}
                {team.repoUrl && (
                  <a
                    href={team.repoUrl}
                    className="text-sodium underline underline-offset-4 hover:text-night"
                  >
                    Source code
                  </a>
                )}
              </dd>
            </div>
          )}
        </dl>

        <div className="mt-10 space-y-5 text-lg leading-relaxed">
          {team.description.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {team.images && team.images.length > 0 && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {team.images.map((img) => (
              <Image
                key={img}
                src={`/projects/${team.slug}/${img}`}
                alt={`${team.projectName} screenshot`}
                width={800}
                height={450}
                className="rounded-md border border-ink/10"
              />
            ))}
          </div>
        )}

        <p className="mt-14 font-mono text-sm">
          <Link href="/projects" className="text-sodium hover:text-night">
            ← All projects
          </Link>
        </p>
      </article>
    </>
  );
}

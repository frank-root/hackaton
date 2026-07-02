import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBand from "@/components/PageBand";
import { teams } from "@/content/teams";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <PageBand
        eyebrow="The output"
        title="Projects"
        intro="Everything that shipped before the demo bell. Winners wear a badge."
      />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((t) => (
            <Link
              key={t.slug}
              href={`/projects/${t.slug}`}
              className="group overflow-hidden rounded-md border border-ink/10 bg-white transition-colors hover:border-sodium"
            >
              {t.images?.[0] ? (
                <Image
                  src={`/projects/${t.slug}/${t.images[0]}`}
                  alt={`${t.projectName} screenshot`}
                  width={640}
                  height={360}
                  className="aspect-video w-full object-cover"
                />
              ) : (
                <div className="flex aspect-video items-center justify-center bg-night">
                  <span className="font-display text-5xl font-bold text-sodium">
                    {t.projectName.charAt(0)}
                  </span>
                </div>
              )}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-display text-xl font-bold group-hover:text-sodium">
                    {t.projectName}
                  </h2>
                  {t.prize && (
                    <span className="shrink-0 rounded bg-sodium px-2 py-0.5 font-mono text-xs font-medium text-night">
                      {t.prize}
                    </span>
                  )}
                </div>
                <p className="mt-1 font-mono text-xs text-ink/50">
                  {t.teamName}
                </p>
                <p className="mt-3 text-sm text-ink/70">{t.pitch}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

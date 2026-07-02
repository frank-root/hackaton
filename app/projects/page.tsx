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
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((t) => (
            <Link
              key={t.slug}
              href={`/projects/${t.slug}`}
              className="card overflow-hidden"
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
                <div className="flex aspect-video items-center justify-center bg-gradient-to-b from-navy to-navy-soft">
                  <span className="font-display text-5xl font-extrabold text-green">
                    {t.projectName.charAt(0)}
                  </span>
                </div>
              )}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-display text-base font-extrabold uppercase tracking-wide text-navy">
                    {t.projectName}
                  </h2>
                  {t.prize && (
                    <span className="shrink-0 bg-green px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-wider text-navy">
                      {t.prize}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-wolf">
                  {t.teamName}
                </p>
                <p className="mt-3 text-sm text-ink/75">{t.pitch}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

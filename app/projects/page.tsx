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
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {teams.map((t) => (
          <Link
            key={t.slug}
            href={`/projects/${t.slug}`}
            className="bevel-out group bg-paper p-1.5 hover:bg-[#ffffcc]"
          >
            {t.images?.[0] ? (
              <Image
                src={`/projects/${t.slug}/${t.images[0]}`}
                alt={`${t.projectName} screenshot`}
                width={640}
                height={360}
                className="bevel-in aspect-video w-full object-cover"
              />
            ) : (
              <div className="bevel-in flex aspect-video items-center justify-center bg-gradient-to-b from-navy to-sky">
                <span className="font-display text-4xl font-bold text-gold">
                  {t.projectName.charAt(0)}
                </span>
              </div>
            )}
            <div className="p-2">
              <h2 className="font-display text-base font-bold text-link underline group-hover:text-navy">
                {t.projectName}
              </h2>
              {t.prize && (
                <span className="mt-0.5 inline-block bg-gold px-1 font-mono text-[10px] font-bold text-[#cc0000]">
                  ★ {t.prize} ★
                </span>
              )}
              <p className="mt-1 text-[11px] text-[#555555]">by {t.teamName}</p>
              <p className="mt-1.5 text-[12px]">{t.pitch}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

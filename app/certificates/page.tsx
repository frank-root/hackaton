import type { Metadata } from "next";
import PageBand from "@/components/PageBand";
import Certificate from "@/components/Certificate";
import PrintButton from "@/components/PrintButton";
import { teams } from "@/content/teams";

export const metadata: Metadata = {
  title: "Certificates",
  robots: { index: false }, // utility page for organizers, not for search
};

const places = ["1st Place", "2nd Place", "3rd Place"];

export default function CertificatesPage() {
  return (
    <>
      <div className="print:hidden">
        <PageBand
          eyebrow="For the organizers"
          title="Certificates"
          intro="One per podium place, sized for Letter landscape. Winners are filled in from the teams list — set a team's prize to 1st/2nd/3rd Place and their name appears; otherwise the line stays blank for handwriting."
        />
      </div>
      <section className="space-y-6 print:space-y-0">
        <div className="flex flex-wrap items-center justify-between gap-2 print:hidden">
          <p className="font-mono text-[12px] text-[#555555]">
            In the print dialog choose landscape orientation and disable
            headers/footers.
          </p>
          <PrintButton />
        </div>
        {places.map((place) => (
          <Certificate
            key={place}
            place={place}
            team={teams.find((t) => t.prize === place)}
          />
        ))}
      </section>
    </>
  );
}

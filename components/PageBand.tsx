import SpaceNeedle from "@/components/SpaceNeedle";

// Page title strip — needle bullet, Trebuchet title, dotted rule underneath.
export default function PageBand({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-4 border-b-2 border-dotted border-navy pb-3">
      <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-navy">
        » {eyebrow}
      </p>
      <div className="mt-1 flex items-center gap-2 text-navy">
        <SpaceNeedle className="h-8" />
        <h1 className="font-display text-3xl font-bold">{title}</h1>
      </div>
      {intro && <p className="mt-2 max-w-2xl text-[13px]">{intro}</p>}
    </div>
  );
}

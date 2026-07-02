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
    <div className="mb-5 border-b border-navy/15 pb-4">
      <p className="font-mono text-xs font-bold uppercase tracking-widest text-navy">
        » {eyebrow}
      </p>
      <div className="mt-1 flex items-center gap-2.5 text-navy">
        <SpaceNeedle className="h-9" />
        <h1 className="font-display text-3xl font-bold">{title}</h1>
      </div>
      {intro && <p className="mt-2 max-w-2xl text-sm">{intro}</p>}
    </div>
  );
}

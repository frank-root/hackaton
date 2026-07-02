// The dark "night band" that opens every inner page — keeps the
// night → dawn arc consistent across the site.
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
    <section className="bg-night text-dawn">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-16">
        <p className="font-mono text-sm uppercase tracking-widest text-sodium">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          {title}
        </h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-mist">{intro}</p>}
      </div>
    </section>
  );
}

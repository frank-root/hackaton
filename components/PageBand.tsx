// Flat navy page header with the green accent rule — every inner page opens with it.
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
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-green">
          {eyebrow}
        </p>
        <h1 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-wide sm:text-4xl">
          {title}
        </h1>
        <div className="mt-4 h-1 w-16 bg-green" />
        {intro && <p className="mt-4 max-w-2xl text-wolf">{intro}</p>}
      </div>
    </section>
  );
}

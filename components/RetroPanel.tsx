// Flat 2016 card with an uppercase section label and green accent rule.
// (Name is a holdover from the retro design; the API stayed the same.)
export default function RetroPanel({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`card p-6 ${className}`}>
      <h2 className="font-display text-xs font-extrabold uppercase tracking-[0.2em] text-navy">
        {title}
      </h2>
      <div className="mt-2 mb-4 h-0.5 w-10 bg-green" />
      {children}
    </section>
  );
}

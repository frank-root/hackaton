// Forum-category-style box: navy gradient title bar, white content area.
// The whole site is assembled out of these.
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
    <section className={`bevel-out bg-paper ${className}`}>
      <h2 className="bg-gradient-to-b from-sky to-navy px-3 py-1 font-display text-sm font-bold text-white">
        {title}
      </h2>
      <div className="p-3">{children}</div>
    </section>
  );
}

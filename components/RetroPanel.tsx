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
      <h2 className="bg-navy px-4 py-2 font-display text-sm font-bold text-white">
        {title}
      </h2>
      <div className="p-4">{children}</div>
    </section>
  );
}

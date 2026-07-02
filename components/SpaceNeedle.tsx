// Simplified Space Needle silhouette. Inherits currentColor so it can be
// a banner landmark, a bullet point, or a divider at any size.
export default function SpaceNeedle({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 60 120"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="29" y="0" width="2" height="14" />
      <path d="M30 10 Q46 15 48 26 L12 26 Q14 15 30 10 Z" />
      <path d="M4 26 L56 26 L46 38 L14 38 Z" />
      <path d="M26 38 L34 38 L33 50 L27 50 Z" />
      <path d="M27 50 L33 50 L44 118 L38 118 L30 64 L22 118 L16 118 Z" />
      <rect x="21" y="92" width="18" height="2" />
    </svg>
  );
}

// A row of three needles — the site's section divider.
export function NeedleDivider() {
  return (
    <div
      className="my-4 flex items-end justify-center gap-6 text-navy"
      aria-hidden="true"
    >
      <SpaceNeedle className="h-5" />
      <SpaceNeedle className="h-7" />
      <SpaceNeedle className="h-5" />
    </div>
  );
}

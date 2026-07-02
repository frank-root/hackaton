"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { event } from "@/content/event";
import SpaceNeedle from "@/components/SpaceNeedle";

const links = [
  { href: "/", label: "Home" },
  { href: "/story", label: "The Story" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
];

// The skyline strip: boxy buildings with Space Needles rising between them.
const buildings = [10, 22, 14, 30, 18, 26, 12, 34, 20, 16, 28, 14];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="print:hidden">
      {/* Dusk-sky banner with the Seattle silhouette */}
      <div className="relative h-36 overflow-hidden border-b-2 border-silhouette bg-gradient-to-b from-navy via-sky to-dusk">
        <div className="relative z-10 px-5 pt-5">
          <h1
            className="font-display text-4xl font-bold text-white"
            style={{ textShadow: "2px 2px 0 #001830" }}
          >
            {event.name}
          </h1>
          <p className="mt-1 font-display text-sm italic text-white/90">
            {event.tagline}
          </p>
        </div>
        <div
          className="absolute inset-x-0 bottom-0 flex items-end justify-between px-2 text-silhouette"
          aria-hidden="true"
        >
          {buildings.map((h, i) => (
            i % 4 === 2 ? (
              <SpaceNeedle key={i} className="h-24 shrink-0" />
            ) : (
              <div
                key={i}
                className="w-8 shrink-0 bg-current sm:w-10"
                style={{ height: `${h * 2}px` }}
              />
            )
          ))}
        </div>
      </div>

      {/* Nav pills — the pressed-in button, twenty years on */}
      <nav className="flex flex-wrap gap-1.5 border-b border-navy/15 bg-panel px-3 py-2">
        {links.map(({ href, label }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`rounded-lg px-4 py-1.5 font-display text-sm font-bold transition-colors ${
                active
                  ? "bg-navy text-white shadow-sm"
                  : "text-ink hover:bg-white/80 hover:text-navy"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

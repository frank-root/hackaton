"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { event } from "@/content/event";
import SpaceNeedle from "@/components/SpaceNeedle";

const links = [
  { href: "/story", label: "The Story" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-navy shadow-md print:hidden">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-sm font-extrabold uppercase tracking-[0.15em] text-white"
        >
          <SpaceNeedle className="h-7 text-green" />
          {event.name}
        </Link>
        <nav className="flex h-full items-stretch">
          {links.map(({ href, label }) => {
            const active = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center border-b-[3px] px-4 font-display text-xs font-bold uppercase tracking-[0.12em] transition-colors ${
                  active
                    ? "border-green text-white"
                    : "border-transparent text-wolf hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

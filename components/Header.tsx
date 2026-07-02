"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { event } from "@/content/event";

const links = [
  { href: "/story", label: "The Story" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-night text-dawn print:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight hover:text-sodium"
        >
          {event.name}
        </Link>
        <nav className="flex gap-1 font-mono text-sm">
          {links.map(({ href, label }) => {
            const active = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`rounded px-3 py-1.5 transition-colors ${
                  active
                    ? "bg-night-soft text-sodium"
                    : "text-mist hover:text-dawn"
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

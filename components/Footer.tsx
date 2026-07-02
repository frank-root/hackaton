import { event } from "@/content/event";
import SpaceNeedle from "@/components/SpaceNeedle";

export default function Footer() {
  return (
    <footer className="bg-navy text-wolf print:hidden">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center">
        <SpaceNeedle className="h-10 text-green" />
        <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-white">
          {event.name} · {event.date} · {event.city}
        </p>
        <p className="text-sm">
          Built by the people who were there ·{" "}
          <a
            href="https://github.com/ryanwill424-lang/hackaton"
            className="text-green underline underline-offset-2 hover:text-white"
          >
            source on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

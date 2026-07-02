import { event } from "@/content/event";

export default function Footer() {
  return (
    <footer className="bg-night text-mist">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 font-mono text-sm sm:flex-row sm:items-baseline sm:justify-between">
        <p>
          <span className="text-dawn">{event.name}</span> · {event.date} ·{" "}
          {event.city}
        </p>
        <p>Built by the people who were there.</p>
      </div>
    </footer>
  );
}

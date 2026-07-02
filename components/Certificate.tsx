import { event } from "@/content/event";
import type { Team } from "@/content/teams";

const ticks = Array.from({ length: 25 }, (_, i) => i);

function TickStrip() {
  return (
    <div className="flex items-end justify-between" aria-hidden="true">
      {ticks.map((h) => (
        <div
          key={h}
          className={`w-px ${h % 6 === 0 ? "h-4 bg-sodium" : "h-2 bg-ink/25"}`}
        />
      ))}
    </div>
  );
}

// One printable certificate. Sized by the .certificate rules in globals.css:
// on screen it keeps a Letter-landscape aspect ratio, in print it fills the page.
export default function Certificate({
  place,
  team,
}: {
  place: string;
  team?: Team;
}) {
  return (
    <div className="certificate flex flex-col border-8 border-night bg-dawn text-ink">
      <div className="m-3 flex flex-1 flex-col border border-sodium px-14 py-10">
        <TickStrip />

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <p className="font-mono text-sm uppercase tracking-widest text-ink/60">
            {event.name} · {event.date} · {event.city}
          </p>
          <p className="mt-6 font-display text-2xl">Certificate of Achievement</p>
          <p className="mt-2 font-display text-7xl font-bold text-night">
            {place}
          </p>

          <p className="mt-10 font-mono text-sm uppercase tracking-widest text-ink/60">
            awarded to
          </p>
          {team ? (
            <>
              <p className="mt-3 font-display text-4xl font-bold">
                {team.teamName}
              </p>
              <p className="mt-2 font-mono text-base text-ink/70">
                for {team.projectName}
              </p>
            </>
          ) : (
            // No winner in content/teams.ts yet — leave a line to write on.
            <div className="mt-12 w-96 border-b-2 border-ink/40" />
          )}
        </div>

        <div className="flex items-end justify-between gap-16 font-mono text-xs uppercase tracking-widest text-ink/60">
          <div className="flex-1">
            <div className="border-b border-ink/40 pb-8" />
            <p className="mt-2">Organizer</p>
          </div>
          <div className="flex-1">
            <div className="border-b border-ink/40 pb-8" />
            <p className="mt-2">Date</p>
          </div>
        </div>

        <div className="mt-8">
          <TickStrip />
        </div>
      </div>
    </div>
  );
}

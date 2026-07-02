import { event } from "@/content/event";
import type { Team } from "@/content/teams";
import SpaceNeedle from "@/components/SpaceNeedle";

// One printable certificate. Sized by the .certificate rules in globals.css:
// on screen it keeps a Letter-landscape aspect ratio, in print it fills the page.
// Deliberately restrained compared to the site — this gets framed on a wall.
export default function Certificate({
  place,
  team,
}: {
  place: string;
  team?: Team;
}) {
  return (
    <div className="certificate flex flex-col border-8 border-navy bg-white text-ink">
      <div className="m-3 flex flex-1 flex-col border-2 border-green px-14 py-10">
        <div className="flex items-end justify-center gap-4 text-navy" aria-hidden="true">
          <SpaceNeedle className="h-8" />
          <SpaceNeedle className="h-12" />
          <SpaceNeedle className="h-8" />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <p className="font-mono text-sm uppercase tracking-widest text-[#555555]">
            {event.name} · {event.date} · {event.city}
          </p>
          <p className="mt-6 font-display text-2xl">Certificate of Achievement</p>
          <p className="mt-2 font-display text-7xl font-bold text-navy">
            {place}
          </p>

          <p className="mt-10 font-mono text-sm uppercase tracking-widest text-[#555555]">
            awarded to
          </p>
          {team ? (
            <>
              <p className="mt-3 font-display text-4xl font-bold">
                {team.teamName}
              </p>
              <p className="mt-2 font-mono text-base text-[#555555]">
                for {team.projectName}
              </p>
            </>
          ) : (
            // No winner in content/teams.ts yet — leave a line to write on.
            <div className="mt-12 w-96 border-b-2 border-ink/40" />
          )}
        </div>

        <div className="flex items-end justify-between gap-16 font-mono text-xs uppercase tracking-widest text-[#555555]">
          <div className="flex-1">
            <div className="border-b border-ink/40 pb-8" />
            <p className="mt-2">Organizer</p>
          </div>
          <div className="flex-1">
            <div className="border-b border-ink/40 pb-8" />
            <p className="mt-2">Date</p>
          </div>
        </div>
      </div>
    </div>
  );
}

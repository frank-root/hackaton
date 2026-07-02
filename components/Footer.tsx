import { event } from "@/content/event";

// The 88x31 badge wall — every self-respecting 2005 site had one.
const badges = [
  { top: "POWERED BY", bottom: "Next.js" },
  { top: "BEST VIEWED", bottom: "1024×768" },
  { top: "SEATTLE", bottom: "RAIN: YES ☔" },
  { top: "VALID", bottom: "HTML*" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-navy bg-panel px-4 py-4 print:hidden">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {badges.map((b) => (
          <div
            key={b.bottom}
            className="bevel-out flex h-[31px] w-[88px] flex-col items-center justify-center bg-silhouette leading-none"
          >
            <span className="text-[8px] font-bold tracking-wider text-gold">
              {b.top}
            </span>
            <span className="text-[9px] font-bold text-white">{b.bottom}</span>
          </div>
        ))}
      </div>

      <div className="retro-links mt-4 text-center text-xs">
        <p>
          © {event.name} · webmaster: Ryan ·{" "}
          <a href="https://github.com/ryanwill424-lang/hackaton">
            sign our guestbook (GitHub)
          </a>
        </p>
        <p
          className="mt-1 text-[10px] text-[#555555]"
          style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive" }}
        >
          this page is under construction... forever :-)
        </p>
      </div>
    </footer>
  );
}

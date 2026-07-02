import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import PageBand from "@/components/PageBand";
import SpaceNeedle from "@/components/SpaceNeedle";

export const metadata: Metadata = {
  title: "The Story",
};

// Headings written as "## 02:37 — The bug that almost won" get the
// time pulled out and set in Courier, like a forum post timestamp.
const TIME_HEADING = /^(\d{1,2}:\d{2})\s*[—–-]\s*(.*)$/;

function StoryHeading({ children }: { children?: React.ReactNode }) {
  const text = typeof children === "string" ? children : String(children ?? "");
  const match = text.match(TIME_HEADING);

  return (
    <h2 className="mt-6 flex items-center gap-2 border-b border-dotted border-navy/40 pb-1 font-display text-xl font-bold text-navy">
      <SpaceNeedle className="h-5 shrink-0" />
      {match ? (
        <>
          <span className="bevel-in bg-silhouette px-1.5 font-mono text-[13px] font-normal text-[#33ff33]">
            {match[1]}
          </span>
          {match[2]}
        </>
      ) : (
        text
      )}
    </h2>
  );
}

export default function StoryPage() {
  // Runs at build time (static export), so reading from disk is fine.
  const markdown = fs.readFileSync(
    path.join(process.cwd(), "content", "story.md"),
    "utf-8"
  );

  return (
    <>
      <PageBand
        eyebrow="The recap"
        title="The Story"
        intro="What actually happened, from doors-open to the last demo."
      />
      <article className="bevel-out mx-auto max-w-3xl bg-paper p-4">
        <ReactMarkdown
          components={{
            h1: () => null, // the PageBand already carries the title
            h2: ({ children }) => <StoryHeading>{children}</StoryHeading>,
            p: ({ children }) => (
              <p className="mt-3 text-sm leading-relaxed">{children}</p>
            ),
            em: ({ children }) => (
              <em className="text-[#555555]">{children}</em>
            ),
            ul: ({ children }) => (
              <ul className="mt-3 list-disc space-y-1 pl-6 text-sm">
                {children}
              </ul>
            ),
            img: ({ src, alt }) => (
              // Plain <img> here: markdown images have unknown dimensions,
              // and next/image requires width/height up front.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={typeof src === "string" ? src : undefined}
                alt={alt ?? ""}
                className="bevel-in my-4 w-full"
              />
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      </article>
    </>
  );
}

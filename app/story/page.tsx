import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import PageBand from "@/components/PageBand";

export const metadata: Metadata = {
  title: "The Story",
};

// Headings written as "## 02:37 — The bug that almost won" get the
// time pulled out and set in mono, like a log entry.
const TIME_HEADING = /^(\d{1,2}:\d{2})\s*[—–-]\s*(.*)$/;

function StoryHeading({ children }: { children?: React.ReactNode }) {
  const text = typeof children === "string" ? children : String(children ?? "");
  const match = text.match(TIME_HEADING);

  return (
    <h2 className="mt-12 font-display text-3xl font-bold">
      {match ? (
        <>
          <span className="mr-4 font-mono text-lg font-normal text-sodium">
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
      <article className="mx-auto max-w-3xl px-6 py-16">
        <ReactMarkdown
          components={{
            h1: () => null, // the PageBand already carries the title
            h2: ({ children }) => <StoryHeading>{children}</StoryHeading>,
            p: ({ children }) => (
              <p className="mt-5 text-lg leading-relaxed">{children}</p>
            ),
            em: ({ children }) => (
              <em className="text-ink/70">{children}</em>
            ),
            ul: ({ children }) => (
              <ul className="mt-5 list-disc space-y-2 pl-6 text-lg">
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
                className="my-8 w-full rounded-md border border-ink/10"
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

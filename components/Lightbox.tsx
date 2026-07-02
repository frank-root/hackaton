"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

// Interactivity (clicks, keyboard, state) needs the browser, so this
// one component is a Client Component — the rest of the site ships no JS.
export default function Lightbox({ photos }: { photos: string[] }) {
  const [current, setCurrent] = useState<number | null>(null);

  const step = useCallback(
    (dir: 1 | -1) =>
      setCurrent((c) =>
        c === null ? c : (c + dir + photos.length) % photos.length
      ),
    [photos.length]
  );

  useEffect(() => {
    if (current === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCurrent(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, step]);

  return (
    <>
      {/* Photo-album grid: white-mat frames like a 2005 photo hosting site */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setCurrent(i)}
            className="bevel-out bg-paper p-1.5 hover:bg-[#ffffcc] focus-visible:outline-2 focus-visible:outline-navy"
          >
            <Image
              src={src}
              alt={`Event photo ${i + 1}`}
              width={480}
              height={480}
              className="bevel-in aspect-square w-full object-cover"
            />
            <p className="pt-1 font-mono text-[10px] text-[#555555]">
              img_{String(i + 1).padStart(3, "0")}.jpg
            </p>
          </button>
        ))}
      </div>

      {current !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-silhouette/90 p-6"
          onClick={() => setCurrent(null)}
        >
          <div
            className="bevel-out bg-panel p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between rounded-md bg-navy px-2.5 py-1">
              <span className="font-display text-[13px] font-bold text-white">
                Image viewer — {current + 1} of {photos.length}
              </span>
              <button
                type="button"
                onClick={() => setCurrent(null)}
                className="bevel-out ml-4 bg-panel px-1.5 font-mono text-xs font-bold leading-tight text-ink"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <Image
              src={photos[current]}
              alt={`Event photo ${current + 1}`}
              width={1600}
              height={1200}
              className="mt-2 max-h-[75vh] w-auto"
            />
            <p className="pt-1 text-center font-mono text-xs text-[#555555]">
              use ← → arrow keys · esc closes
            </p>
          </div>
        </div>
      )}
    </>
  );
}

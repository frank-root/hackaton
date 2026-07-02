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
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setCurrent(i)}
            className="card overflow-hidden focus-visible:outline-2 focus-visible:outline-green"
          >
            <Image
              src={src}
              alt={`Event photo ${i + 1}`}
              width={480}
              height={480}
              className="aspect-square w-full object-cover transition-transform duration-200 hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {current !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/95 p-6"
          onClick={() => setCurrent(null)}
        >
          <Image
            src={photos[current]}
            alt={`Event photo ${current + 1}`}
            width={1600}
            height={1200}
            className="max-h-[85vh] w-auto rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={() => setCurrent(null)}
            className="absolute top-4 right-6 font-display text-xs font-bold uppercase tracking-wider text-wolf hover:text-white"
          >
            Close [esc]
          </button>
          <p className="absolute bottom-4 font-display text-xs font-bold uppercase tracking-wider text-wolf">
            {current + 1} / {photos.length} · ← →
          </p>
        </div>
      )}
    </>
  );
}

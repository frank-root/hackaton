import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import PageBand from "@/components/PageBand";
import Lightbox from "@/components/Lightbox";

export const metadata: Metadata = {
  title: "Gallery",
};

const PHOTO_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".svg"]);

export default function GalleryPage() {
  // Build-time directory scan: drop photos in /public/photos and rebuild —
  // no manifest file to maintain.
  const dir = path.join(process.cwd(), "public", "photos");
  const photos = fs
    .readdirSync(dir)
    .filter((f) => PHOTO_EXTS.has(path.extname(f).toLowerCase()))
    .sort()
    .map((f) => `/photos/${f}`);

  return (
    <>
      <PageBand
        eyebrow="The evidence"
        title="Gallery"
        intro={`${photos.length} photos from the night.`}
      />
      <section className="mx-auto max-w-6xl px-6 py-16">
        {photos.length > 0 ? (
          <Lightbox photos={photos} />
        ) : (
          <p className="font-mono text-sm text-ink/60">
            No photos yet — drop image files into public/photos and rebuild.
          </p>
        )}
      </section>
    </>
  );
}

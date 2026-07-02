import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build to plain HTML/CSS/JS in `out/` — no Node server needed to host.
  output: "export",
  // The default next/image optimizer needs a server; serve images as-is instead.
  images: { unoptimized: true },
};

export default nextConfig;

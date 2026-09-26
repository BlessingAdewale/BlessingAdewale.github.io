import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only, so prerender the whole site to ./out
  output: "export",
  // The Next.js image optimizer needs a server at runtime, which Pages has no
  images: { unoptimized: true },
};

export default nextConfig;

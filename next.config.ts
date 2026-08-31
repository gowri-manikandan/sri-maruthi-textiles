import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Pin the workspace root — a stray package-lock.json in the user's home
     directory otherwise makes Turbopack infer C:\Users\bhara as the root. */
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

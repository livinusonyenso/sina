/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ replaces next export
  trailingSlash: true, // ✅ recommended for static hosting
  images: {
    unoptimized: true, // ✅ required when exporting static HTML without Image Optimization
  },
};

export default nextConfig;

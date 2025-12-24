import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Enable static export
  output: 'export',

  // 2. Disable image optimization (GitHub Pages is a static host)
  // If you want to use next/image, you must set unoptimized: true
  // or use a custom loader.
  images: {
    unoptimized: true,
  },

  // 3. Optional: Add a trailing slash for better SEO and compatibility with static hosting
  // trailingSlash: true,
};

export default nextConfig;
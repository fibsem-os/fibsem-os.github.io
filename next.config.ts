// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // Required for static export[citation:2][citation:5]
  basePath: '/website', // Your repository name on GitHub[citation:2]
  images: {
    unoptimized: true, // Required for static export with Image component[citation:8]
  },
}

export default nextConfig
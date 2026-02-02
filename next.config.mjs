import nextra from 'nextra'

const withNextra = nextra({})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },

  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './src/mdx-components.tsx'
    }
  }
}

export default withNextra(nextConfig)


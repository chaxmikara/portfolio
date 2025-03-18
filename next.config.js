/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-website/' : '',
}

module.exports = nextConfig

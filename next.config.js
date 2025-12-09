/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configuration pour GitHub Pages
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/DM_Invest_SA' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/DM_Invest_SA' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig


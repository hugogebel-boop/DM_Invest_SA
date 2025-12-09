/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configuration pour GitHub Pages
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Si votre repo GitHub n'est pas à la racine du domaine, décommentez et définissez le nom du repo
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

module.exports = nextConfig


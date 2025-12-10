import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  // Configuration pour GitHub Pages
  const isProduction = process.env.NODE_ENV === 'production'
  const basePath = isProduction ? '/DM_Invest_SA' : ''
  
  return {
    name: 'DM Invest SA - Gestion de Fortune',
    short_name: 'DM Invest',
    description: 'DM Invest SA est une société suisse indépendante spécialisée dans la gestion de fortune depuis 1999. Basée à Lausanne.',
    start_url: `${basePath}/`,
    display: 'standalone',
    background_color: '#fcfbfe',
    theme_color: '#1d395e',
    icons: [
      {
        src: `${basePath}/assets/Logo/Logo DM Invest White.png`,
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}


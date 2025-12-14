import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  // Configuration pour GitHub Pages
  // Le basePath est défini dans next.config.js et devrait être appliqué automatiquement
  // Mais pour GitHub Pages, on force explicitement le basePath
  // En développement, NODE_ENV n'est pas 'production', donc basePath sera vide
  // En production sur GitHub Pages, basePath sera '/DM_Invest_SA'
  const isProduction = process.env.NODE_ENV === 'production'
  const basePath = isProduction ? '/DM_Invest_SA' : ''
  
  return {
    name: 'DM Invest SA - Gestion de Fortune',
    short_name: 'DM Invest',
    description: 'DM Invest SA est une société suisse indépendante spécialisée dans la gestion de fortune depuis 1999. Basée à Lausanne.',
    start_url: basePath ? `${basePath}/` : '/',
    display: 'standalone',
    background_color: '#fcfbfe',
    theme_color: '#1d395e',
    icons: [
      {
        src: basePath 
          ? `${basePath}/assets/Logo/favicon_io DM Invest/android-chrome-192x192.png`
          : '/assets/Logo/favicon_io DM Invest/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: basePath
          ? `${basePath}/assets/Logo/favicon_io DM Invest/android-chrome-512x512.png`
          : '/assets/Logo/favicon_io DM Invest/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}


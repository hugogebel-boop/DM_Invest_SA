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
        // Le chemin doit inclure le basePath pour GitHub Pages
        // Next.js devrait l'appliquer automatiquement, mais on le met explicitement pour être sûr
        src: basePath ? `${basePath}/assets/Logo/Logo DM Invest White.png` : '/assets/Logo/Logo DM Invest White.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}


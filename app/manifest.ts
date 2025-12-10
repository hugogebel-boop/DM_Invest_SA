import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DM Invest SA - Gestion de Fortune',
    short_name: 'DM Invest',
    description: 'DM Invest SA est une société suisse indépendante spécialisée dans la gestion de fortune depuis 1999. Basée à Lausanne.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fcfbfe',
    theme_color: '#1d395e',
    icons: [
      {
        src: '/assets/Logo/Logo DM Invest White.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}


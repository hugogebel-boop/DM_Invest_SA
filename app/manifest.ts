import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DM Invest SA - Gestion de Fortune',
    short_name: 'DM Invest',
    description: 'DM Invest SA est une société suisse indépendante spécialisée dans la gestion de fortune depuis 1999. Basée à Lausanne.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#8B2635',
    icons: [
      {
        src: '/assets/Logo/Logo DM Invest.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}


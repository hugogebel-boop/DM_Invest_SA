import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://dminvest.ch'),
  title: {
    default: 'DM Invest SA | Gestion de Fortune | Lausanne, Suisse',
    template: '%s | DM Invest SA'
  },
  description: 'DM Invest SA est une société suisse indépendante spécialisée dans la gestion de fortune depuis 1999. Basée à Lausanne, nous offrons des services de gestion de patrimoine personnalisés, transparents et éthiques. Licence FINMA.',
  keywords: [
    'gestion de fortune',
    'gestion de patrimoine',
    'gestionnaire de fortune',
    'Lausanne',
    'Suisse',
    'DM Invest',
    'investissement',
    'conseil financier',
    'gestion d\'actifs',
    'FINMA',
    'ASG',
    'AOOS',
    'mandat de gestion',
    'gestion de fortune suisse'
  ],
  authors: [{ name: 'DM Invest SA' }],
  creator: 'DM Invest SA',
  publisher: 'DM Invest SA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CH',
    url: 'https://dminvest.ch',
    siteName: 'DM Invest SA',
    title: 'DM Invest SA | Gestion de Fortune | Lausanne, Suisse',
    description: 'DM Invest SA est une société suisse indépendante spécialisée dans la gestion de fortune depuis 1999. Basée à Lausanne, nous offrons des services de gestion de patrimoine personnalisés, transparents et éthiques.',
    images: [
      {
        url: '/assets/Logo/Logo DM Invest.png',
        width: 1200,
        height: 630,
        alt: 'DM Invest SA - Gestion de Fortune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DM Invest SA | Gestion de Fortune | Lausanne, Suisse',
    description: 'DM Invest SA est une société suisse indépendante spécialisée dans la gestion de fortune depuis 1999.',
    images: ['/assets/Logo/Logo DM Invest.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://dminvest.ch',
  },
  category: 'Finance',
  classification: 'Gestion de fortune',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth" style={{ margin: 0, padding: 0 }}>
      <body className="bg-transparent" style={{ margin: 0, padding: 0 }}>
        <main className="bg-transparent" style={{ margin: 0, padding: 0 }}>{children}</main>
      </body>
    </html>
  )
}


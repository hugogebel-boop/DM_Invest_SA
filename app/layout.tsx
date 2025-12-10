import type { Metadata } from 'next'
import './globals.css'
import ThemeColor from './ThemeColor'
import PreloadImages from '@/components/PreloadImages'

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
        url: 'https://dminvest.ch/assets/Logo/Logo DM Invest.png',
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
    images: ['https://dminvest.ch/assets/Logo/Logo DM Invest.png'],
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover',
  },
  themeColor: '#1d395e',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Calcul des chemins d'images pour le préchargement (côté serveur)
  const isProduction = process.env.NODE_ENV === 'production'
  const basePath = isProduction ? '/DM_Invest_SA' : ''
  const mobileImage = `${basePath}/assets/Tableau/Mountains-by-StephanHerrgott-2017 - Mobile.jpg`
  const desktopImage = `${basePath}/assets/Tableau/Mountains-by-StephanHerrgott-2017.jpg`
  const logoImage = `${basePath}/assets/Logo/Logo DM Invest.png`
  const portraitYves = `${basePath}/assets/Portrait/Yves.png`
  const portraitMike = `${basePath}/assets/Portrait/Mike.png`
  const portraitPierre = `${basePath}/assets/Portrait/Pierre.png`
  const portraitSandrine = `${basePath}/assets/Portrait/Sandrine.png`

  return (
    <html lang="fr" className="scroll-smooth" style={{ margin: 0, padding: 0 }}>
      <head>
        {/* Préchargement des images critiques - script inline pour un chargement immédiat */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const basePath = '${basePath}';
                const mobileImg = basePath + '/assets/Tableau/Mountains-by-StephanHerrgott-2017 - Mobile.jpg';
                const desktopImg = basePath + '/assets/Tableau/Mountains-by-StephanHerrgott-2017.jpg';
                const logoImg = basePath + '/assets/Logo/Logo DM Invest.png';
                const portraitYves = basePath + '/assets/Portrait/Yves.png';
                const portraitMike = basePath + '/assets/Portrait/Mike.png';
                const portraitPierre = basePath + '/assets/Portrait/Pierre.png';
                const portraitSandrine = basePath + '/assets/Portrait/Sandrine.png';
                
                function addPreload(href, media, priority) {
                  if (!document.querySelector('link[href="' + href + '"]')) {
                    const link = document.createElement('link');
                    link.rel = 'preload';
                    link.as = 'image';
                    link.href = href;
                    link.setAttribute('fetchpriority', priority || 'high');
                    if (media) link.media = media;
                    document.head.appendChild(link);
                  }
                }
                
                // Images critiques (above the fold) - priorité haute
                addPreload(mobileImg, '(max-width: 640px)', 'high');
                addPreload(desktopImg, '(min-width: 641px)', 'high');
                addPreload(logoImg, null, 'high');
                
                // Portraits de l'équipe - priorité moyenne pour préchargement anticipé
                addPreload(portraitYves, null, 'auto');
                addPreload(portraitMike, null, 'auto');
                addPreload(portraitPierre, null, 'auto');
                addPreload(portraitSandrine, null, 'auto');
              })();
            `,
          }}
        />
      </head>
      <body className="bg-transparent" style={{ margin: 0, padding: 0 }}>
        <PreloadImages />
        <ThemeColor />
        <main className="bg-transparent" style={{ margin: 0, padding: 0 }}>{children}</main>
      </body>
    </html>
  )
}


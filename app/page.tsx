import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Introduction from '@/components/sections/Introduction'
import Prestations from '@/components/sections/Prestations'
import APropos from '@/components/sections/APropos'
import Equipe from '@/components/sections/Equipe'
import BanquesDepositaires from '@/components/sections/BanquesDepositaires'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'DM Invest SA',
  description: 'DM Invest SA est une société suisse indépendante spécialisée dans la gestion de fortune depuis 1999. Basée à Lausanne, nous offrons des services de gestion de patrimoine personnalisés, transparents et éthiques. Licence FINMA.',
  openGraph: {
    title: 'DM Invest SA | Gestion de Fortune | Lausanne, Suisse',
    description: 'DM Invest SA est une société suisse indépendante spécialisée dans la gestion de fortune depuis 1999. Basée à Lausanne, nous offrons des services de gestion de patrimoine personnalisés, transparents et éthiques.',
    url: 'https://dminvest.ch',
    type: 'website',
  },
  alternates: {
    canonical: 'https://dminvest.ch',
  },
}

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['FinancialService', 'LocalBusiness'],
    name: 'DM Invest SA',
    description: 'Société suisse indépendante spécialisée dans la gestion de fortune depuis 1999',
    url: 'https://dminvest.ch',
    logo: 'https://dminvest.ch/assets/Logo/Logo DM Invest White.png',
    image: 'https://dminvest.ch/assets/Logo/Logo DM Invest White.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rue du Grand-Chêne 6',
      addressLocality: 'Lausanne',
      postalCode: '1003',
      addressCountry: 'CH',
    },
    telephone: '+41216480015',
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Switzerland',
    },
    serviceType: 'Gestion de fortune',
    foundingDate: '1999',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '1',
    },
    sameAs: [
      'https://www.vsv-asg.ch/fr/home',
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '46.5197',
      longitude: '6.6323',
    },
  }

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DM Invest SA',
    url: 'https://dminvest.ch',
    logo: 'https://dminvest.ch/assets/Logo/Logo DM Invest White.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+41-21-648-00-15',
      contactType: 'Customer Service',
      areaServed: 'CH',
      availableLanguage: ['fr', 'en'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rue du Grand-Chêne 6',
      addressLocality: 'Lausanne',
      postalCode: '1003',
      addressCountry: 'CH',
    },
    foundingDate: '1999',
    memberOf: [
      {
        '@type': 'Organization',
        name: 'Association Suisse des Gestionnaires de fortune (ASG)',
        url: 'https://www.vsv-asg.ch/fr/home',
      },
      {
        '@type': 'Organization',
        name: 'AOOS',
        url: 'https://www.aoos.ch/?lang=fr',
      },
      {
        '@type': 'Organization',
        name: 'OFS Ombud Finance Suisse',
        url: 'https://ombudfinance.ch/accueil/',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <Hero />
      <div className="bg-ivory relative z-[20]">
        <Introduction />
        <Prestations />
        <APropos />
        <Equipe />
        <BanquesDepositaires />
        <Contact />
      </div>
    </>
  )
}


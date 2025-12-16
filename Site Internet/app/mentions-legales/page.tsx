import type { Metadata } from 'next'
import Image from 'next/image'
import { getAssetPath, basePath } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales du site dminvest.ch - Propriétaire, hébergement et informations légales de DM Invest SA, société de gestion de fortune basée à Lausanne, Suisse.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Mentions Légales | DM Invest SA',
    description: 'Mentions légales du site dminvest.ch - Propriétaire, hébergement et informations légales de DM Invest SA.',
    url: 'https://dminvest.ch/mentions-legales',
    type: 'website',
  },
  alternates: {
    canonical: 'https://dminvest.ch/mentions-legales',
  },
}

export default function MentionsLegales() {
  return (
    <section className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-40 bg-ivory">
      <div className="max-w-[1000px] mx-auto">
        {/* Logo en haut - cliquable pour retour à l'accueil */}
        <div className="mb-12 sm:mb-16 md:mb-20 flex justify-center">
          <a 
            href={`${basePath}/`}
            className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] aspect-[400/150] h-12 sm:h-16 md:h-20 block"
            aria-label="Retour à l'accueil - DM Invest SA"
          >
            <Image
              src={getAssetPath("/assets/webp/Logo DM Invest Black.webp")}
              alt="DM Invest SA - Logo"
              width={400}
              height={150}
              className="w-full h-full object-contain"
              priority
            />
          </a>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-dm-red mb-5 sm:mb-7 font-normal tracking-tight">
          Mentions légales
        </h1>
        <div className="pl-4 sm:pl-6 md:pl-8 pr-4 sm:pr-6 md:pr-8 space-y-5 sm:space-y-6 text-sm sm:text-base md:text-base lg:text-base text-anthracite leading-relaxed">
          {/* Propriétaire et Hébergement en deux colonnes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-serif text-tableau-blue mb-2.5 sm:mb-3 font-normal">
                Propriétaire du site &quot;dminvest.ch&quot;
              </h2>
              <div className="space-y-1">
                <p>Yves Diserens</p>
                <p>DM Invest SA</p>
                <p>Rue du Grand-Chêne 6</p>
                <p>1003 Lausanne</p>
                <p>Suisse</p>
              </div>
              <p className="mt-4">
                <a href="tel:+41216480015" className="text-dm-red hover:opacity-80 transition-colors">
                  +41 (0)21 648 00 15
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-serif text-tableau-blue mb-2.5 sm:mb-3 font-normal">
                Hébergement
              </h2>
              <div className="space-y-1">
                <p>Infomaniak Network SA</p>
                <p>Avenue de la Praille 26</p>
                <p>1227 Genève</p>
                <p>Suisse</p>
              </div>
              <p className="mt-4">
                <a href="tel:+41228203544" className="text-dm-red hover:opacity-80 transition-colors">
                  +41 22 820 35 44
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-serif text-tableau-blue mb-2.5 sm:mb-3 font-normal">
              Webdesign, limites de responsabilités
            </h2>
            <div className="space-y-3 text-justify">
              <p>
                Tania Secalin-Creative Boxes (ci-après &quot;TS-CB&quot;) a créé ce site internet dminvest.ch après commande du propriétaire mentionné ci-dessus.
              </p>
              <p>
                TS-CB n&apos;est en aucun cas responsable, et décline toute responsabilité en cas de dommages de toute nature découlant de l&apos;utilisation ou références à toute information contenue sur ce site. Bien que ces informations soient mises à jour périodiquement, aucune garantie n&apos;est donnée que celles-ci soient correctes, exhaustives et à jour.
              </p>
              <p>
                Les renseignements sur les produits et services proposés sur dminvest.ch ne constitue pas une approbation de la part de TS-CB. Le site dminvest.ch peut inclure des liens accédant directement à d&apos;autres ressources sur Internet. TS-CB n&apos;est pas responsable de l&apos;exactitude ou du contenu des informations contenues sur ces sites. De même que les liens indiqués sur dminvest.ch et menant à des sites tiers ne constitue pas une approbation par TS-CB de leurs produits et services.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-serif text-tableau-blue mb-2.5 sm:mb-3 font-normal">
              MEDIA
            </h2>
            <p className="text-justify">
              Les photographies sur le site dminvest.ch sont toutes propriété de dminvest.ch et sont DR. Les images illustrant le fond d&apos;écran sont le tableau de Stephan Herrgott no A010317 de la série &apos;Entre air et sur Terre&apos;, propriété de dminvest.ch.
            </p>
          </div>

          <div className="text-justify">
            <p>
              CMS WordPress , theme Page Builder Framework.
            </p>
            <p>
              Webdesigner contact : Tania Secalin – Creative Boxes
            </p>
          </div>

          <div className="pt-6 sm:pt-8 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
            <a href={`${basePath}/`} className="text-dm-red underline hover:opacity-80 transition-opacity">
              Retour à l&apos;accueil
            </a>
          </div>
        </div>
      </div>

      {/* Footer intégré - même que page d'accueil */}
      <div className="bg-tableau-blue text-ivory">
        {/* Section Contact */}
        <div className="py-10 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-[1000px] mx-auto">
            <h2 className="text-[40px] sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-ivory mb-10 sm:mb-12 md:mb-14 text-left font-normal tracking-tight">
              Contact
            </h2>
            <div className="pl-4 sm:pl-6 md:pl-8 pr-4 sm:pr-6 md:pr-8 text-left space-y-2.5 sm:space-y-3 text-base sm:text-lg md:text-lg lg:text-xl text-ivory leading-relaxed">
              <div>
                <p className="font-serif mb-2 sm:mb-3 text-lg sm:text-xl md:text-xl lg:text-2xl">
                  <span className="text-dm-red">DM</span>{' '}
                  <span className="text-ivory">Invest SA</span>
                </p>
                <p>Rue du Grand-Chêne 6</p>
                <p>1003 Lausanne</p>
                <p>Switzerland</p>
              </div>
              <div>
                <p>
                  <a href="tel:+41216480015" className="text-ivory hover:text-dm-red transition-colors duration-200 underline text-base sm:text-lg md:text-lg lg:text-xl">
                    +41 (0)21 648 00 15
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer intégré */}
        <div className="py-5 sm:py-6 md:py-8">
          <div className="max-w-[1000px] mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-xs sm:text-sm md:text-sm font-sans text-ivory">
              <div className="text-center sm:text-left text-ivory">
                Art by{' '}
                <a
                  href="https://www.stephan-herrgott.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory hover:text-dm-red transition-colors duration-200"
                >
                  Stephan Herrgott
                </a>{' '}
                |{' '}
                <a href={`${basePath}/mentions-legales`} className="text-ivory hover:text-dm-red transition-colors duration-200">
                  Mentions Légales
                </a>
              </div>
              <div className="text-center sm:text-right">
                © 1999-2025 - DM Invest SA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


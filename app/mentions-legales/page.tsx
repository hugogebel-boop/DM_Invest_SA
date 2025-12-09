import type { Metadata } from 'next'
import Link from 'next/link'

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
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-dm-red mb-6 sm:mb-8 font-normal tracking-tight">
          Mentions légales
        </h1>
        <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-lg lg:text-xl text-anthracite leading-relaxed">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-serif text-dm-red mb-3 sm:mb-4 font-normal">
              Propriétaire du site &quot;dminvest.ch&quot;
            </h2>
            <div className="space-y-2">
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
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-serif text-dm-red mb-3 sm:mb-4 font-normal">
              Hébergement
            </h2>
            <div className="space-y-2">
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

          <div>
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-serif text-dm-red mb-3 sm:mb-4 font-normal">
              Webdesign, limites de responsabilités
            </h2>
            <div className="space-y-4">
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
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-serif text-dm-red mb-3 sm:mb-4 font-normal">
              MEDIA
            </h2>
            <p>
              Les photographies sur le site dminvest.ch sont toutes propriété de dminvest.ch et sont DR. Les images illustrant le fond d&apos;écran sont le tableau de Stephan Herrgott no A010317 de la série &apos;Entre air et sur Terre&apos;, propriété de dminvest.ch.
            </p>
          </div>

          <div>
            <p>
              CMS WordPress , theme Page Builder Framework.
            </p>
            <p>
              Webdesigner contact : Tania Secalin – Creative Boxes
            </p>
          </div>

          <div className="pt-6 sm:pt-8">
            <Link href="/" className="text-dm-red underline hover:opacity-80 transition-opacity">
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


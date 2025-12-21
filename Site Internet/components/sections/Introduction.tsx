import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function Introduction() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-24 xl:py-28 bg-ivory">
      <div className="max-w-[1000px] mx-auto">
        <AnimateOnScroll>
          <div className="pl-4 sm:pl-6 md:pl-8 pr-4 sm:pr-6 md:pr-8 space-y-4 sm:space-y-5 text-base sm:text-lg md:text-lg lg:text-xl text-anthracite leading-relaxed text-justify">
            <p>
              <span className="font-bold">DM Invest</span> est une société suisse indépendante spécialisée dans la <span className="font-bold">gestion de fortune</span> dont le siège est à Lausanne.
            </p>
            <p>
              Elle propose, depuis sa <span className="font-bold">création en 1999</span>, une stratégie d&apos;investissement individualisée, découlant de la situation globale de chaque client et basée sur notre analyse macroéconomique. La sélection de titres découle de cette analyse et est en phase avec les cycles économiques.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}


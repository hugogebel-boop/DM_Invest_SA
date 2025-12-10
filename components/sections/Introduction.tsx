import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function Introduction() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-ivory">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <AnimateOnScroll>
          <div className="space-y-5 sm:space-y-6 text-base sm:text-lg md:text-lg lg:text-xl text-anthracite leading-relaxed text-justify">
            <p>
              <span className="font-bold">DM Invest</span> est une société suisse indépendante spécialisée dans la <span className="font-bold">gestion de fortune</span> dont le siège est à Lausanne.
            </p>
            <p>
              Elle propose, depuis sa <span className="font-bold">création en 1999</span>, une stratégie d&apos;investissement pragmatique et basée sur une analyse macroéconomique. La sélection de titres découle de cette analyse et est en phase avec les cycles économiques.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}


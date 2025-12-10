import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function Prestations() {
  return (
    <section id="prestations" className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-ivory">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <AnimateOnScroll>
          <h2 className="text-[40px] sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-dm-red mb-10 sm:mb-12 md:mb-16 lg:mb-20 text-left font-normal tracking-tight">
            Prestations
          </h2>
        </AnimateOnScroll>

        <div className="pl-4 sm:pl-6 md:pl-8 pr-4 sm:pr-6 md:pr-8 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
          {/* Mandat de gestion */}
          <AnimateOnScroll delay={0.1}>
            <div>
              <h3 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-serif text-tableau-blue mb-5 sm:mb-6 md:mb-8 lg:mb-10 font-normal tracking-wide">
                Mandat de gestion
              </h3>
              <ul className="space-y-1 sm:space-y-2 md:space-y-1 lg:space-y-1 text-base sm:text-lg md:text-base lg:text-base text-anthracite leading-relaxed md:leading-normal">
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 flex-shrink-0 font-serif leading-none text-lg sm:text-xl md:text-lg lg:text-lg">•</span>
                  <span>Définition de la stratégie d&apos;investissement et du profil de risque personnalisé</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 flex-shrink-0 font-serif leading-none text-lg sm:text-xl md:text-lg lg:text-lg">•</span>
                  <span>Gestion active et respectueuse des normes ESG</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 flex-shrink-0 font-serif leading-none text-lg sm:text-xl md:text-lg lg:text-lg">•</span>
                  <span>Pricing adapté</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 flex-shrink-0 font-serif leading-none text-lg sm:text-xl md:text-lg lg:text-lg">•</span>
                  <span>Consolidation globale des avoirs bancaires</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 flex-shrink-0 font-serif leading-none text-lg sm:text-xl md:text-lg lg:text-lg">•</span>
                  <span>Analyse et gestion du risque</span>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Nos atouts */}
          <AnimateOnScroll delay={0.2}>
            <div>
              <h3 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-serif text-tableau-blue mb-5 sm:mb-6 md:mb-8 lg:mb-10 font-normal tracking-wide">
                Nos atouts
              </h3>
              <ul className="space-y-1 sm:space-y-2 md:space-y-1 lg:space-y-1 text-base sm:text-lg md:text-base lg:text-base text-anthracite leading-relaxed md:leading-normal">
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 flex-shrink-0 font-serif leading-none text-lg sm:text-xl md:text-lg lg:text-lg">•</span>
                  <span>Suivi personnalisé</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 flex-shrink-0 font-serif leading-none text-lg sm:text-xl md:text-lg lg:text-lg">•</span>
                  <span>Stabilité et continuité de l&apos;équipe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 flex-shrink-0 font-serif leading-none text-lg sm:text-xl md:text-lg lg:text-lg">•</span>
                  <span>Performance optimale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 flex-shrink-0 font-serif leading-none text-lg sm:text-xl md:text-lg lg:text-lg">•</span>
                  <span>Autonomie et indépendance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 flex-shrink-0 font-serif leading-none text-lg sm:text-xl md:text-lg lg:text-lg">•</span>
                  <span>Absence de conflit d&apos;intérêt</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 flex-shrink-0 font-serif leading-none text-lg sm:text-xl md:text-lg lg:text-lg">•</span>
                  <span>Discrétion et protection de la sphère privée</span>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}


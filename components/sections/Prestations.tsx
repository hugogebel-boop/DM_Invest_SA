import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function Prestations() {
  return (
    <section id="prestations" className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-ivory">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <AnimateOnScroll>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-dm-red mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-left font-normal tracking-tight">
            Prestations
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
          {/* Mandat de gestion */}
          <AnimateOnScroll delay={0.1}>
            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-tableau-blue mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-normal tracking-wide uppercase">
                MANDAT DE GESTION
              </h3>
              <ul className="space-y-4 sm:space-y-5 text-base sm:text-lg md:text-lg lg:text-xl text-anthracite leading-relaxed">
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 mt-1.5 flex-shrink-0 font-serif leading-none text-lg sm:text-xl">•</span>
                  <span>Définition de la stratégie d&apos;investissement et du profil de risque personnalisé</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 mt-1.5 flex-shrink-0 font-serif leading-none text-lg sm:text-xl">•</span>
                  <span>Gestion active et respectueuse des normes ESG</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 mt-1.5 flex-shrink-0 font-serif leading-none text-lg sm:text-xl">•</span>
                  <span>Pricing adapté</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 mt-1.5 flex-shrink-0 font-serif leading-none text-lg sm:text-xl">•</span>
                  <span>Consolidation globale des avoirs bancaires</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 mt-1.5 flex-shrink-0 font-serif leading-none text-lg sm:text-xl">•</span>
                  <span>Analyse et gestion du risque</span>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Nos atouts */}
          <AnimateOnScroll delay={0.2}>
            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-tableau-blue mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-normal tracking-wide uppercase">
                NOS ATOUTS
              </h3>
              <ul className="space-y-4 sm:space-y-5 text-base sm:text-lg md:text-lg lg:text-xl text-anthracite leading-relaxed">
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 mt-1.5 flex-shrink-0 font-serif leading-none text-lg sm:text-xl">•</span>
                  <span>Suivi personnalisé</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 mt-1.5 flex-shrink-0 font-serif leading-none text-lg sm:text-xl">•</span>
                  <span>Stabilité et continuité de l&apos;équipe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 mt-1.5 flex-shrink-0 font-serif leading-none text-lg sm:text-xl">•</span>
                  <span>Performance optimale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 mt-1.5 flex-shrink-0 font-serif leading-none text-lg sm:text-xl">•</span>
                  <span>Autonomie et indépendance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 mt-1.5 flex-shrink-0 font-serif leading-none text-lg sm:text-xl">•</span>
                  <span>Absence de conflit d&apos;intérêt</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tableau-blue mr-3 mt-1.5 flex-shrink-0 font-serif leading-none text-lg sm:text-xl">•</span>
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


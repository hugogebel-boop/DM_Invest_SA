import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { getAssetPath } from '@/lib/config'

export default function Equipe() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <AnimateOnScroll>
          <h2 className="text-[40px] sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-dm-red mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-left font-normal tracking-tight">
            Notre équipe
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-stretch">
          {/* Yves Diserens */}
          <AnimateOnScroll delay={0.1}>
            <div className="bg-dm-red/[0.03] p-6 sm:p-8 md:p-10 h-full flex flex-col min-h-[400px] sm:min-h-0">
            <div className="mb-4 sm:mb-6">
              <Image
                src={getAssetPath("/assets/Portrait/Yves.png")}
                alt="Yves Diserens - Actionnaire et administrateur de DM Invest SA, Gestionnaire de fortune"
                width={180}
                height={220}
                className="w-full max-w-[160px] sm:max-w-[160px] md:max-w-[180px] h-auto mx-auto object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl sm:text-lg md:text-xl lg:text-2xl font-serif text-dm-red mb-2 sm:mb-3 font-normal">
                Yves Diserens
              </h3>
              <div className="space-y-1 text-base sm:text-base md:text-base lg:text-lg text-anthracite leading-relaxed">
                <p>Actionnaire et administrateur</p>
                <p>de DM Invest SA</p>
                <p className="pt-2">Gestionnaire de fortune</p>
              </div>
            </div>
            </div>
          </AnimateOnScroll>

          {/* Michael Giller */}
          <AnimateOnScroll delay={0.2}>
            <div className="bg-dm-red/[0.03] p-6 sm:p-8 md:p-10 h-full flex flex-col min-h-[400px] sm:min-h-0">
            <div className="mb-4 sm:mb-6">
              <Image
                src={getAssetPath("/assets/Portrait/Mike.png")}
                alt="Michael Giller - Administrateur et gestionnaire de fortune chez DM Invest SA"
                width={180}
                height={220}
                className="w-full max-w-[160px] sm:max-w-[160px] md:max-w-[180px] h-auto mx-auto object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl sm:text-lg md:text-xl lg:text-2xl font-serif text-dm-red mb-2 sm:mb-3 font-normal">
                Michael Giller
              </h3>
              <div className="text-base sm:text-base md:text-base lg:text-lg text-anthracite leading-relaxed">
                <p>Administrateur et gestionnaire de fortune</p>
              </div>
            </div>
            </div>
          </AnimateOnScroll>

          {/* Pierre Unternährer */}
          <AnimateOnScroll delay={0.3}>
            <div className="bg-dm-red/[0.03] p-6 sm:p-8 md:p-10 h-full flex flex-col min-h-[400px] sm:min-h-0">
            <div className="mb-4 sm:mb-6">
              <Image
                src={getAssetPath("/assets/Portrait/Pierre.png")}
                alt="Pierre Unternährer - Administrateur et gestionnaire de fortune chez Saphir Invest SA"
                width={180}
                height={220}
                className="w-full max-w-[160px] sm:max-w-[160px] md:max-w-[180px] h-auto mx-auto object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl sm:text-lg md:text-xl lg:text-2xl font-serif text-dm-red mb-2 sm:mb-3 font-normal">
                Pierre Unternährer
              </h3>
              <div className="text-base sm:text-base md:text-base lg:text-lg text-anthracite leading-relaxed">
                <p>Administrateur et gestionnaire de fortune chez <a href="https://saphir-invest.ch" target="_blank" rel="noopener noreferrer" className="text-dm-red hover:opacity-80 transition-opacity">Saphir Invest SA</a></p>
              </div>
            </div>
            </div>
          </AnimateOnScroll>

          {/* Sandrine Lavanchy */}
          <AnimateOnScroll delay={0.4}>
            <div className="bg-dm-red/[0.03] p-6 sm:p-8 md:p-10 h-full flex flex-col min-h-[400px] sm:min-h-0">
            <div className="mb-4 sm:mb-6">
              <Image
                src={getAssetPath("/assets/Portrait/Sandrine.png")}
                alt="Sandrine Lavanchy - Assistante de gestion chez DM Invest SA"
                width={180}
                height={220}
                className="w-full max-w-[160px] sm:max-w-[160px] md:max-w-[180px] h-auto mx-auto object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl sm:text-lg md:text-xl lg:text-2xl font-serif text-dm-red mb-2 sm:mb-3 font-normal">
                Sandrine Lavanchy
              </h3>
              <div className="text-base sm:text-base md:text-base lg:text-lg text-anthracite leading-relaxed">
                <p>Assistante de gestion</p>
              </div>
            </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}


import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function Equipe() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-ivory">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <AnimateOnScroll>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-dm-red mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-left font-normal tracking-tight">
            Équipe
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Yves Diserens */}
          <AnimateOnScroll delay={0.1}>
            <div className="bg-dm-red/[0.03] border border-dm-red p-6 sm:p-8 md:p-10 h-full flex flex-col">
            <div className="mb-4 sm:mb-6">
              <Image
                src="/assets/Portrait/Yves.png"
                alt="Yves Diserens"
                width={180}
                height={220}
                className="w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] h-auto mx-auto object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-dm-red mb-2 sm:mb-3 font-normal">
                Yves Diserens
              </h3>
              <div className="space-y-1 text-sm sm:text-base md:text-base lg:text-lg text-anthracite leading-relaxed">
                <p>Actionnaire et administrateur</p>
                <p>de DM Invest SA</p>
                <p className="pt-2">Gestionnaire de fortune</p>
              </div>
            </div>
            </div>
          </AnimateOnScroll>

          {/* Michael Giller */}
          <AnimateOnScroll delay={0.2}>
            <div className="bg-dm-red/[0.03] border border-dm-red p-6 sm:p-8 md:p-10 h-full flex flex-col">
            <div className="mb-4 sm:mb-6">
              <Image
                src="/assets/Portrait/Mike.png"
                alt="Michael Giller"
                width={180}
                height={220}
                className="w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] h-auto mx-auto object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-dm-red mb-2 sm:mb-3 font-normal">
                Michael Giller
              </h3>
              <div className="text-sm sm:text-base md:text-base lg:text-lg text-anthracite leading-relaxed">
                <p>Administrateur et gestionnaire de fortune</p>
              </div>
            </div>
            </div>
          </AnimateOnScroll>

          {/* Pierre Unternährer */}
          <AnimateOnScroll delay={0.3}>
            <div className="bg-dm-red/[0.03] border border-dm-red p-6 sm:p-8 md:p-10 h-full flex flex-col">
            <div className="mb-4 sm:mb-6">
              <Image
                src="/assets/Portrait/Pierre.png"
                alt="Pierre Unternährer"
                width={180}
                height={220}
                className="w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] h-auto mx-auto object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-dm-red mb-2 sm:mb-3 font-normal">
                Pierre Unternährer
              </h3>
              <div className="text-sm sm:text-base md:text-base lg:text-lg text-anthracite leading-relaxed">
                <p>Administrateur et gestionnaire de fortune chez <a href="https://saphir-invest.ch" target="_blank" rel="noopener noreferrer" className="text-dm-red hover:opacity-80 transition-opacity">Saphir Invest SA</a></p>
              </div>
            </div>
            </div>
          </AnimateOnScroll>

          {/* Sandrine Lavanchy */}
          <AnimateOnScroll delay={0.4}>
            <div className="bg-dm-red/[0.03] border border-dm-red p-6 sm:p-8 md:p-10 h-full flex flex-col">
            <div className="mb-4 sm:mb-6">
              <Image
                src="/assets/Portrait/Sandrine.png"
                alt="Sandrine Lavanchy"
                width={180}
                height={220}
                className="w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] h-auto mx-auto object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-dm-red mb-2 sm:mb-3 font-normal">
                Sandrine Lavanchy
              </h3>
              <div className="text-sm sm:text-base md:text-base lg:text-lg text-anthracite leading-relaxed">
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


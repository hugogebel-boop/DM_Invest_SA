import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { getAssetPath } from '@/lib/config'

export default function BanquesDepositaires() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-24 xl:py-28 bg-ivory">
      <div className="max-w-[1000px] mx-auto">
        <AnimateOnScroll>
          <h2 className="text-[40px] sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-dm-red mb-10 sm:mb-12 md:mb-16 lg:mb-14 text-left font-normal tracking-tight pl-4 sm:pl-0">
            Banques dépositaires
          </h2>
        </AnimateOnScroll>

        {/* Liste des banques */}
        <AnimateOnScroll delay={0.1}>
          <div className="pl-4 sm:pl-6 md:pl-8 pr-4 sm:pr-6 md:pr-8 flex items-center justify-between w-full gap-4 sm:gap-6 md:gap-8">
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-full h-20 sm:h-28 md:h-32 lg:h-36 bg-ivory flex items-center justify-center overflow-hidden">
                <Image
                  src={getAssetPath("/assets/Logo/logo Credit suisse.png")}
                  alt="Logo Crédit Suisse - Banque dépositaire DM Invest"
                  width={200}
                  height={80}
                  className="w-full h-full object-contain object-center"
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, 200px"
                />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-full h-20 sm:h-28 md:h-32 lg:h-36 bg-ivory flex items-center justify-center overflow-hidden">
                <Image
                  src={getAssetPath("/assets/Logo/Logo UBS.png")}
                  alt="Logo UBS - Banque dépositaire DM Invest"
                  width={200}
                  height={80}
                  className="w-full h-full object-contain object-center"
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, 200px"
                />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-full h-20 sm:h-28 md:h-32 lg:h-36 bg-ivory flex items-center justify-center overflow-hidden">
                <Image
                  src={getAssetPath("/assets/Logo/Logo Lombard Odier.png")}
                  alt="Logo Lombard Odier - Banque dépositaire DM Invest"
                  width={200}
                  height={80}
                  className="w-full h-full object-contain object-center"
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, 200px"
                />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-full h-20 sm:h-28 md:h-32 lg:h-36 bg-ivory flex items-center justify-center overflow-hidden">
                <Image
                  src={getAssetPath("/assets/Logo/logo BCV.png")}
                  alt="Logo BCV Banque Cantonale Vaudoise - Banque dépositaire DM Invest"
                  width={200}
                  height={80}
                  className="w-full h-full object-contain object-center"
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, 200px"
                />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-full h-20 sm:h-28 md:h-32 lg:h-36 bg-ivory flex items-center justify-center overflow-hidden">
                <Image
                  src={getAssetPath("/assets/Logo/Logo Swissquote.png")}
                  alt="Logo Swissquote - Banque dépositaire DM Invest"
                  width={200}
                  height={80}
                  className="w-full h-full object-contain object-center"
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, 200px"
                />
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}


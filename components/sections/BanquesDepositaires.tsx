import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { getAssetPath } from '@/lib/config'

export default function BanquesDepositaires() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-ivory">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <AnimateOnScroll>
          <h2 className="text-[40px] sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-dm-red mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-left font-normal tracking-tight">
            Banques dépositaires
          </h2>
        </AnimateOnScroll>

        {/* Liste des banques */}
        <AnimateOnScroll delay={0.1}>
          <div className="pl-4 sm:pl-6 md:pl-8 pr-4 sm:pr-6 md:pr-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          <div className="text-center">
            <div className="relative w-full aspect-[5/2] h-16 sm:h-20 md:h-24 bg-ivory flex items-center justify-center px-2 overflow-hidden">
              <Image
                src={getAssetPath("/assets/Logo/logo Credit suisse.png")}
                alt="Logo Crédit Suisse - Banque dépositaire DM Invest"
                width={150}
                height={60}
                className="w-full h-full object-contain object-center"
                sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 150px"
              />
            </div>
          </div>
          <div className="text-center">
            <div className="relative w-full aspect-[5/2] h-16 sm:h-20 md:h-24 bg-ivory flex items-center justify-center px-2 overflow-hidden">
              <Image
                src={getAssetPath("/assets/Logo/Logo UBS.png")}
                alt="Logo UBS - Banque dépositaire DM Invest"
                width={150}
                height={60}
                className="w-full h-full object-contain object-center"
                sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 150px"
              />
            </div>
          </div>
          <div className="text-center">
            <div className="relative w-full aspect-[5/2] h-16 sm:h-20 md:h-24 bg-ivory flex items-center justify-center px-2 overflow-hidden">
              <Image
                src={getAssetPath("/assets/Logo/logo BCV.png")}
                alt="Logo BCV Banque Cantonale Vaudoise - Banque dépositaire DM Invest"
                width={150}
                height={60}
                className="w-full h-full object-contain object-center"
                sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 150px"
              />
            </div>
          </div>
          <div className="text-center">
            <div className="relative w-full aspect-[5/2] h-16 sm:h-20 md:h-24 bg-ivory flex items-center justify-center px-2 overflow-hidden">
              <Image
                src={getAssetPath("/assets/Logo/Logo Lombard Odier.png")}
                alt="Logo Lombard Odier - Banque dépositaire DM Invest"
                width={150}
                height={60}
                className="w-full h-full object-contain object-center"
                sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 150px"
              />
            </div>
          </div>
          <div className="text-center">
            <div className="relative w-full aspect-[5/2] h-16 sm:h-20 md:h-24 bg-ivory flex items-center justify-center px-2 overflow-hidden">
              <Image
                src={getAssetPath("/assets/Logo/Logo Swissquote.png")}
                alt="Logo Swissquote - Banque dépositaire DM Invest"
                width={150}
                height={60}
                className="w-full h-full object-contain object-center"
                sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 150px"
              />
            </div>
          </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}


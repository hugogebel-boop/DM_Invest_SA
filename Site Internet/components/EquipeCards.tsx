'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { getAssetPath } from '@/lib/config'

export default function EquipeCards() {
  const yvesCardRef = useRef<HTMLDivElement>(null)
  const [cardHeight, setCardHeight] = useState<number | null>(null)

  useEffect(() => {
    const updateHeight = () => {
      if (yvesCardRef.current && window.innerWidth < 640) {
        const height = yvesCardRef.current.offsetHeight
        setCardHeight(height)
      } else {
        setCardHeight(null)
      }
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)
    
    // Attendre que les images soient chargées
    const images = document.querySelectorAll('img')
    const imagePromises = Array.from(images).map(img => {
      if (img.complete) return Promise.resolve()
      return new Promise(resolve => {
        img.onload = resolve
        img.onerror = resolve
      })
    })
    
    Promise.all(imagePromises).then(() => {
      setTimeout(updateHeight, 100)
    })

    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  const cardStyle = cardHeight ? { height: `${cardHeight}px` } : {}

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-stretch">
      {/* Yves Diserens */}
      <AnimateOnScroll delay={0.1}>
        <div 
          ref={yvesCardRef}
          className="bg-dm-red/[0.03] p-6 sm:p-8 md:p-10 flex flex-col h-full"
        >
          <div className="mb-4 sm:mb-6 flex justify-center">
            <div className="relative w-full max-w-[160px] sm:max-w-[160px] md:max-w-[180px] aspect-[180/220] mx-auto overflow-hidden">
              <Image
                src={getAssetPath("/assets/webp/Yves.webp")}
                alt="Yves Diserens - Actionnaire et administrateur de DM Invest SA, Gestionnaire de fortune"
                width={180}
                height={220}
                className="w-full h-full object-cover object-center"
                sizes="(max-width: 640px) 160px, (max-width: 768px) 160px, 180px"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl sm:text-lg md:text-xl lg:text-2xl font-serif text-dm-red mb-2 sm:mb-3 font-normal">
              Yves Diserens
            </h3>
            <div className="space-y-1 text-base sm:text-base md:text-base lg:text-lg text-anthracite leading-relaxed">
              <p>Actionnaire et administrateur</p>
              <p className="pt-2">Gestionnaire de fortune</p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Michael Giller */}
      <AnimateOnScroll delay={0.2}>
        <div 
          className="bg-dm-red/[0.03] p-6 sm:p-8 md:p-10 flex flex-col h-full"
          style={cardStyle}
        >
          <div className="mb-4 sm:mb-6 flex justify-center">
            <div className="relative w-full max-w-[160px] sm:max-w-[160px] md:max-w-[180px] aspect-[180/220] mx-auto overflow-hidden">
              <Image
                src={getAssetPath("/assets/webp/Mike.webp")}
                alt="Michael Giller - Administrateur et gestionnaire de fortune chez DM Invest SA"
                width={180}
                height={220}
                className="w-full h-full object-cover object-center"
                sizes="(max-width: 640px) 160px, (max-width: 768px) 160px, 180px"
              />
            </div>
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
        <div 
          className="bg-dm-red/[0.03] p-6 sm:p-8 md:p-10 flex flex-col h-full"
          style={cardStyle}
        >
          <div className="mb-4 sm:mb-6 flex justify-center">
            <div className="relative w-full max-w-[160px] sm:max-w-[160px] md:max-w-[180px] aspect-[180/220] mx-auto overflow-hidden">
              <Image
                src={getAssetPath("/assets/webp/Pierre.webp")}
                alt="Pierre Unternährer - Administrateur et gestionnaire de fortune chez Saphir Invest SA"
                width={180}
                height={220}
                className="w-full h-full object-cover object-center"
                sizes="(max-width: 640px) 160px, (max-width: 768px) 160px, 180px"
              />
            </div>
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
        <div 
          className="bg-dm-red/[0.03] p-6 sm:p-8 md:p-10 flex flex-col h-full"
          style={cardStyle}
        >
          <div className="mb-4 sm:mb-6 flex justify-center">
            <div className="relative w-full max-w-[160px] sm:max-w-[160px] md:max-w-[180px] aspect-[180/220] mx-auto overflow-hidden">
              <Image
                src={getAssetPath("/assets/webp/Sandrine.webp")}
                alt="Sandrine Lavanchy - Assistante de gestion chez DM Invest SA"
                width={180}
                height={220}
                className="w-full h-full object-cover object-center"
                sizes="(max-width: 640px) 160px, (max-width: 768px) 160px, 180px"
              />
            </div>
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
  )
}


'use client'

import Image from 'next/image'
import { getAssetPath } from '@/lib/config'
import { useScroll } from '@/contexts/ScrollContext'
import { useState, useEffect } from 'react'

export default function Hero() {
  const { isScrolledPastHero } = useScroll()
  const [isLandscape, setIsLandscape] = useState(false)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)
  
  // Détection de l'orientation et de la largeur pour mobile
  useEffect(() => {
    const checkOrientation = () => {
      const width = window.innerWidth
      setWindowWidth(width)
      // Sur mobile (< 640px), on détecte l'orientation
      if (width < 640) {
        setIsLandscape(width > window.innerHeight)
      } else {
        setIsLandscape(false)
      }
    }
    
    checkOrientation()
    window.addEventListener('resize', checkOrientation)
    window.addEventListener('orientationchange', checkOrientation)
    
    return () => {
      window.removeEventListener('resize', checkOrientation)
      window.removeEventListener('orientationchange', checkOrientation)
    }
  }, [])
  
  // Z-index du tableau : -z-10 quand on est dans le hero, -z-20 quand on a scrollé (derrière le fond bleu)
  const tableauZIndex = isScrolledPastHero ? -20 : -10

  return (
    <>
      {/* Fond fixe du tableau mobile PORTRAIT - cover pour remplir exactement largeur ET hauteur avec zoom minimal */}
      {/* Visible uniquement sur mobile portrait (< 640px et orientation portrait) */}
      <div 
        className="fixed inset-0 sm:hidden overflow-hidden"
        style={{
          display: isLandscape ? 'none' : 'block',
          backgroundColor: '#1d395e',
          backgroundImage: `url(${encodeURI(getAssetPath("/assets/Tableau/Mountains-by-StephanHerrgott-2017 - Mobile.jpg"))})`,
          backgroundSize: 'cover',
          WebkitBackgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          minHeight: '100vh',
          height: '100vh',
          maxHeight: '100vh',
          width: '100%',
          zIndex: tableauZIndex,
        }}
      />
      {/* Fond fixe du tableau mobile PAYSAGE / tablette - cover pour remplir exactement largeur ET hauteur avec zoom minimal */}
      {/* Visible sur mobile paysage (< 640px et orientation paysage) ET sur tablette (640px à 1279px) */}
      <div 
        className="fixed inset-0 overflow-hidden xl:hidden"
        style={{
          display: (isLandscape && windowWidth < 640) || (windowWidth >= 640 && windowWidth < 1280) ? 'block' : 'none',
          backgroundColor: '#1d395e',
          backgroundImage: `url(${encodeURI(getAssetPath("/assets/Tableau/Mountains-by-StephanHerrgott-2017 - Tablette.jpg"))})`,
          backgroundSize: 'cover',
          WebkitBackgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          minHeight: '100vh',
          height: '100vh',
          maxHeight: '100vh',
          width: '100%',
          zIndex: tableauZIndex,
        }}
      />
      {/* Fond fixe du tableau desktop - cover pour remplir exactement largeur ET hauteur avec zoom minimal */}
      {/* Visible à partir de 1280px uniquement (vrais écrans desktop) */}
      <div 
        className="hidden xl:block fixed inset-0 overflow-hidden"
        style={{
          backgroundImage: `url(${encodeURI(getAssetPath("/assets/Tableau/Mountains-by-StephanHerrgott-2017.jpg"))})`,
          backgroundSize: 'cover',
          WebkitBackgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '100svh',
          height: '100svh',
          maxHeight: '100svh',
          width: '100%',
          zIndex: tableauZIndex,
        }}
      />
      
      {/* Overlay bleu qui passe devant le tableau et le texte du hero quand on scroll en bas */}
      <div 
        className="fixed inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          backgroundColor: '#1d395e',
          zIndex: isScrolledPastHero ? 15 : -25,
          opacity: isScrolledPastHero ? 1 : 0,
        }}
      />
      
      {/* Logo fixe - au-dessus de la peinture, en dessous du contenu */}
      <div className="fixed inset-0 flex flex-col justify-start items-center z-[5] pointer-events-none" style={{ paddingTop: '80px', minHeight: '100svh', height: '100svh' }}>
        <div className="text-center px-4 sm:px-6 md:px-8 w-full max-w-5xl">
          <div className="mb-80 sm:mb-32 md:mb-56 lg:mb-72 xl:mb-80">
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-[400px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] aspect-[400/150] h-16 sm:h-20 md:h-36 lg:h-44 xl:h-52 px-4">
                <Image
                  src={getAssetPath("/assets/Logo/Logo DM Invest White.png")}
                  alt="DM Invest SA - Logo - Gestion de fortune à Lausanne, Suisse"
                  width={400}
                  height={150}
                  className="w-full h-full object-contain"
                  priority
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 500px, (max-width: 1280px) 600px, 800px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Titre et flèche fixes avec le fond */}
      <div className="fixed inset-0 flex flex-col justify-center items-center z-[10] pointer-events-none translate-y-52 sm:translate-y-0 md:translate-y-28 lg:translate-y-40 xl:translate-y-48" style={{ minHeight: '100svh', height: '100svh' }}>
        <div className="text-center px-4 sm:px-6 md:px-8 w-full max-w-5xl">
          {/* Titre */}
          <h1 className="text-[38px] sm:text-3xl md:text-5xl lg:text-6xl xl:text-6xl font-serif text-dm-red font-normal tracking-tight mb-4 sm:mb-20 md:mb-24 lg:mb-28 px-4">
            Gestion de fortune
          </h1>

          {/* Flèche élégante vers le bas - style Playfair Display avec courbes calligraphiques plus épaisses et arrondies */}
          <div className="flex justify-center mt-4 sm:mt-6 md:mt-8">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 text-dm-red"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                filter: 'drop-shadow(0 0 1px rgba(142, 54, 56, 0.3))'
              }}
            >
              {/* Ligne verticale qui se connecte bien avec la flèche */}
              <path d="M12 3v12.5" />
              {/* Flèche avec courbes arrondies style calligraphique Playfair Display - plus épaisse et arrondie */}
              <path d="M18 13.5l-6 6.5-6-6.5" />
            </svg>
          </div>
        </div>
      </div>

      <section 
        id="accueil" 
        className="relative flex flex-col justify-start items-center z-[20]"
        style={{
          margin: 0,
          paddingTop: '120px',
          minHeight: '100svh',
          height: '100svh',
        }}
      >
      </section>
    </>
  )
}


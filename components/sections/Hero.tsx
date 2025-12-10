import Image from 'next/image'
import { basePath, getAssetPath } from '@/lib/config'

export default function Hero() {
  return (
    <>
      {/* Fond fixe du tableau mobile */}
      <div 
        className="fixed inset-0 -z-10 sm:hidden overflow-hidden"
        style={{
          backgroundImage: `url(${encodeURI(getAssetPath("/assets/Tableau/Mountains-by-StephanHerrgott-2017 - Mobile.jpg"))})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Fond fixe du tableau desktop */}
      <div 
        className="hidden sm:block fixed inset-0 -z-10 overflow-hidden"
        style={{
          backgroundImage: `url(${encodeURI(getAssetPath("/assets/Tableau/Mountains-by-StephanHerrgott-2017.jpg"))})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Logo fixe - au-dessus de la peinture, en dessous du contenu */}
      <div className="fixed inset-0 flex flex-col justify-start items-center z-[5] pointer-events-none" style={{ paddingTop: '120px' }}>
        <div className="text-center px-4 sm:px-6 md:px-8 w-full max-w-5xl">
          <div className="mb-80 sm:mb-32 md:mb-56 lg:mb-72 xl:mb-80">
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-[400px] aspect-[400/150] h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 px-4">
                <Image
                  src={getAssetPath("/assets/Logo/Logo DM Invest.png")}
                  alt="DM Invest SA - Logo - Gestion de fortune à Lausanne, Suisse"
                  width={400}
                  height={150}
                  className="w-full h-full object-contain"
                  priority
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 350px, 400px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Titre et flèche fixes avec le fond */}
      <div className="fixed inset-0 flex flex-col justify-center items-center z-[10] pointer-events-none translate-y-52 sm:translate-y-0 md:translate-y-28 lg:translate-y-40 xl:translate-y-48">
        <div className="text-center px-4 sm:px-6 md:px-8 w-full max-w-5xl">
          {/* Titre */}
          <h1 className="sm:text-3xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-dm-red font-normal tracking-tight mb-4 sm:mb-20 md:mb-24 lg:mb-28 px-4" style={{ fontSize: 'clamp(38px, 4vw, 42px)' }}>
            Gestion de fortune
          </h1>

          {/* Flèche élégante vers le bas */}
          <div className="flex justify-center mt-4 sm:mt-6 md:mt-8">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 text-dm-red"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      <section 
        id="accueil" 
        className="relative min-h-screen flex flex-col justify-start items-center z-[20]"
        style={{
          margin: 0,
          paddingTop: '120px',
        }}
      >
      </section>
    </>
  )
}


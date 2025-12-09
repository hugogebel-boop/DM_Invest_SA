import Image from 'next/image'

export default function Hero() {
  return (
    <>
      {/* Fond fixe du tableau qui couvre toute la page */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: 'url(/assets/Tableau/Mountains-by-StephanHerrgott-2017.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      <section 
        id="accueil" 
        className="relative min-h-screen flex flex-col justify-start items-center"
        style={{
          margin: 0,
          paddingTop: '80px',
        }}
      >
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 w-full max-w-5xl mx-auto">
        {/* Logo DM Invest */}
        <div className="mb-24 sm:mb-32 md:mb-40 lg:mb-52 xl:mb-64">
          <div className="flex justify-center">
            <Image
              src="/assets/Logo/Logo DM Invest.png"
              alt="DM Invest SA - Logo - Gestion de fortune à Lausanne, Suisse"
              width={400}
              height={150}
              className="w-auto h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 object-contain px-4"
              priority
            />
          </div>
        </div>

        {/* Titre */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-dm-red font-normal tracking-tight mb-16 sm:mb-20 md:mb-24 lg:mb-28 px-4">
          Gestion de fortune
        </h1>

        {/* Flèche élégante vers le bas */}
        <div className="flex justify-center mt-4 sm:mt-6 md:mt-8">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-dm-red"
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
      </section>
    </>
  )
}


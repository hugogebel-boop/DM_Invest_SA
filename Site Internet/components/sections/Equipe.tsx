import AnimateOnScroll from '@/components/AnimateOnScroll'
import EquipeCards from '@/components/EquipeCards'

export default function Equipe() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-24 xl:py-28 bg-ivory">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <AnimateOnScroll>
          <h2 className="text-[40px] sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-dm-red mb-10 sm:mb-12 md:mb-16 lg:mb-14 text-left font-normal tracking-tight pl-4 sm:pl-0">
            Notre équipe
          </h2>
        </AnimateOnScroll>

        <div className="pl-4 sm:pl-6 md:pl-8 pr-4 sm:pr-6 md:pr-8">
          <EquipeCards />
        </div>
      </div>
    </section>
  )
}


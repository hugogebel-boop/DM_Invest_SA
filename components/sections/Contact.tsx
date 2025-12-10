import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function Contact() {
  return (
    <section id="contact" className="bg-tableau-blue text-white">
      {/* Section Contact */}
      <div className="py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <AnimateOnScroll>
            <h2 className="text-[40px] sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-white mb-12 sm:mb-12 md:mb-16 text-left font-normal tracking-tight">
              Contact
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="text-center space-y-3 sm:space-y-4 text-base sm:text-lg md:text-lg lg:text-xl text-white leading-relaxed">
            <div>
              <p className="font-serif mb-2 sm:mb-3 text-lg sm:text-xl md:text-xl lg:text-2xl">
                <span className="text-dm-red">DM</span>{' '}
                <span className="text-white">Invest SA</span>
              </p>
              <p>Rue du Grand-Chêne 6</p>
              <p>1003 Lausanne</p>
              <p>Switzerland</p>
            </div>
            <div>
              <p>
                <a href="tel:+41216480015" className="text-white hover:text-dm-red transition-colors duration-200 underline text-base sm:text-lg md:text-lg lg:text-xl">
                  +41 (0)21 648 00 15
                </a>
              </p>
            </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Footer intégré */}
      <div className="border-t border-white/20 py-5 sm:py-6 md:py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-xs sm:text-sm md:text-sm font-sans text-white">
            <div className="text-center sm:text-left text-white">
              Art by{' '}
              <a
                href="https://www.stephan-herrgott.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory hover:text-dm-red transition-colors duration-200"
              >
                Stephan Herrgott
              </a>{' '}
              |{' '}
              <Link href="/mentions-legales" className="text-ivory hover:text-dm-red transition-colors duration-200">
                Mentions Légales
              </Link>
            </div>
            <div className="text-center sm:text-right">
              © 1999-2025 - DM Invest SA
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


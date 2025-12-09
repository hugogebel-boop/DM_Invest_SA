import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function APropos() {
  return (
    <section id="a-propos" className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-ivory">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <AnimateOnScroll>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-dm-red mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-left font-normal tracking-tight">
            à propos
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="space-y-5 sm:space-y-6 text-base sm:text-lg md:text-lg lg:text-xl text-anthracite leading-relaxed">
          <p>
            DM Invest est une société suisse indépendante spécialisée dans la <span className="font-bold">gestion de fortune</span> dont le siège est à Lausanne.
          </p>
          <p>
            Son équipe a acquis son expérience et expertise auprès d&apos;institutions bancaires de premier ordre.
          </p>
          <p>
            DM Invest cherche à construire une relation clientèle basée sur la <span className="font-bold">confiance</span>, la <span className="font-bold">transparence</span> et l&apos;<span className="font-bold">éthique</span>.
          </p>
          <p>
            L&apos;objectif est la création de valeur à long terme.
          </p>
          <p>
            DM Invest est membre de l&apos;<a href="https://www.vsv-asg.ch/fr/home" target="_blank" rel="noopener noreferrer" className="text-dm-red hover:opacity-80 transition-opacity">Association Suisse des Gestionnaires de fortune (ASG)</a>, ainsi qu&apos;affilié à l&apos;<a href="https://www.aoos.ch/?lang=fr" target="_blank" rel="noopener noreferrer" className="text-dm-red hover:opacity-80 transition-opacity">AOOS</a>, organisme d&apos;autorégulation reconnu au sens de la <a href="https://www.fedlex.admin.ch/eli/cc/1998/892_892_892/fr" target="_blank" rel="noopener noreferrer" className="text-dm-red hover:opacity-80 transition-opacity">LBA</a>.
          </p>
          <p>
            Selon les exigences légales découlant de la Loi fédérale sur les services financiers (<a href="https://www.admin.ch/opc/fr/classified-compilation/20152661/index.html" target="_blank" rel="noopener noreferrer" className="text-dm-red hover:opacity-80 transition-opacity">LSFin</a>), DM Invest est affilié à l&apos;<a href="https://ombudfinance.ch/accueil/" target="_blank" rel="noopener noreferrer" className="text-dm-red hover:opacity-80 transition-opacity">OFS Ombud Finance Suisse</a>.
          </p>
          <p>
            DM Invest a obtenu auprès de la <a href="https://www.finma.ch/fr/finma-public/etablissements-personnes-et-produits-autorises/" target="_blank" rel="noopener noreferrer" className="text-dm-red hover:opacity-80 transition-opacity">FINMA</a> sa licence de gestionnaire de fortune durant l&apos;été 2022.
          </p>
          </div>
        </AnimateOnScroll>

        {/* Logos des organismes */}
        <AnimateOnScroll delay={0.2}>
          <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center justify-items-center">
            <a
              href="https://www.vsv-asg.ch/fr/home"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[180px] sm:max-w-[200px] h-16 sm:h-20 bg-ivory flex items-center justify-center hover:opacity-80 transition-opacity px-4"
            >
              <Image
                src="/assets/Certifications/Logo VSV-ASG.png"
                alt="VSV-ASG"
                width={180}
                height={80}
                className="max-w-full h-auto object-contain"
              />
            </a>
            <a
              href="https://www.aoos.ch/?lang=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[180px] sm:max-w-[200px] h-16 sm:h-20 bg-ivory flex items-center justify-center hover:opacity-80 transition-opacity px-4"
            >
              <Image
                src="/assets/Certifications/Logo AOOS.png"
                alt="AOOS"
                width={180}
                height={80}
                className="max-w-full h-auto object-contain"
              />
            </a>
            <a
              href="https://ombudfinance.ch/accueil/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[180px] sm:max-w-[200px] h-16 sm:h-20 bg-ivory flex items-center justify-center hover:opacity-80 transition-opacity px-4"
            >
              <Image
                src="/assets/Certifications/Logo OFS.png"
                alt="OFS"
                width={180}
                height={80}
                className="max-w-full h-auto object-contain"
              />
            </a>
          </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}


import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { getAssetPath } from '@/lib/config'

export default function APropos() {
  return (
    <section id="a-propos" className="py-16 sm:py-20 md:py-24 lg:py-24 xl:py-28 bg-ivory">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <AnimateOnScroll>
          <h2 className="text-[40px] sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-dm-red mb-10 sm:mb-12 md:mb-16 lg:mb-14 text-left font-normal tracking-tight pl-4 sm:pl-0">
            À propos
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="pl-4 sm:pl-6 md:pl-8 pr-4 sm:pr-6 md:pr-8 space-y-4 sm:space-y-5 text-base sm:text-lg md:text-lg lg:text-xl text-anthracite leading-relaxed text-justify">
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
          <div className="pl-4 sm:pl-6 md:pl-8 pr-4 sm:pr-6 md:pr-8 mt-16 sm:mt-20 md:mt-24 lg:mt-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center justify-items-center">
            <a
              href="https://www.vsv-asg.ch/fr/home"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full max-w-[180px] sm:max-w-[200px] aspect-[180/80] h-16 sm:h-20 bg-ivory flex items-center justify-center hover:opacity-80 transition-opacity overflow-hidden"
            >
              <Image
                src={getAssetPath("/assets/Certifications/Logo VSV-ASG.png")}
                alt="Logo VSV-ASG - Association Suisse des Gestionnaires de fortune"
                width={180}
                height={80}
                className="w-full h-full object-contain object-center"
                sizes="(max-width: 640px) 180px, 200px"
              />
            </a>
            <a
              href="https://www.aoos.ch/?lang=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full max-w-[180px] sm:max-w-[200px] aspect-[180/80] h-16 sm:h-20 bg-ivory flex items-center justify-center hover:opacity-80 transition-opacity overflow-hidden"
            >
              <Image
                src={getAssetPath("/assets/Certifications/Logo AOOS.png")}
                alt="Logo AOOS - Organisme d'autorégulation reconnu LBA"
                width={180}
                height={80}
                className="w-full h-full object-contain object-center"
                sizes="(max-width: 640px) 180px, 200px"
              />
            </a>
            <a
              href="https://ombudfinance.ch/accueil/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full max-w-[180px] sm:max-w-[200px] aspect-[180/80] h-16 sm:h-20 bg-ivory flex items-center justify-center hover:opacity-80 transition-opacity overflow-hidden"
            >
              <Image
                src={getAssetPath("/assets/Certifications/Logo OFS.png")}
                alt="Logo OFS Ombud Finance Suisse - Médiation financière"
                width={180}
                height={80}
                className="w-full h-full object-contain object-center"
                sizes="(max-width: 640px) 180px, 200px"
              />
            </a>
            <a
              href="https://www.finma.ch/fr/finma-public/etablissements-personnes-et-produits-autorises/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full max-w-[180px] sm:max-w-[200px] aspect-[180/80] h-16 sm:h-20 bg-ivory flex items-center justify-center hover:opacity-80 transition-opacity overflow-hidden"
            >
              <Image
                src={getAssetPath("/assets/Certifications/logo-finma.png")}
                alt="Logo FINMA - Autorité fédérale de surveillance des marchés financiers"
                width={180}
                height={80}
                className="w-full h-full object-contain object-center"
                sizes="(max-width: 640px) 180px, 200px"
              />
            </a>
          </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}


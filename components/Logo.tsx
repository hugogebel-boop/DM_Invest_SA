import { basePath } from '@/lib/config'

interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <a href={`${basePath}/`} className={`flex items-center ${className}`} aria-label="DM Invest SA - Accueil">
      <span className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-serif font-bold">
        <span className="text-dm-red">dm</span>
        <span className="text-ivory">invest</span>
      </span>
    </a>
  )
}


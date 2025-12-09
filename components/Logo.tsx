import Link from 'next/link'

interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`} aria-label="DM Invest SA - Accueil">
      <span className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-serif font-bold">
        <span className="text-dm-red">dm</span>
        <span className="text-white">invest</span>
      </span>
    </Link>
  )
}


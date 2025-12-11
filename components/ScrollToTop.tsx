'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const toggleVisibility = () => {
      // Vérifier si on a scrollé au-delà du hero (100vh) et si on est sur la page d'accueil
      if (window.scrollY > window.innerHeight && pathname === '/') {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    toggleVisibility() // Vérifier au chargement

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [pathname])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-12 right-6 z-50 md:hidden bg-dm-red text-white p-3 rounded-full shadow-lg hover:bg-dm-red/90 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Retour en haut de la page"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
}


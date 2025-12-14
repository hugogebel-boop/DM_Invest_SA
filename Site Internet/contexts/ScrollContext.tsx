'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { usePathname } from 'next/navigation'

interface ScrollContextType {
  isScrolledPastHero: boolean
}

const ScrollContext = createContext<ScrollContextType>({ isScrolledPastHero: false })

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Vérifier si on a scrollé au-delà du hero (100vh) et si on est sur la page d'accueil
          if (window.scrollY > window.innerHeight && pathname === '/') {
            setIsScrolledPastHero(true)
          } else {
            setIsScrolledPastHero(false)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Vérifier au chargement

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  return (
    <ScrollContext.Provider value={{ isScrolledPastHero }}>
      {children}
    </ScrollContext.Provider>
  )
}

export function useScroll() {
  return useContext(ScrollContext)
}


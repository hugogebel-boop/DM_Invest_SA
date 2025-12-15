'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-dm-red/98 backdrop-blur-sm border-b border-dm-red/30" style={{ margin: 0, padding: 0 }}>
      <nav className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-3.5 md:py-4" aria-label="Navigation principale">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Navigation desktop */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10 text-base lg:text-lg">
            <li>
              <Link href="#accueil" className="text-ivory hover:text-ivory transition-opacity duration-200 font-sans">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="#prestations" className="text-ivory hover:text-ivory transition-opacity duration-200 font-sans">
                Prestations
              </Link>
            </li>
            <li>
              <Link href="#a-propos" className="text-ivory hover:text-ivory transition-opacity duration-200 font-sans">
                À propos
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-ivory hover:text-ivory transition-opacity duration-200 font-sans">
                Contact
              </Link>
            </li>
          </ul>

          {/* Menu mobile button */}
          <button
            className="md:hidden text-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
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
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-3 sm:space-y-4 pb-4">
            <li>
              <Link
                href="#accueil"
                className="block text-base sm:text-lg text-ivory hover:text-ivory transition-opacity duration-200 font-sans py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="#prestations"
                className="block text-base sm:text-lg text-ivory hover:text-ivory transition-opacity duration-200 font-sans py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Prestations
              </Link>
            </li>
            <li>
              <Link
                href="#a-propos"
                className="block text-base sm:text-lg text-ivory hover:text-ivory transition-opacity duration-200 font-sans py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block text-base sm:text-lg text-ivory hover:text-ivory transition-opacity duration-200 font-sans py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}


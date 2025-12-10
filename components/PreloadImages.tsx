'use client'

import { useEffect } from 'react'
import { getAssetPath } from '@/lib/config'

export default function PreloadImages() {
  useEffect(() => {
    // Préchargement immédiat des images critiques du Hero
    // Ce script s'exécute dès le montage du composant pour un préchargement rapide
    const mobileImage = getAssetPath("/assets/Tableau/Mountains-by-StephanHerrgott-2017 - Mobile.jpg")
    const desktopImage = getAssetPath("/assets/Tableau/Mountains-by-StephanHerrgott-2017.jpg")
    const logoImage = getAssetPath("/assets/Logo/Logo DM Invest.png")
    const portraitYves = getAssetPath("/assets/Portrait/Yves.png")
    const portraitMike = getAssetPath("/assets/Portrait/Mike.png")
    const portraitPierre = getAssetPath("/assets/Portrait/Pierre.png")
    const portraitSandrine = getAssetPath("/assets/Portrait/Sandrine.png")

    // Fonction helper pour ajouter un preload
    const addPreload = (href: string, media?: string, priority: string = 'high') => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = href
        link.setAttribute('fetchpriority', priority)
        if (media) link.media = media
        document.head.appendChild(link)
      }
    }

    // Images critiques (above the fold) - priorité haute
    addPreload(mobileImage, '(max-width: 640px)', 'high')
    addPreload(desktopImage, '(min-width: 641px)', 'high')
    addPreload(logoImage, undefined, 'high')

    // Portraits de l'équipe - priorité auto pour préchargement anticipé
    addPreload(portraitYves, undefined, 'auto')
    addPreload(portraitMike, undefined, 'auto')
    addPreload(portraitPierre, undefined, 'auto')
    addPreload(portraitSandrine, undefined, 'auto')
  }, [])

  return null
}


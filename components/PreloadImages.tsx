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

    // Précharger les images immédiatement avec fetchpriority high
    const linkMobile = document.createElement('link')
    linkMobile.rel = 'preload'
    linkMobile.as = 'image'
    linkMobile.href = mobileImage
    linkMobile.media = '(max-width: 640px)'
    linkMobile.setAttribute('fetchpriority', 'high')
    if (!document.querySelector(`link[href="${mobileImage}"]`)) {
      document.head.appendChild(linkMobile)
    }

    const linkDesktop = document.createElement('link')
    linkDesktop.rel = 'preload'
    linkDesktop.as = 'image'
    linkDesktop.href = desktopImage
    linkDesktop.media = '(min-width: 641px)'
    linkDesktop.setAttribute('fetchpriority', 'high')
    if (!document.querySelector(`link[href="${desktopImage}"]`)) {
      document.head.appendChild(linkDesktop)
    }

    const linkLogo = document.createElement('link')
    linkLogo.rel = 'preload'
    linkLogo.as = 'image'
    linkLogo.href = logoImage
    linkLogo.setAttribute('fetchpriority', 'high')
    if (!document.querySelector(`link[href="${logoImage}"]`)) {
      document.head.appendChild(linkLogo)
    }
  }, [])

  return null
}


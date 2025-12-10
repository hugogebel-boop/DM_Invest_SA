'use client'

import { useEffect } from 'react'

export default function ThemeColor() {
  useEffect(() => {
    // Supprimer l'ancienne meta tag si elle existe
    const existingMeta = document.querySelector('meta[name="theme-color"]')
    if (existingMeta) {
      existingMeta.remove()
    }
    
    // Créer et ajouter la nouvelle meta tag
    const meta = document.createElement('meta')
    meta.name = 'theme-color'
    meta.content = '#1d395e'
    document.head.appendChild(meta)
  }, [])

  return null
}


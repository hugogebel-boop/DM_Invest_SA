'use client'

import { useEffect } from 'react'

export default function ThemeColor() {
  useEffect(() => {
    // S'assurer que la meta tag theme-color est présente et correcte
    const updateThemeColor = () => {
      // Supprimer toutes les anciennes meta tags theme-color
      const existingMetas = document.querySelectorAll('meta[name="theme-color"]')
      existingMetas.forEach(meta => meta.remove())
      
      // Créer et ajouter les meta tags theme-color
      const metaLight = document.createElement('meta')
      metaLight.name = 'theme-color'
      metaLight.setAttribute('media', '(prefers-color-scheme: light)')
      metaLight.content = '#1d395e'
      document.head.appendChild(metaLight)
      
      const metaDark = document.createElement('meta')
      metaDark.name = 'theme-color'
      metaDark.setAttribute('media', '(prefers-color-scheme: dark)')
      metaDark.content = '#1d395e'
      document.head.appendChild(metaDark)
      
      // Meta tag par défaut (sans media)
      const metaDefault = document.createElement('meta')
      metaDefault.name = 'theme-color'
      metaDefault.content = '#1d395e'
      document.head.appendChild(metaDefault)
    }
    
    // Mettre à jour immédiatement
    updateThemeColor()
    
    // Réessayer après un court délai pour s'assurer que c'est bien appliqué
    const timeout = setTimeout(updateThemeColor, 100)
    
    return () => clearTimeout(timeout)
  }, [])

  return null
}


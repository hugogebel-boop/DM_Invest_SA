// Configuration pour GitHub Pages
// Le basePath est défini dans next.config.js
// En production, il sera '/DM_Invest_SA', en développement il sera vide
const isProduction = process.env.NODE_ENV === 'production'
export const basePath = isProduction ? '/DM_Invest_SA' : ''

// Helper pour préfixer les chemins avec basePath
export const getAssetPath = (path: string): string => {
  // Si le chemin commence déjà par basePath, on ne le préfixe pas deux fois
  if (basePath && path.startsWith(basePath)) {
    return path
  }
  // Si le chemin commence par /, on préfixe avec basePath
  if (path.startsWith('/')) {
    return basePath ? `${basePath}${path}` : path
  }
  // Sinon, on ajoute basePath et /
  return basePath ? `${basePath}/${path}` : `/${path}`
}


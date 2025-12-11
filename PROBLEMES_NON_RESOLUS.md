# Problèmes Non Résolus - DM Invest SA

**Date** : Analyse après toutes les tentatives de correction  
**Statut** : En cours de résolution

---

## 🔴 Problème Principal : Zoom du Tableau sur iPad (GitHub Pages)

### Description du Problème
- **Symptôme** : Le tableau est ultra zoomé sur iPad Pro 11 pouces sur GitHub Pages
- **Comportement attendu** : Le tableau devrait s'afficher correctement, bien cadré, comme sur localhost en version tablette
- **Comportement actuel** : Le tableau est très zoomé, on ne voit qu'une partie de l'image

### Tentatives de Résolution (Toutes Échouées)

#### Tentative 1 : `backgroundSize: 'contain'`
```css
backgroundSize: 'contain'
backgroundPosition: 'center top'
```
**Résultat** : ❌ Toujours zoomé

#### Tentative 2 : `backgroundSize: '100% auto'`
```css
backgroundSize: '100% auto'
backgroundPosition: 'center top'
```
**Résultat** : ❌ Toujours zoomé

#### Tentative 3 : `backgroundSize: '85% auto'`
```css
backgroundSize: '85% auto'
backgroundPosition: 'center top'
```
**Résultat** : ❌ Toujours zoomé

#### Tentative 4 : Utilisation de l'image mobile pour tablette
```css
backgroundImage: 'Mountains-by-StephanHerrgott-2017 - Mobile.jpg'
backgroundSize: 'cover'
```
**Résultat** : ❌ Toujours zoomé

#### Tentative 5 : Limitation de la hauteur à `100svh`
```css
height: '100svh'
maxHeight: '100svh'
backgroundSize: 'cover'
```
**Résultat** : ❌ Toujours zoomé

#### Tentative 6 : `backgroundSize: 'contain'` avec hauteur limitée
```css
height: '100svh'
maxHeight: '100svh'
backgroundSize: 'contain'
backgroundPosition: 'center top'
```
**Résultat** : ⏳ En test (dernière tentative)

### Observations Importantes
- ✅ **Localhost** : Fonctionne parfaitement en version tablette sur ordinateur
- ❌ **GitHub Pages sur iPad** : Ultra zoomé
- ✅ **Mobile** : Fonctionne correctement
- ✅ **Desktop** : Fonctionne correctement

### Hypothèses sur la Cause
1. **Différence de rendu Safari iPad** : Safari sur iPad peut interpréter différemment les unités CSS (`svh`, `vh`) ou les `backgroundSize`
2. **Problème de viewport** : Le viewport sur iPad peut être différent entre localhost et GitHub Pages
3. **Problème de chargement d'image** : L'image tablette pourrait être chargée avec une résolution différente sur GitHub Pages
4. **Problème de cache** : Safari pourrait utiliser une version en cache de l'image
5. **Problème de basePath** : Le chemin de l'image pourrait être incorrect sur GitHub Pages

### Solutions à Tester (Non Implémentées)

#### Solution 1 : Utiliser une image Next.js au lieu d'un background CSS
```tsx
<Image
  src={getAssetPath("/assets/Tableau/Mountains-by-StephanHerrgott-2017 - Tablette.jpg")}
  fill
  className="object-contain"
  alt="Tableau"
/>
```
**Avantage** : Next.js gère mieux l'optimisation et le responsive

#### Solution 2 : Media queries CSS spécifiques pour iPad
```css
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 2) {
  background-size: 90% auto !important;
}
```

#### Solution 3 : Détection JavaScript de l'orientation et ajustement dynamique
```typescript
const [backgroundSize, setBackgroundSize] = useState('cover')
useEffect(() => {
  const isIPad = /iPad/.test(navigator.userAgent) || 
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  if (isIPad) {
    setBackgroundSize('contain')
  }
}, [])
```

#### Solution 4 : Utiliser `object-fit` avec une vraie image
Remplacer le background CSS par une balise `<img>` avec `object-fit: contain`

#### Solution 5 : Vérifier les dimensions réelles de l'image tablette
- Vérifier si l'image `Mountains-by-StephanHerrgott-2017 - Tablette.jpg` a les bonnes dimensions
- Peut-être créer une version spécifique pour iPad Pro 11 pouces

#### Solution 6 : Utiliser `background-size` avec des valeurs en pixels
```css
backgroundSize: '834px auto' /* Largeur iPad Pro 11 pouces */
```

#### Solution 7 : Désactiver le zoom Safari avec viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```
**Note** : Déjà testé partiellement avec `maximumScale: 5` dans viewport

---

## 📋 Autres Problèmes Résolus (Pour Référence)

### ✅ Résolu : Image ne s'affichait pas
- **Cause** : Espaces dans les noms de fichiers
- **Solution** : Utilisation de `encodeURI(getAssetPath(...))`

### ✅ Résolu : Theme color sur mobile
- **Cause** : Configuration incorrecte dans Next.js 16
- **Solution** : Déplacement vers `viewport` export

### ✅ Résolu : Zoom sur mobile GitHub Pages
- **Cause** : `backgroundAttachment: 'fixed'` sur mobile
- **Solution** : Changement en `'scroll'` avec `100svh`

### ✅ Résolu : Alignement mobile
- **Solution** : Ajout de `pl-4 sm:pl-0` sur les titres

### ✅ Résolu : Espacements desktop
- **Solution** : Réduction des padding et margins sur desktop

### ✅ Résolu : Fond bleu devant tableau
- **Solution** : Système de z-index dynamique avec ScrollContext

---

## 🎯 Plan d'Action Recommandé

### Priorité 1 : Résoudre le Zoom iPad
1. **Tester Solution 1** : Utiliser Next.js Image au lieu de background CSS
2. **Tester Solution 4** : Utiliser `<img>` avec `object-fit`
3. **Vérifier les dimensions** de l'image tablette
4. **Tester Solution 6** : Utiliser des valeurs en pixels fixes

### Priorité 2 : Diagnostic Approfondi
1. **Console Safari iPad** : Vérifier les erreurs JavaScript
2. **Network tab** : Vérifier comment l'image est chargée
3. **Computed styles** : Vérifier les styles CSS réellement appliqués
4. **Viewport** : Vérifier les dimensions du viewport sur iPad

### Priorité 3 : Solution de Contournement
Si aucune solution ne fonctionne :
- Utiliser l'image mobile pour tablette aussi (comme ça fonctionne bien)
- Ou créer une image spécifique optimisée pour iPad Pro 11 pouces

---

## 📝 Notes Techniques

### Configuration Actuelle (Tablette)
```tsx
<div 
  className="hidden sm:block lg:hidden fixed overflow-hidden"
  style={{
    top: 0,
    left: 0,
    right: 0,
    height: '100svh',
    maxHeight: '100svh',
    width: '100%',
    backgroundImage: `url(${encodeURI(getAssetPath("/assets/Tableau/Mountains-by-StephanHerrgott-2017 - Tablette.jpg"))})`,
    backgroundSize: 'contain', // Dernière tentative
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundColor: '#1d395e',
    zIndex: tableauZIndex,
  }}
/>
```

### Breakpoints Tailwind
- Mobile : `< 640px` (sm:hidden)
- Tablette : `640px - 1024px` (sm:block lg:hidden)
- Desktop : `≥ 1024px` (lg:block)

### iPad Pro 11 pouces Spécifications
- Résolution : 2388 x 1668 pixels
- PPI : 264
- Orientation : Portrait (834 x 1194) ou Paysage (1194 x 834)

---

## 🔍 Questions à Résoudre

1. **Pourquoi ça fonctionne sur localhost mais pas sur GitHub Pages ?**
   - Différence de serveur ?
   - Différence de cache ?
   - Différence de viewport ?

2. **Pourquoi ça fonctionne sur mobile mais pas sur tablette ?**
   - L'image mobile est-elle mieux optimisée ?
   - Le viewport mobile est-il différent ?

3. **Safari iPad interprète-t-il différemment les CSS ?**
   - `svh` vs `vh` ?
   - `contain` vs `cover` ?
   - `backgroundAttachment` ?

---

## ✅ Conclusion

**Problème principal** : Le zoom du tableau sur iPad Pro 11 pouces sur GitHub Pages persiste malgré 6 tentatives différentes.

**Prochaines étapes** :
1. Tester l'utilisation de Next.js Image au lieu de background CSS
2. Vérifier les dimensions réelles de l'image tablette
3. Tester avec des valeurs en pixels fixes
4. Si nécessaire, utiliser l'image mobile pour tablette (solution de contournement)

**Statut** : 🔴 **NON RÉSOLU** - Nécessite des tests supplémentaires et une approche différente


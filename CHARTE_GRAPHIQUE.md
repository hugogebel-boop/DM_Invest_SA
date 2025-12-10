# Charte Graphique - DM Invest SA

## 🎨 Palette de Couleurs

### Couleurs Principales

| Couleur | Nom | Code Hex | RGB | Utilisation |
|---------|-----|----------|-----|-------------|
| **DM Red** | `dm-red` | `#8E3638` | RGB(142, 54, 56) | Couleur signature - Titres, accents, liens, boutons, hover |
| **Ivory** | `ivory` | `#fcfbfe` | RGB(252, 251, 254) | Fond principal - Arrière-plans, sections |
| **Anthracite** | `anthracite` | `#1D1D1D` | RGB(29, 29, 29) | Texte principal - Paragraphes, navigation, contenu |
| **Tableau Blue** | `tableau-blue` | `#1d395e` | RGB(29, 57, 94) | Bleu du tableau - Accents, harmonie, section Contact |
| **Ivory** | `ivory` | `#fcfbfe` | RGB(252, 251, 254) | Ivoire - Textes sur fond sombre (remplace le blanc) |

### Utilisation des Couleurs

- **Titres (h1, h2, h3, h4, h5, h6)** : `dm-red` (#8E3638)
- **Texte de corps** : `anthracite` (#1D1D1D)
- **Fonds de sections** : `ivory` (#fcfbfe)
- **Liens** : `dm-red` avec `opacity-80` au hover
- **Section Contact** : Fond `tableau-blue` (#1d395e) avec texte `ivory`
- **Focus (accessibilité)** : `outline-dm-red` avec offset

## 📝 Typographie

### Polices de Caractères

#### Google Fonts
- **Playfair Display** : 400, 500, 600, 700
- **Inter** : 300, 400, 500, 600

#### Familles de Polices

| Famille | Police Principale | Fallbacks | Utilisation |
|---------|-------------------|-----------|-------------|
| **Serif** | `Playfair Display` | `Cormorant Garamond`, `Georgia`, `serif` | **Titres** - Élégant, classique |
| **Sans-serif** | `Inter` | `Helvetica Neue`, `system-ui`, `sans-serif` | **Texte** - Moderne, sobre |

### Tailles de Police

| Classe Tailwind | Taille | Line Height | Utilisation |
|----------------|--------|-------------|-------------|
| `text-base` | **18px** | 1.7 | Texte de base (confortable pour 50-80 ans) |
| `text-lg` | **20px** | 1.7 | Texte large |
| `text-xl` | **24px** | 1.6 | Sous-titres |
| `text-2xl` | **30px** | 1.5 | Titres de section |
| `text-3xl` | **36px** | 1.4 | Grands titres |
| `text-4xl` | **48px** | 1.3 | Titres principaux |

### Hiérarchie Typographique

#### Titre Principal (Hero)
- Mobile : `text-[38px]` (38px)
- Small : `text-3xl` (30px)
- Medium : `text-5xl` (48px)
- Large : `text-6xl` (60px)
- Extra Large : `text-6xl` (72px)
- Font : `font-serif`
- Color : `text-dm-red`
- Tracking : `tracking-tight`
- Weight : `font-normal`

#### Titres de Section (h2)
- Mobile : `text-[40px]` (40px)
- Small : `text-3xl` (30px)
- Medium : `text-3xl` (30px)
- Large : `text-4xl` (36px)
- Extra Large : `text-5xl` (48px)
- Font : `font-serif`
- Color : `text-dm-red`
- Weight : `font-normal`
- Tracking : `tracking-tight`
- Alignement : `text-left`

#### Sous-titres (h3)
- Taille : `text-xl sm:text-lg md:text-xl lg:text-2xl`
- Font : `font-serif`
- Color : `text-tableau-blue`
- Weight : `font-normal`
- Tracking : `tracking-wide`

#### Texte de Corps
- Taille : `text-base sm:text-lg md:text-lg lg:text-xl`
- Font : `font-sans`
- Color : `text-anthracite`
- Line Height : `leading-relaxed`
- Weight : `font-normal`

#### Texte en Gras
- Utilisation : `font-bold` pour mettre en évidence
- Exemples : Dates importantes, mots-clés, concepts

## 📐 Espacements

### Padding Vertical des Sections

| Breakpoint | Padding Vertical |
|-----------|------------------|
| Mobile (default) | `py-16` (4rem / 64px) |
| Small (≥640px) | `py-20` (5rem / 80px) |
| Medium (≥768px) | `py-24` (6rem / 96px) |
| Large (≥1024px) | `py-32` (8rem / 128px) |
| Extra Large (≥1280px) | `py-40` (10rem / 160px) |

**Pattern utilisé** : `py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40`

### Padding Horizontal

| Breakpoint | Padding Horizontal |
|-----------|-------------------|
| Mobile (default) | `px-4` (1rem / 16px) |
| Small (≥640px) | `px-6` (1.5rem / 24px) |
| Medium (≥768px) | `px-8` (2rem / 32px) |
| Large (≥1024px) | `px-12` (3rem / 48px) |

**Pattern utilisé** : `px-4 sm:px-6 md:px-8 lg:px-12`

### Largeur Maximum des Conteneurs

- Sections : `max-w-5xl` (1024px)
- Header : `max-w-6xl` (1152px)
- Centrage : `mx-auto`

### Espacements Personnalisés

| Classe | Valeur | Équivalent |
|--------|--------|------------|
| `space-18` | 4.5rem | 72px |
| `space-22` | 5.5rem | 88px |
| `space-26` | 6.5rem | 104px |
| `space-30` | 7.5rem | 120px |

## 📱 Breakpoints Responsive

| Nom | Taille | Utilisation |
|-----|--------|-------------|
| **Mobile** | `< 640px` | Smartphones |
| **Small (sm:)** | `≥ 640px` | Tablettes portrait |
| **Medium (md:)** | `≥ 768px` | Tablettes paysage |
| **Large (lg:)** | `≥ 1024px` | Desktops |
| **Extra Large (xl:)** | `≥ 1280px` | Grands écrans |

**Approche** : Mobile-first (design pour mobile d'abord, puis adaptation pour les écrans plus grands)

## 🎯 Style & Design

### Direction Artistique
**"Old Money Suisse"** - Style sobre, élégant et institutionnel

### Principes de Design
- **Minimaliste** : Design épuré, pas de surcharge
- **Élégant** : Typographie serif pour les titres
- **Institutionnel** : Crédibilité et confiance
- **Lisible** : Tailles de police généreuses, contrastes élevés
- **Accessible** : Focus visible, contraste conforme WCAG

### Éléments Visuels

#### Bordures
- **Séparateurs** : `border-t border-tableau-blue/20` (ligne fine, 20% d'opacité)
- **Header** : `border-b border-dm-red/30` (30% d'opacité)

#### Ombres & Effets
- **Header** : `backdrop-blur-sm` (flou d'arrière-plan subtil)
- **Cartes Équipe** : `bg-dm-red/[0.03]` (fond très léger)

#### Transitions
- **Durée standard** : `duration-200` (0.2s)
- **Type** : `transition-colors`, `transition-opacity`
- **Hover liens** : `opacity-80` (diminue l'opacité à 80%)

#### Accessibilité
- **Focus visible** : `outline-2 outline-offset-2 outline-dm-red`
- **Scroll smooth** : `scroll-smooth`

## 🔄 États & Interactions

### Liens
- **État normal** : `text-dm-red`
- **État hover** : `opacity-80` ou `text-dm-red hover:opacity-80`
- **Transition** : `transition-colors duration-200`

### Boutons
- **Focus** : `outline-2 outline-offset-2 outline-dm-red`
- **Aria labels** : Tous les boutons ont des labels accessibles

### Images
- **Aspect Ratio** : Conservé pour éviter les déformations
- **Object Fit** : `object-contain` (logos) ou `object-cover` (portraits)
- **Overflow** : `overflow-hidden` pour éviter les espaces blancs

## 📋 Classes Utilitaires Réutilisables

### Section Container
```css
.section-container {
  max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12
}
```

### Section Spacing
```css
.section-spacing {
  py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40
}
```

### Divider
```css
.divider {
  border-t border-tableau-blue/20 my-6 sm:my-8
}
```

### Text Large
```css
.text-large {
  text-base sm:text-lg md:text-xl
}
```

## 🎨 Exemples d'Utilisation

### Section Standard
```jsx
<section className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-ivory">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
    <h2 className="text-[40px] sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-dm-red mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-left font-normal tracking-tight">
      Titre de Section
    </h2>
    <p className="text-base sm:text-lg md:text-lg lg:text-xl text-anthracite leading-relaxed">
      Texte de contenu...
    </p>
  </div>
</section>
```

### Lien Standard
```jsx
<a href="#" className="text-dm-red hover:opacity-80 transition-colors duration-200">
  Lien
</a>
```

### Titre h3 (Sous-section)
```jsx
<h3 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-serif text-tableau-blue mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-normal tracking-wide">
  Sous-titre
</h3>
```

---

**Note** : Cette charte graphique garantit la cohérence visuelle sur tout le site DM Invest SA.


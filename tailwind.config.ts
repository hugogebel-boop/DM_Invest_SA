import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette DM Invest - 4 couleurs + blanc uniquement
        'dm-red': '#8E3638', // Rouge profond - signature (accents, titres, boutons, hover)
        'ivory': '#fcfbfe', // Fond principal (arrière-plans, sections)
        'anthracite': '#0d1c2e', // Anthracite - texte principal + contraste (paragraphes, navigation, titres sombres)
        'tableau-blue': '#1d395e', // Bleu du tableau - accents et harmonie
        'white': '#FFFFFF', // Blanc
      },
      fontFamily: {
        // Serif élégant pour les titres
        'serif': ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        // Sans-serif sobre pour le texte
        'sans': ['Inter', 'Helvetica Neue', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Tailles confortables pour 50-80 ans
        'base': ['18px', { lineHeight: '1.7' }],
        'lg': ['20px', { lineHeight: '1.7' }],
        'xl': ['24px', { lineHeight: '1.6' }],
        '2xl': ['30px', { lineHeight: '1.5' }],
        '3xl': ['36px', { lineHeight: '1.4' }],
        '4xl': ['48px', { lineHeight: '1.3' }],
      },
      spacing: {
        // Espacements généreux
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
}
export default config


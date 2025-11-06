/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        maroon: {
          900: '#3a0707',
          800: '#4a0a0a',
          700: '#6b0e0e',
          600: '#8b1717',
          500: '#a91f1f',
        },
        gold: {
          400: '#d4af37',
        },
        background: '#0f0b0b',
        text: '#ffffff',
        muted: '#e9e2df',
      },
      borderColor: {
        subtle: 'rgba(255,255,255,.12)',
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,.35)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
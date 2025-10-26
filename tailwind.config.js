/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.33)' },
          '80%, 100%': { opacity: '0' },
        },
        'glow': {
          'from': { boxShadow: '0 0 20px #3b82f6' },
          'to': { boxShadow: '0 0 30px #60a5fa, 0 0 40px #3b82f6' },
        },
      },
    },
  },
  plugins: [],
};
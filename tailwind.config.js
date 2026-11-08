/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#FDF2F4',
          100: '#FBE6E9',
          200: '#F5C2C9',
          300: '#EC93A1',
          400: '#DE5D73',
          500: '#C9304E',
          600: '#A71D3A',
          700: '#7E1229',
          800: '#58112C',
          900: '#4A0E17',
          950: '#2A060C',
        },
        gold: {
          50: '#FDFBF0',
          100: '#FAF6DE',
          200: '#F4EBBC',
          300: '#EDDC94',
          400: '#E5C967',
          500: '#D4AF37',
          600: '#B89228',
          700: '#94721D',
          800: '#77591A',
          900: '#644A18',
          950: '#39270B',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#FDFBF7',
          200: '#F8F5EE',
          300: '#EDE8DF',
          400: '#DFD8CC',
          500: '#CDC4B5',
        },
        navy: {
          800: '#141D3B',
          900: '#0A1128',
          950: '#050B1A',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(88, 17, 44, 0.3)',
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.35)',
      }
    },
  },
  plugins: [],
}


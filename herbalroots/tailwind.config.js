/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#183D2B',
          dark: '#112D20',
          light: '#23533B',
        },
        botanical: {
          DEFAULT: '#527A50',
          dark: '#416340',
          light: '#6E986C',
        },
        sage: {
          DEFAULT: '#DCE7D6',
          light: '#EBF1E7',
          dark: '#C2D3BB',
        },
        ivory: {
          DEFAULT: '#FAF7EF',
          dark: '#F5EFE0',
        },
        cream: {
          DEFAULT: '#F2EBDD',
          dark: '#E7DEC9',
        },
        terracotta: {
          DEFAULT: '#B86D4B',
          dark: '#9F5C3D',
          light: '#CE8461',
        },
        charcoal: '#252B25',
        muted: '#6D756B',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

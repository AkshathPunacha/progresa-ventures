/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFFFFF',
        ink: '#0F2A1F',
        sage: {
          DEFAULT: '#3F8F6B',
          dark: '#2F6E51',
          light: '#C9E4D4',
        },
        forest: {
          DEFAULT: '#0F2A1F',
          deep: '#081A12',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

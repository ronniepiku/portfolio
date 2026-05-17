/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{njk,md,js}', './.eleventy.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9edff',
          200: '#bce0ff',
          300: '#8ecdff',
          400: '#59b0ff',
          500: '#3b8eff',
          600: '#1f6bf5',
          700: '#1755e1',
          800: '#1946b6',
          900: '#1a3e8f',
          950: '#152757',
        },
        surface: {
          900: '#0f1117',
          800: '#161922',
          700: '#1e222e',
          600: '#272c3a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/templates/**/*.html',
    './src/partials/**/*.html',
    './es/**/*.html',
    './en/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'base': '#FAF8F4',
        'surface': '#FFFFFF',
        'surface-alt': '#F3EFE8',
        'border': '#E2DBD0',
        'border-light': '#EDE8DF',
        'text': '#1C1C1E',
        'text-secondary': '#6B6B6E',
        'text-muted': '#9A9A9D',
        'accent': '#0077CC',
        'accent-hover': '#005FA3',
        'accent-light': '#EBF3FA',
        'gold': '#B8944F',
        'gold-hover': '#A07E3F',
        'gold-light': '#F7F1E4',
        'dark': '#1C1C1E',
        'dark-surface': '#2A2A2E',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

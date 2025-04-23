/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'greenDark' : '#021512',
        'greenLight': '#E0EEE9',
        'accentGreen': '#558B6E',
      },
      fontFamily: {
        'spaceMono': ['"Space Mono"', 'monospace'],
        'helvetica': ['Helvetica', 'Ariel', 'sans serif'],
      },
      letterSpacing: {
        'custom': '0.5em',
        'customDesktop': '0.3em',
      },
    },
  },
  plugins: [],
}


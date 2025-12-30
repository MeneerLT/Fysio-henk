
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fyfit: {
          orange: '#ef5a24',
          dark: '#1a1a1a',
        }
      }
    },
  },
  plugins: [],
}

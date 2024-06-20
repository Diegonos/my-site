/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', 
        languageSelector: '#192542', 
        'primary-light': '#1e293b',
        'primary-lighter': '#4b5563',
      },
    },
  },
  plugins: [],
}


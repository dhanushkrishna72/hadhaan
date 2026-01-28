/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
    extend: {
      colors: {
        cream: '#fdfaf6',
        body: '#1c1c1c',
        footer: '#0e0e0e',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        'nomad-green': '#20633F',
      }
    },
    fontFamily: {
      nexonBold: ["nexonBold"],
      nexonLight: ["nexonLight"],
    },
  },
  plugins: [],
}
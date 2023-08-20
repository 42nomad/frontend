/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        'nomad-green': '#20633F',
        'nomad-sand': '#FFFAF2',
      }
    },
    fontFamily: {
      nexonBold: ["nexonBold"],
      nexonLight: ["nexonLight"],
    },
  },
  plugins: [],
}
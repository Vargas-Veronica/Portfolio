/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js", // Flowbite
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'], // fuente global si querés
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ]
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg",],
  theme: {
    extend: {
      aspectRatio: {
        '16/9': '16/9',
        '4/3': '4/3',
        '1/1': '1/1',
      },
    },
  },
  corePlugins:{
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}


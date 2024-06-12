const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}",
      './src/index.html',
    ],
    theme: {
        extend: {
          fontSize: {
            '2xs': '0.625rem'
          },
          colors: {
            primary: colors.blue,
            success: colors.emerald,
            error: colors.red,
            warning: colors.amber
          }
        },
    },
    plugins: [],
}

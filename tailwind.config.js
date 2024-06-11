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
          }
        },
    },
    plugins: [],
}

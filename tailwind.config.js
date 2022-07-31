/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { fontFamily: {
      Montserrat: ['Montserrat', "sans-serif"],
      RobotoC: ['Roboto', "sans-serif"],
      MonoRoboto:['Roboto Mono',"sans-serif"]
     }},
  },
  plugins: [    require('tailwindcss'),
  require('autoprefixer')],
}

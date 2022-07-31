/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
       fontFamily: {
      Montserrat: ['Montserrat', "sans-serif"],
      RobotoC: ['Roboto', "sans-serif"],
      MonoRoboto:['Roboto Mono',"sans-serif"]
     }},
   
      backgroundImage: theme => ({
       'heroback': "url('./imgs/background.png')",
      })
     
  },
  plugins: [    require('tailwindcss'),
  require('autoprefixer')],
}

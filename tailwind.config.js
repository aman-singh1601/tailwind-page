/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    
    extend: {
      fontSize:{
        tremor:{
          default:"600"
        }
      },
      colors: {
        tremor:{
          
          border:{
            DEFAULT:'#ffff'
          },
          content:{
            DEFAULT:'#b5b5ba',
            emphasis:'#c4bfbe',
            
          },
          background:{
            
          }
         
        }
       
       
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}


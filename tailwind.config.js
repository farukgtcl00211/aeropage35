/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container:'1320px'
      },
      fontFamily: {
        'pops': ['Poppins', 'sans-serif'],
        
      },
      fontFamily: {
        'rem': ['Barlow Semi Condensed', 'sans-serif'],
        
      },
      fontFamily: {
        'abee': ['ABeeZee', 'sans-serif;'],
        
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif;'],
        
      },
      
    },
  },
  plugins: [],
}

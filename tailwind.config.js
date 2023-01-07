/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
            "primary": "#bb9c36",
                    
            "secondary": "#f8f5b8",
                    
            "accent": "#51423b",
                    
            "neutral": "#000000",
                    
            "info": "#794328",
                    
            "success": "#36D399",
                    
            "warning": "#FBBD23",
                    
            "error": "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

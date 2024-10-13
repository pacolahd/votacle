const { default: daisyui } = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: 
          {
            
            "primary": "#a96bea",
                      
            "secondary": "#00c3ff",
                      
            "accent": "#0000ff",
                      
            "neutral": "#06100a",
                      
            "base-100": "#fff9f8",
                      
            "info": "#00ffff",
                      
            "success": "#00b300",
                      
            "warning": "#f36a00",
                      
            "error": "#c9203a",
          },
        },
      ],
    },

    // daisyui: {
    // themes: [
    //   {
    //     mytheme: {
          
    //         "primary": "#af00ff",
                      
    //         "secondary": "#007900",
                      
    //         "accent": "#00b9a1",
                      
    //         "neutral": "#110f0a",
                      
    //         "base-100": "#fcfcfc",
                      
    //         "info": "#00ecff",
                      
    //         "success": "#00994a",
                      
    //         "warning": "#ff9d00",
                      
    //         "error": "#ff949a",
    //       },
    //     },
    //   ],
    // },


    // daisyui: {
    // themes: [
    //   {
    //     mytheme: {
          
    //       "primary": "#8d00ff",
                    
    //       "secondary": "#0067ff",
                    
    //       "accent": "#007700",
                    
    //       "neutral": "#282a1f",
                    
    //       "base-100": "#fff7ff",
                    
    //       "info": "#00a1dd",
                    
    //       "success": "#00e7a0",
                    
    //       "warning": "#f68200",
                    
    //       "error": "#dd4c62",
    //       },
    //     },
    //   ],
    // },

    
  plugins: [require("daisyui"),],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./myCrm/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', '"Montserrat"', "sans-serif"],
        display: ['"Playfair Display"', "serif"],
      },
      animation: {
        "fade-in": "fadeIn 1.5s ease-in",
        "slide-in": "slideIn 1.2s cubic-bezier(0.4,0,0.2,1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  // La configuration DaisyUI est maintenant dans daisyui.config.js
}

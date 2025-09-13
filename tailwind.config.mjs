/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./myCrm/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4a6b4e", // vert doux
        secondary: "#e6c97a", // doré lumineux
        accent: "#bfa980", // ton terreux
        background: "#f5f5f5",
        text: "#333333",
      },
      fontFamily: {
        sans: ['"Inter"', '"Montserrat"', "sans-serif"],
        display: ['"Playfair Display"', "serif"],
      },
      backgroundImage: {
        "zen-gradient": "linear-gradient(135deg, #4a6b4e 0%, #e6c97a 100%)",
        "earth-gradient": "linear-gradient(120deg, #bfa980 0%, #e6c97a 100%)",
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
}

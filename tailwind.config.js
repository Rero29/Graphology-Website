/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.html",
    "./components/*.html",
    "./app/templates/*.html",
    "./js/*.js",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        PrimaryBG: "#f5e5d0",
        SecondaryBG: "#4F6547",
        textColor: "#F7CFB4",
      },
      fontFamily: {
        Koulen: ["Koulen", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};

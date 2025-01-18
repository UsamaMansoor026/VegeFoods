/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#82ae46",
        darkBg: "#1C2833",
        gray: "#808080",
        white: "#FFFAFA",
        black: "#242124",
      },

      screens: {
        xsm: { max: "500px" },
        sm: { max: "720px" },
        md: { max: "991px" },
      },

      fontFamily: {
        lora: ["Lora", "serif"],
        poppins: ["Poppins", "sans-serif"],
        amaticsSC: ["Amatic SC", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

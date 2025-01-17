/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#82ae46",
        "pale-gold": "#dcc698",
        "light-skyblue": "#a2d1e1",
        "light-olive": "#dcd691",
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
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

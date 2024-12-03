/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Exo2: ["Exo 2", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          400: "#0EBE60",
          500: "#0DA856",
          600: "#0B8E48",
        },
        secondary: {
          400: "#863E37",
          500: "#6A312B",
          600: "#5C2B26",
        },
        body: "#5B5B5B",
      }
    },
  },
  plugins: [],
}

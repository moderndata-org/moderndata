/** @type {import('tailwindcss').Config} */
export default {
  content: [],
    theme: {
    extend: {
      colors: {
        main: "#FFBF00",
        secondry: "#141516"
      },
      screens: {
        mobile: {max: "650px"},
        tablet: {max: "768px"},
        large: {max: "950px"}
      }
    }
  },
  screens: {},
  plugins: []
};

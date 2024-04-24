/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#243A66",
        secondary: "#3173B0",
        foundationgray: "#F7F8F8",
        foundationwhite: "#FCFBFB",
        foundationblack: "#3E3D3D",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        merri: ["Merriweather", "sans-serif"],
      },
      boxShadow: {
        headershadow: "0px 1px 4px 0px rgba(36, 58, 102, 0.05)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        serviceshadow: "1px 1px 4px 0px #3173B01A",
        serviceshadow2: "-1px -1px 4px 0px #3173B01A",
      },
    },
  },
  plugins: [],
};

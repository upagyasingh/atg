/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "700": {
          max : "700px"
        },
        "1150": {
          max : "1150px"
        }
      }
    },
  },
  plugins: [],
}
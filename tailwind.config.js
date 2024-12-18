/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        test: {
          100: "#EA6365",
          DEFAULT: "#FA7275",
        },
        red: "#FF7474",
      },
    },
  },
  plugins: [],
};

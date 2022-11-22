/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minWidth: {
      def: "295px",
    },
    fontFamily: {
      display: ["Oswald"],
      description: ["Lato"],
    },
    extend: {},
  },
  plugins: [],
};

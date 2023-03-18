/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

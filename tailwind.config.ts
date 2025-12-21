/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F9F7F7",
        "light-blue": "#DBE2EF",
        "primary-blue": "#3F72AF",
        "dark-navy": "#112D4E",
      },
    },
  },
  plugins: [],
};
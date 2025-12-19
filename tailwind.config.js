/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Sabse safe option ye hai (ye poore src folder ko check karega)
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
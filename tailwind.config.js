/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: " 0 10px 80px rgba(20, 9, 9, 0.21), 0 41.7776px 33.4221px rgba(0,0,0,.151), 0 22.3363px 17.869px rgba(0,0,0,.125), 0 12.5216px 10.0172px rgba(0,0,0,.105), 0 6.6501px 5.32008px rgba(0,0,0,.085), 0 2.76726px 2.21381px rgba(0,0,0,.059)",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};

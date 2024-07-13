/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.css", "./src/**/*.js"],
  theme: {
    extend: {
      screens: {
        mobile: "430px",
        tablet: "1024px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};

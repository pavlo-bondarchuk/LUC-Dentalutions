/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.css", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#011C79",
        buttonBg: "#0237F1",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
      },
      screens: {
        mobile: "430px",
        tablet: "1024px",
        desktop: "1248px",
      },
      boxShadow: {
        header: "0 0 8px 0 rgba(1, 28, 121, 0.08)",
      },
      backdropBlur: {
        header: "16px",
      },
    },
  },
  plugins: [],
};

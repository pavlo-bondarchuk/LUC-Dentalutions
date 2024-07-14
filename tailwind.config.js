/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.css", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        neutral: {
          10: "#F7F7F7",
          20: "#CCCCCC",
          50: "#808080",
          100: "#000000",
          white: "#FFFFFF",
        },
        blue: {
          10: "#E6F0FB",
          20: "#CCD7F6",
          50: "#8098F0",
          100: "#0237F1",
          200: "#011C79",
        },
        mint: {
          10: "#EDFFFE",
          20: "#DBFFFC",
          50: "#A8FFEF",
          100: "#4DF4E9",
          200: "#01A399",
        },
        purple: {
          10: "#F0E7FB",
          20: "#E1CFFF",
          50: "#8357EC",
          100: "#7D0ED9",
          200: "#320764",
        },
        green: {
          10: "#E7FFEF",
          20: "#DEFFEA",
          50: "#A8DBBA",
          100: "#5BD776",
          200: "#145222",
        },
        yellow: {
          10: "#FFFEF8",
          20: "#FFF6D6",
          50: "#FFEB74",
          100: "#F4B534",
          200: "#805500",
        },
        red: {
          10: "#FFFEFF",
          20: "#FFDFD6",
          50: "#FF8A9A",
          100: "#FF5243",
          200: "#990012",
        },
        surface: {
          primary: "#011C79",
          secondary: "#FFFFFF",
          highlight: "#01A399",
          disabled: "#808080",
        },
        content: {
          primary: "#011C79",
          secondary: "#FFFFFF",
          disabled: "#808080",
        },
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
        serif: ["Noto Serif", "serif"],
      },
      fontSize: {
        hero: ["48px", "56px"],
        h2: ["40px", "48px"],
        h3: ["32px", "40px"],
        h4: ["28px", "36px"],
        h5: ["24px", "32px"],
        h6: ["20px", "24px"],
        "body-lg": ["20px", "28px"],
        "body-md": ["16px", "24px"],
        "body-sm": ["14px", "20px"],
        "body-xs": ["12px", "16px"],
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

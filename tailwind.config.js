/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#303030",
      },
      secondary: {
        DEFAULT: "#CA9277",
        light: "#FFF4EB",
      },

      black: {
        DEFAULT: "#000000",
        20: "#00000033",
      },
    },
    extend: {
      fontSize: {
        xs: "0.75rem", // 0.75
        sm: "0.875rem", // 0.875
        base: "1rem", // 1
        md: "1.125rem", // 1
        lg: "1.25rem", // 1.25
        xl: "1.5rem", // 1.5
        "2xl": "1.875rem", // 1.875
        "3xl": "2.25rem", // 2.25
        "4xl": "3rem", // 3
        "5xl": "4rem", // 4
        "6xl": "4.5rem", // 4.5
      },
    },
  },
  plugins: [],
};

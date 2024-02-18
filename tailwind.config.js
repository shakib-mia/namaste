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
      white: "#ffffff",
      transparent: "#00000000",
    },
    extend: {
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        md: "1.125rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "1.875rem",
        "3xl": "2.25rem",
        "4xl": "3rem",
        "5xl": "4rem",
        "6xl": "4.5rem",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      // You can add or override Tailwind CSS utility classes and styles here
      colors: {
        background: "#1A1B23",
        surface: "#282A37",
        "surface-50": "#282A3750",
        button: "#42BBFF",
        black: "#323645",
        textWhite: "#C0C0C8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

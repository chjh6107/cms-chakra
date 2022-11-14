/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "/index.html"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#3A57E8",
        light: "#C4CCF8",
        dark: "#0048B2",
        veryDark: "#001F4D",
      },
      text: {
        DEFAULT: "#232D42",
        second: "#8A92A6",
        third: "#ADB5BD",
      },
      bg: {
        DEFAULT: "#FFFFFF",
        second: "#E9ECEF",
        third: "#E3E3E3",
      },
      success: {
        DEFAULT: "#1AA053",
        light: "#D5EBDF",
        dark: "#409900",
      },
      error: {
        DEFAULT: "#C03221",
        light: "#F2D6D3",
        dark: "#41110B",
      },
      warning: {
        DEFAULT: "#F16A1B",
        light: "#FCE1D1",
        dark: "#B24400",
      },
    },
    extend: {},
  },
  corePlugins: { preflight: false },
  plugins: [],
};

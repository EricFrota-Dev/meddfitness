/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        1: "#FFFFFF",
        2: "#3EC1C9",
        3: "#1A3D47",
        4: "#142731",
        5: "#0E121C",
        6: "#000000",
      },

      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        body: {
          backgroundColor: theme("colors.5"),
          color: theme("colors.1"),
        },
        h1: {
          fontSize: "1.5rem",
          fontWeight: "700",
        },
        h2: {
          fontSize: "1.25rem",
          fontWeight: "500",
        },
        h3: {
          fontSize: "1rem",
          fontWeight: "300",
        },
        span: {
          color: theme("colors.2"),
          textShadow: theme("colors.2"),
        },
      });
    },
  ],
};

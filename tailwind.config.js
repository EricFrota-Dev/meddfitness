/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Agora inclui corretamente todos os arquivos dentro de src
  ],
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
          fontSize: "2rem",
          fontWeight: "900",
        },
        h2: {
          fontSize: "1.75rem",
          fontWeight: "semibold",
        },
        button: {
          padding: "0.75rem 1.5rem",
          backgroundColor: theme("colors.primary"),
          color: "white",
          borderRadius: "0.5rem",
          fontWeight: "bold",
          transition: "background-color 0.3s",
        },
        "button:hover": {
          backgroundColor: theme("colors.secondary"),
        },
        span: {
            color:theme("colors.2")
        }
      });
    },
  ],
};

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      desktop1: "1280px",
      desktop2: "1366px",
      desktop3: "1920px",
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      cursive: ["Lilita One", "cursive"],
    },
    extend: {
      colors: {
        "azul-escuro": "#000065",
        "vermelho-laranja": "#fd1d1d",
        rosa: "#fe214f",
        salmao: "#e66464",
        "rosa-claro": "#ffddd6",
        amarelo: "#feb822",
        "cinza-escuro": "#505050",
        "cinza-claro": "#8e8e8e",
        "quase-branco": "#fcfbfb",
      },
    },
  },
  plugins: [],
};

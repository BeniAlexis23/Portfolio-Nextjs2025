export default {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1c1c22",
          accent: {
            DEFAULT: "#00ff99",
            hover: "#00e187",
          },
        },
        fontFamily: {
          sans: ["var(--font-jetbrainsMono)", "sans-serif"],
          mono: ["JetBrains Mono", "monospace"],
        },
      },
    },
    plugins: [],
  };
  
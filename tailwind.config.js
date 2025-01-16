/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: {
          primary: "#FFFFFF",
          secondary: "#808080",
          accent: "#003c49",
        },
        background: {
          primary: "#0C0C0C",
          secondary: "#1B1B1C",
          accent: "#003c49",
        },
      },
    },
  },
  plugins: [],
};

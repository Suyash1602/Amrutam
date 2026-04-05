/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A643C",
        lightBg: "#FFF6DD",
        sectionBg: "#FFF8E6",
        accent: "#FFE6A5",
        textDark: "#0C0C0C",
        textGrey: "#666666",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        container: "1275px",
      },
    },
  },
  plugins: [],
};

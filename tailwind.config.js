/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vt323: ["VT323", "monospace"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        // xxs: "344px",
        xs: "344px", // Orginially 360px
        sm: "414px",
        md: "768px",
        lg: "1025px",
        xl: "1280px",
        // "2xl": "1536px",
      },
    },
  },
  plugins: [],
};

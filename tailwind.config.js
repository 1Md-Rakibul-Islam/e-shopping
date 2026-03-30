/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  extend: {
    colors: {
      background: "var(--background)",
      surface: "var(--surface)",
      "surface-hover": "var(--surface-hover)",
      primary: "#1882FF",
      "primary-hover": "var(--primary-hover)",
      "text-main": "var(--text-main)",
      "text-muted": "var(--text-muted)",
      border: "var(--border)",
      error: "var(--error)",
      neutral: {
        700: "var(--neutral-700)",
        900: "var(--neutral-900)",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      murecho: ["Murecho", "sans-serif"],
    },
  },
  plugins: [],
};

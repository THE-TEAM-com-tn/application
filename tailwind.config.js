/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#259d79",
        accent: "#9d253f",
        secondary: "#79259d",
        background: "#f4fdfb",
        textDark: "#1a1a1a",
        textLight: "#f5f5f5",
      },
    },
  },
  plugins: [],
};

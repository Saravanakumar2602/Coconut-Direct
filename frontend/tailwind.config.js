/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E7D32",
        secondary: "#81C784",
        accent: "#FBC02D",
        background: "#F9FAF9",
      },
    },
  },
  plugins: [],
};

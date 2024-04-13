/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "meme-yellow": "#f4f1bb",
        "meme-header": "#f2ed8e",
        "answer-blue": "#35C2C1",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif", "sans-francisco"],
      },
    },
  },

  plugins: [],
};

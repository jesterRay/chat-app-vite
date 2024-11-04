/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#6E899D",
        "secondary": "#A5D8FF",
        "neutral": "#7AA5C6",
        "dark": "#36393b",
      },
    },
  },
  plugins: [],
}


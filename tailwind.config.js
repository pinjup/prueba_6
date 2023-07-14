/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'ubuntu': ["'Ubuntu'", 'sans-sefif']
    },
    screens : {
      'laptop': '1440px',
    }
  },
  plugins: [],
}
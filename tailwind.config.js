/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#2563EB',
        mainDark: '#00cdff',
        navy: '#0a192f',
        lightNavy: '#112240',
        slate: '#8892b0',
        lightSlate: '#a8b2d1',
        lightestSlate: '#ccd6f6',
      },
    },
  },
  plugins: [],
}

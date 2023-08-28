/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          700: '#6941C6',
        },
        'gray': {
          600: '#475467',
          900: '#101828',
          200: '#eaecf0',
          100: '#F4F6F8',
          50: '#F9FAFB'
        },
      }
    },
  },
  plugins: [],
}
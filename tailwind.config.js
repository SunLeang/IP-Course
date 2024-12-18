/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#3BB77E',
        gray: '#B6B6B6',
      },
    },
  },
  plugins: [],
}

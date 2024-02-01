/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
        'OpenSans': ['Open Sans', 'sans-serif']
      },
    },
    backgroundImage: {
      'house-img': "url('./assets/house.jpg')"
    }
  },
  plugins: [],
}
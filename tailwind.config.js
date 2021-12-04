module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        raleway: ['raleway'],
        rubik: ['rubik'],
        inter: ['inter']
      },
      colors: {
        'gray-primary': '#1F2937',
        'red-primary': '#D13639',
        'blue-primary': '#2A2D41',
        'blue-secondary': '#212332'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

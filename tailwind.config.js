module.exports = {
  content: [
    './**/*.{liquid,js,css,json}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff5f4',
          100: '#fbe8e6',
          200: '#f4c9c7',
          300: '#ecaaab',
          400: '#e38786',
          500: '#d96c6f',
          600: '#c35256',
          700: '#9f3f41',
          800: '#7b2f31',
          900: '#57211f'
        },
        accent: '#f6dfdc',
        neutral: {
          50: '#fdf6f4',
          100: '#f7ebe8',
          200: '#ebd6d2',
          300: '#d8c2bd',
          400: '#b9a39e',
          500: '#8f7771',
          600: '#6f5c59',
          700: '#524442',
          800: '#3a312f',
          900: '#241d1c'
        }
      }
    },
  },
  plugins: [],
};

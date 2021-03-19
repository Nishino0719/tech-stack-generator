module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      colors: { 'accent-1': '#333' },
      width: {
        'w-figure': '56.25rem'
      },
      height: {
        'h-figure': '29.53125rem'
      }
    }
  },
  variants: { extend: {} },
  plugins: []
}

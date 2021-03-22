module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      colors: { 'accent-1': '#333' },
      width: {
        'badge':'4.5rem',
        'w-figure': '56.25rem',
        'lg-figure': '45rem',
        'sm-figure': '33.75rem',
        'xs-figure': '22.5rem'
      },
      height: {
        'badge': '4.5rem',
        'h-144': '36rem',
        'h-figure': '29.53125rem',
        'lg-figure': '23.625rem',
        'sm-figure': '17.71875rem',
        'xs-figure': '11.8125rem'
      }
    }
  },
  variants: { extend: {} },
  plugins: []
}

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
      'gradient-end': '#3b82f6',
      'gradient-mid': '#c53bf6',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

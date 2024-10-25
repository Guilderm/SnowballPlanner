export default {
  content: ['./app/**/*.{vue,js,ts}', './server/**/*.{js,ts}'],
  theme: {
    extend: {
      // Your custom theme configurations
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}

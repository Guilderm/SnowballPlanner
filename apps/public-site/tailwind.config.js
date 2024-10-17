// C:\Repository\DebtFreePlanner\apps\public-site\tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './ui/components/**/*.{vue,js,ts}',
    './ui/layouts/**/*.{vue,js,ts}',
    './ui/pages/**/*.{vue,js,ts}',
    './ui/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Example: blue color
        accent: '#10B981', // Example: green color
        neutral: '#6B7280', // Example: gray color
      },
    },
  },
  plugins: [],
}

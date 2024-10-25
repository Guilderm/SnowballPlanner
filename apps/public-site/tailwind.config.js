// apps/public-site/tailwind.config.js

export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.{vue,js,ts}',
    './app/pages/**/*.{vue,js,ts}',
    './app/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Indigo Blue
        secondary: '#1F2937', // Charcoal Gray
        accent: '#10B981', // Emerald Green
        neutral: '#6B7280', // Cool Gray
        success: '#16A34A', // Green
        warning: '#F59E0B', // Amber
        danger: '#DC2626', // Red
        info: '#3B82F6', // Blue
        background: '#F3F4F6', // Light Gray
        surface: '#FFFFFF', // White
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}

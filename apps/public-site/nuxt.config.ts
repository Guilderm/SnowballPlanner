// nuxt.config.ts

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/style/global.css'],

  // PostCSS Configuration
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
    // Optional: Configure PostCSS preset options if needed
    // preset: {
    //   autoprefixer: {
    //     grid: true,
    //   },
    // },
  },

  // Additional Nuxt Configurations (if any)
})

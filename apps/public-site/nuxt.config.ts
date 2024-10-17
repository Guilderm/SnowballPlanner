// C:\Repository\DebtFreePlanner\apps\public-site\nuxt.config.ts

import { defineNuxtConfig } from 'nuxt'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  rootDir: 'ui/', // Specifies that the 'ui' folder is the root of the Nuxt app
  css: ['@/assets/style/global.css'], // Ensure the path is correct relative to 'ui/'

  app: {
    head: {
      title:
        'DebtFreePlanner - Strategically Plan Your Journey to a Debt-Free Living',
      meta: [
        {
          name: 'description',
          content: 'Strategically Plan Your Journey to a Debt-Free Living.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, // Correct favicon path
      ],
    },
  },

  compatibilityDate: '2024-10-17', // Future-proofing with compatibility date

  modules: [
    '@nuxtjs/tailwindcss', // Include Tailwind CSS module
  ],

  // Other configurations can be added here as needed
})

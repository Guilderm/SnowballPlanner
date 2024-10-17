// C:\Repository\DebtFreePlanner\apps\public-site\nuxt.config.ts

export default defineNuxtConfig({
  srcDir: 'ui/', // Use srcDir instead of rootDir
  css: ['@/assets/style/global.css'],

  app: {
    head: {
      title:
        'DebtFreePlanner - Strategically Plan Your Journey to a Debt-Free Living',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Strategically Plan Your Journey to a Debt-Free Living.',
        },
        {
          name: 'author',
          content: 'Guilder W. Milliner',
        },
        {
          name: 'keywords',
          content:
            'Debt management, Debt repayment, Financial planning, Multicurrency support',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, // Ensure favicon exists in ui/public/favicon.ico
      ],
    },
  },

  modules: ['@nuxtjs/tailwindcss'], // Include Tailwind CSS module
  devtools: { enabled: true },
  compatibilityDate: '2024-10-17',
  tailwindcss: {
    viewer: true,
  },
  nitro: {
    logLevel: 4, // 0: none, 1: error, 2: warn, 3: info, 4: debug
  },
})

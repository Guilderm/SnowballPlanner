import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  srcDir: 'ui/',
  css: [
    '@nuxtjs/tailwindcss/base',
    '@nuxtjs/tailwindcss/components',
    '@nuxtjs/tailwindcss/utilities',
  ],

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
        { name: 'author', content: 'Guilder W. Milliner' },
        {
          name: 'keywords',
          content:
            'Debt management, Debt repayment, Financial planning, Multicurrency support',
        },
        // Open Graph
        { property: 'og:title', content: 'DebtFreePlanner' },
        {
          property: 'og:description',
          content: 'Strategically Plan Your Journey to a Debt-Free Living.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://DebtFreePlanner.app' },
        { property: 'og:image', content: '/images/coming-soon-background.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://WWW.DebtFreePlanner.app' },
      ],
    },
  },

  modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag'],

  gtag: {
    enabled: process.env.NODE_ENV !== 'development',
    id: process.env.GOOGLE_GTAG_ID as string,
    config: {
      page_title: 'DebtFreePlanner',
      anonymize_ip: false,
      send_page_view: true,
      cookie_domain: 'DebtFreePlanner.app',
    },
    initCommands: [
      [
        'consent',
        'default',
        {
          ad_user_data: 'granted',
          ad_personalization: 'granted',
          ad_storage: 'granted',
          analytics_storage: 'granted',
        },
      ],
    ],
  },

  devtools: { enabled: process.env.NODE_ENV === 'development' },
  compatibilityDate: '2024-10-17',

  nitro: {
    logLevel: process.env.NODE_ENV === 'development' ? 4 : 2, // 0: none, 1: error, 2: warn, 3: info, 4: debug
  },

  plugins: ['~/plugins/auth0.client.ts'],

  runtimeConfig: {
    public: {
      auth0Domain: process.env.AUTH0_DOMAIN,
      auth0ClientId: process.env.AUTH0_CLIENT_ID,
      googleGtagId: process.env.GOOGLE_GTAG_ID,
    },
    // Private variables goes here.
  },

  typescript: {
    strict: true,
    typeCheck: false, // Temporarily set to false
  },

  hooks: {
    ready: () => {
      console.log('AUTH0_DOMAIN:', process.env.AUTH0_DOMAIN)
      console.log('AUTH0_CLIENT_ID:', process.env.AUTH0_CLIENT_ID)
      console.log('GOOGLE_GTAG_ID:', process.env.GOOGLE_GTAG_ID)
    },
  },
})

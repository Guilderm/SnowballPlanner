import { defineNuxtConfig } from 'nuxt/config'
import * as dotenv from 'dotenv'
import * as path from 'path'

// Load .env from the monorepo root
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

export default defineNuxtConfig({
  srcDir: 'ui/',
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
        { name: 'author', content: 'Guilder W. Milliner' },
        {
          name: 'keywords',
          content:
            'Debt management, Debt repayment, Financial planning, Multicurrency support',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-gtag', // Add the nuxt-gtag module
  ],

  'nuxt-gtag': {
    id: process.env.GOOGLE_GTAG_ID, // Your GA Measurement ID from .env
    config: {
      anonymize_ip: true, // Optional: Anonymize IP addresses
      send_page_view: false, // Disable automatic page view tracking
    },
    debug: process.env.NODE_ENV !== 'production', // Enable debug in development
    disableAutoPageTrack: false, // Enable automatic page view tracking (if desired)
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-10-17',

  nitro: {
    logLevel: 4, // 0: none, 1: error, 2: warn, 3: info, 4: debug
  },

  plugins: [
    '~/plugins/auth0.client.ts',
    // Removed the custom GA plugin
  ],

  runtimeConfig: {
    public: {
      auth0Domain: process.env.AUTH0_DOMAIN,
      auth0ClientId: process.env.AUTH0_CLIENT_ID,
      // googleGtagId is optional here as it's handled by nuxt-gtag
    },
  },

  typescript: {
    strict: true,
    typeCheck: false, // Set to true once everything is working
  },

  hooks: {
    ready: () => {
      console.log('AUTH0_DOMAIN:', process.env.AUTH0_DOMAIN)
      console.log('AUTH0_CLIENT_ID:', process.env.AUTH0_CLIENT_ID)
    },
  },
})

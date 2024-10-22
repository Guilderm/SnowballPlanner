// apps\public-site\nuxt.config.ts

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

  modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag'],

  gtag: {
    enabled: process.env.NODE_ENV !== 'development',
    id: process.env.GOOGLE_GTAG_ID,
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

  devtools: { enabled: true },
  compatibilityDate: '2024-10-17',

  nitro: {
    logLevel: 4, // 0: none, 1: error, 2: warn, 3: info, 4: debug
  },

  plugins: ['~/plugins/auth0.client.ts'],

  runtimeConfig: {
    public: {
      auth0Domain: process.env.AUTH0_DOMAIN,
      auth0ClientId: process.env.AUTH0_CLIENT_ID,
    },
  },

  typescript: {
    strict: true,
    typeCheck: false, // Temporarily set to false
  },

  hooks: {
    ready: () => {
      console.log('AUTH0_DOMAIN:', process.env.AUTH0_DOMAIN)
      console.log('AUTH0_CLIENT_ID:', process.env.AUTH0_CLIENT_ID)
    },
  },
})

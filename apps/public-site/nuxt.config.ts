// apps\public-site\nuxt.config.ts

import { defineNuxtConfig } from 'nuxt/config'
import * as dotenv from 'dotenv'
import * as path from 'path'

const siteDescription = 'Plan Your Journey to a Debt-Free Living.'
const siteURL = 'https://www.DebtFreePlanner.app'
const ogImage = '/images/coming-soon-background.jpg'
const siteTitle = 'DebtFreePlanner - ' + siteDescription
const twitterCardType = 'summary_large_image'

// Load .env from the monorepo root
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

export default defineNuxtConfig({
  srcDir: 'app/',

  modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag'],

  app: {
    head: {
      title: siteTitle,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: siteDescription },
        { name: 'author', content: 'Guilder W. Milliner' },
        {
          name: 'keywords',
          content: 'Debt management, Debt repayment, Financial planning',
        },
        // Open Graph / Facebook / LinkedIn
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: siteDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: siteURL },
        { property: 'og:image', content: siteURL + ogImage },
        { property: 'og:site_name', content: 'DebtFreePlanner' },
        { property: 'og:locale', content: 'en_US' },
        // Twitter
        { name: 'twitter:card', content: twitterCardType },
        { name: 'twitter:title', content: siteTitle },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:image', content: siteURL + ogImage },
        { name: 'twitter:site', content: '@YourTwitterHandle' }, // Replace with your Twitter handle
        // Additional Tags
        { name: 'theme-color', content: '#317EFB' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: siteURL },
      ],
    },
  },

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
  compatibilityDate: '2024-10-23',

  nitro: {
    logLevel: process.env.NODE_ENV === 'development' ? 4 : 2, // 0: none, 1: error, 2: warn, 3: info, 4: debug
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
      console.log('GOOGLE_GTAG_ID:', process.env.GOOGLE_GTAG_ID)
    },
  },
})

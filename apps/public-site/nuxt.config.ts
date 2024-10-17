// C:\Repository\DebtFreePlanner\apps\public-site\nuxt.config.ts

export default defineNuxtConfig({
  rootDir: 'ui/', // Specifies that the 'ui' folder is the root of the Nuxt app
  css: ['@/assets/style/global.css'], // Ensure the path is correct relative to 'ui/'

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
        // Optional: Add keywords for SEO
        {
          name: 'keywords',
          content:
            'Debt management, Debt repayment, Financial planning, Multicurrency support',
        },
        // Optional: Open Graph meta tags for better social media integration
        {
          property: 'og:title',
          content:
            'DebtFreePlanner - Strategically Plan Your Journey to a Debt-Free Living',
        },
        {
          property: 'og:description',
          content:
            'Manage and accelerate your debt repayment plans with DebtFreePlanner.',
        },
        {
          property: 'og:image',
          content: '/images/og-image.png', // Ensure this image exists in your static assets
        },
        {
          property: 'og:url',
          content: 'https://yourdomain.com', // Replace with your actual domain
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, // Correct favicon path
      ],
    },
  },

  compatibilityDate: '2024-10-17', // Future-proofing with compatibility date

  modules: ['@nuxtjs/tailwindcss'], // Include Tailwind CSS module

  // Other configurations can be added here as needed
})

// apps/public-site/ui/plugins/auth0.client.ts

import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { createAuth0 } from '@auth0/auth0-vue'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  // Debugging: Confirm the plugin is loaded
  console.log('Initializing Auth0 plugin')

  nuxtApp.vueApp.use(
    createAuth0({
      domain: config.public.auth0Domain,
      clientId: config.public.auth0ClientId,
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
      cacheLocation: 'localstorage', // Optional: Persist tokens in local storage
      useRefreshTokens: true, // Optional: Enable refresh tokens
    })
  )
})

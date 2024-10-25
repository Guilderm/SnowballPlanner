// apps\public-site\app\middleware\auth.ts

import { defineNuxtRouteMiddleware } from '#app'
import { useAuth0 } from '@auth0/auth0-vue'

export default defineNuxtRouteMiddleware(() => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0()

  if (isLoading.value) {
    // Optionally, you can return here to wait for the loading to finish
    return
  }

  if (!isAuthenticated.value) {
    loginWithRedirect()
  }
})

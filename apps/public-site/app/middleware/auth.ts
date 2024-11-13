// apps\public-site\app\middleware\auth.ts

import { defineNuxtRouteMiddleware } from "nuxt/app";
import { useAuth0 } from "@auth0/auth0-vue";

export default defineNuxtRouteMiddleware(() => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading.value) {
    return;
  }

  if (!isAuthenticated.value) {
    loginWithRedirect();
  }
});

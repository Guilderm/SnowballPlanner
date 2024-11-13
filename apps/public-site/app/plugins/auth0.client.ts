// apps\public-site\app\plugins\auth0.client.ts

import { defineNuxtPlugin, useRuntimeConfig } from "nuxt/app";
import { createAuth0 } from "@auth0/auth0-vue";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  nuxtApp.vueApp.use(
    createAuth0({
      domain: config.public.auth0Domain,
      clientId: config.public.auth0ClientId,
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  );
});

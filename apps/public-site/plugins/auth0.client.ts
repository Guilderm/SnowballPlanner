// apps/public-site/app/plugins/auth0.client.ts

import { defineNuxtPlugin, useRuntimeConfig } from "nuxt/app";
import { createAuth0 } from "@auth0/auth0-vue";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  if (
    typeof config.public.auth0Domain === "string" &&
    typeof config.public.auth0ClientId === "string"
  ) {
    const domain: string = config.public.auth0Domain;
    const clientId: string = config.public.auth0ClientId;

    nuxtApp.vueApp.use(
      createAuth0({
        domain,
        clientId,
        authorizationParams: {
          redirect_uri: window.location.origin,
        },
      }),
    );
  } else {
    throw new Error("Invalid types for domain or clientId");
  }
});

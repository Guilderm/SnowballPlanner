// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  buildDir: "dist/nuxt-vanella-app",

  hooks: {
    ready: () => {
      console.log('App is starting...');
    },
  },
});

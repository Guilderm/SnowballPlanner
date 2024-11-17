// File: C:/Repository/DebtFreePlanner/apps/pwa-client/nuxt.config.ts

import { defineNuxtConfig } from "nuxt/config";
import type { NuxtConfig } from "nuxt/schema";
import * as dotenv from "dotenv";
import * as path from "path";

// Load .env from the monorepo root
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const config: NuxtConfig = {
  // Server configuration
  devServer: {
    port: parseInt(process.env.PWA_CLIENT_PORT ?? "3200", 10),
  },

  // Modules configuration
  modules: ["@nuxtjs/tailwindcss", "nuxt-gtag"],

  // Enable devtools in development mode
  devtools: { enabled: process.env.NODE_ENV === "development" },

  // Compatibility date for Nuxt
  compatibilityDate: "2024-10-23",

  // Nitro configuration for server-side rendering and deployment
  nitro: {
    logLevel: process.env.NODE_ENV === "development" ? 4 : 2, // 0: none, 1: error, 2: warn, 3: info, 4: debug
  },

  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: true,
  },

  hooks: {
    ready: () => {
      console.log("pwa-client is starting...");
    },
  },
};

export default defineNuxtConfig(config);

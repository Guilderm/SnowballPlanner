// apps\public-site\nuxt.config.ts

import { defineNuxtConfig } from "nuxt/config";
import type { NuxtConfig } from "nuxt/schema";
import * as dotenv from "dotenv";
import * as path from "path";

// Load .env from the monorepo root
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const config: NuxtConfig = {
  devServer: {
    port: parseInt(process.env.PWA_CLIENT_PORT ?? "3200", 10),
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-gtag"],

  devtools: { enabled: process.env.NODE_ENV === "development" },
  compatibilityDate: "2024-10-23",

  nitro: {
    logLevel: process.env.NODE_ENV === "development" ? 4 : 2, // 0: none, 1: error, 2: warn, 3: info, 4: debug
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },
};

export default defineNuxtConfig(config);

// apps/public-site/types/nuxt-config.d.ts

import { NuxtConfig as OriginalNuxtConfig } from 'nuxt/schema'

// Extend Nuxt's type definitions to include custom properties
declare module 'nuxt/schema' {
  // Define the structure for the `app.head` property
  interface AppHeadMeta {
    charset?: string
    name?: string
    content?: string
  }

  interface AppHeadLink {
    rel: string
    type?: string
    href: string
  }

  interface AppHeadConfig {
    title?: string
    meta?: AppHeadMeta[]
    link?: AppHeadLink[]
  }

  interface AppConfig {
    head?: AppHeadConfig
  }

  // Define the structure for the `gtag` property
  interface GtagModuleOptions {
    enabled?: boolean
    id?: string
    config?: {
      page_title?: string
      anonymize_ip?: boolean
      send_page_view?: boolean
      cookie_domain?: string
    }
    initCommands?: Array<
      [
        command: string,
        arg1: string,
        consentParams: {
          ad_user_data?: 'granted' | 'denied'
          ad_personalization?: 'granted' | 'denied'
          ad_storage?: 'granted' | 'denied'
          analytics_storage?: 'granted' | 'denied'
          wait_for_update?: number
        },
      ]
    >
  }

  // Define the structure for the `nitro` property
  interface NitroConfig {
    logLevel?: number
  }

  // Define the structure for `runtimeConfig.public`
  interface RuntimeConfigPublic {
    auth0Domain?: string
    auth0ClientId?: string
  }

  interface RuntimeConfig {
    public?: RuntimeConfigPublic
  }

  // Define the structure for the `typescript` property
  interface TypescriptConfig {
    strict?: boolean
    typeCheck?: boolean
  }

  // Define the structure for the `hooks` property
  interface HooksConfig {
    ready?: () => void
  }

  // Extend the original NuxtConfig with custom properties
  interface NuxtConfig extends OriginalNuxtConfig {
    srcDir?: string
    css?: string[]
    app?: AppConfig
    modules?: string[]
    gtag?: GtagModuleOptions
    devtools?: { enabled: boolean }
    compatibilityDate?: string
    nitro?: NitroConfig
    plugins?: string[]
    runtimeConfig?: RuntimeConfig
    typescript?: TypescriptConfig
    hooks?: HooksConfig
  }
}

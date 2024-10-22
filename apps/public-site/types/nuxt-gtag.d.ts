// apps/public-site/types/nuxt-gtag.d.ts

// Define types for Gtag commands
type ConsentArg = 'update' | 'default'
type ConsentParams = {
  ad_user_data?: 'granted' | 'denied'
  ad_personalization?: 'granted' | 'denied'
  ad_storage?: 'granted' | 'denied'
  analytics_storage?: 'granted' | 'denied'
  wait_for_update?: number
}

type EventNames = string // Extend with specific event names if known
type ControlParams = Record<string, any> // Replace `any` with specific types as needed
type EventParams = Record<string, any>
type ConfigParams = Record<string, any>
type CustomParams = Record<string, any>
type FieldNames = string

// Define the structure of Gtag commands
interface GtagCommands {
  config: [
    targetId: string,
    config?: ControlParams | EventParams | ConfigParams | CustomParams,
  ]
  set:
    | [targetId: string, config: CustomParams | boolean | string]
    | [config: CustomParams]
  js: [config: Date]
  event: [
    eventName: EventNames | (string & {}),
    eventParams?: ControlParams | EventParams | CustomParams,
  ]
  get: [
    targetId: string,
    fieldName: FieldNames | string,
    callback?: (field?: string | CustomParams) => any,
  ]
  consent: [
    consentArg: ConsentArg | (string & {}),
    consentParams: ConsentParams,
  ]
}

// Define the Gtag function type
type Gtag = <Command extends keyof GtagCommands>(
  command: Command,
  ...args: GtagCommands[Command]
) => void

// Define the structure of the `useGtag` composable
interface UseGtag {
  gtag: Gtag
  initialize: (id?: string) => void
  disableAnalytics: (id?: string) => void
  enableAnalytics: (id?: string) => void
}

// Declare the `useGtag` composable
declare function useGtag(): UseGtag

// Define the configuration options for the `nuxt-gtag` module
interface GtagConfig {
  page_title?: string
  anonymize_ip?: boolean
  send_page_view?: boolean
  cookie_domain?: string
  // Add other configuration options as needed
}

interface GtagConsentConfig {
  ad_user_data?: 'granted' | 'denied'
  ad_personalization?: 'granted' | 'denied'
  ad_storage?: 'granted' | 'denied'
  analytics_storage?: 'granted' | 'denied'
  wait_for_update?: number // Optional delay in consent updates
}

interface GtagModuleOptions {
  id: string
  enabled?: boolean // Option to enable/disable gtag based on the environment
  config?: GtagConfig // Main configuration object
  initCommands?: Array<[string, string, GtagConsentConfig]> // Consent commands array
  // Add other properties if needed
}

// Module augmentation to include `gtag` in NuxtConfig and NuxtOptions
declare module '@nuxt/schema' {
  interface NuxtConfig {
    gtag?: GtagModuleOptions
  }
  interface NuxtOptions {
    gtag?: GtagModuleOptions
  }
}

<!-- apps\public-site\app\components\coming-soon\Features.vue -->

<template>
  <div
    class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
  >
    <!-- Multi-User Support Feature -->
    <div class="rounded-lg bg-white/80 p-8 text-center shadow-lg">
      <UserGroupIcon class="mx-auto size-12 text-blue-600" />
      <h3 class="mt-4 text-lg font-semibold text-gray-800">
        Multi-User Support
      </h3>
      <p class="mt-2 text-gray-600">
        Collaborate with others on debt repayment plans, with customizable
        permissions.
      </p>
    </div>

    <!-- Multiple Repayment Strategies Feature -->
    <div class="rounded-lg bg-white/80 p-8 text-center shadow-lg">
      <ChartPieIcon class="mx-auto size-12 text-blue-600" />
      <h3 class="mt-4 text-lg font-semibold text-gray-800">
        Multiple Repayment Strategies
      </h3>
      <p class="mt-2 text-gray-600">
        Supports Snowball, Avalanche, Debt-to-Interest Ratio, CFI, and custom
        strategies.
      </p>
    </div>

    <!-- Snowflake Payments Feature -->
    <div class="rounded-lg bg-white/80 p-8 text-center shadow-lg">
      <SparklesIcon class="mx-auto size-12 text-blue-600" />
      <h3 class="mt-4 text-lg font-semibold text-gray-800">
        Snowflake Payments
      </h3>
      <p class="mt-2 text-gray-600">
        Apply extra funds to debts whenever they're available.
      </p>
    </div>

    <!-- Multicurrency Support Feature -->
    <div class="rounded-lg bg-white/80 p-8 text-center shadow-lg">
      <GlobeAltIcon class="mx-auto size-12 text-blue-600" />
      <h3 class="mt-4 text-lg font-semibold text-gray-800">
        Multicurrency Support
      </h3>
      <p class="mt-2 text-gray-600">
        Handle debts in various currencies with automatic exchange rate updates.
      </p>
    </div>
  </div>
</template>

<script setup>
import {
  UserGroupIcon,
  ChartPieIcon,
  SparklesIcon,
  GlobeAltIcon,
} from '@heroicons/vue/24/outline'
</script>

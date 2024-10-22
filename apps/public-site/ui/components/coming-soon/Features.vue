<!-- C:\Repository\DebtFreePlanner\apps\public-site\ui\components\coming-soon\Features.vue -->
<template>
  <div
    class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
  >
    <!-- Multi-User Support Feature -->
    <div class="rounded-lg bg-gray-50 bg-opacity-60 p-6 text-center shadow-lg">
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
    <div class="rounded-lg bg-gray-50 bg-opacity-60 p-6 text-center shadow-lg">
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
    <div class="rounded-lg bg-gray-50 bg-opacity-60 p-6 text-center shadow-lg">
      <SparklesIcon class="mx-auto size-12 text-blue-600" />
      <h3 class="mt-4 text-lg font-semibold text-gray-800">
        Snowflake Payments
      </h3>
      <p class="mt-2 text-gray-600">
        Apply extra funds to debts whenever they're available.
      </p>
    </div>

    <!-- Multicurrency Support Feature -->
    <div class="rounded-lg bg-gray-50 bg-opacity-60 p-6 text-center shadow-lg">
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

<style scoped>
.text-center {
  background: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}
</style>

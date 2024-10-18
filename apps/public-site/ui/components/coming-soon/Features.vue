<!-- C:\Repository\DebtFreePlanner\apps\public-site\ui\components\coming-soon\Features.vue -->
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
    <div class="text-center">
      <UserGroupIcon class="mx-auto h-12 w-12 text-blue-600" />
      <h3 class="mt-4 text-lg font-semibold text-gray-800">Multi-User Support</h3>
      <p class="mt-2 text-gray-600">
        Collaborate with others on debt repayment plans, with customizable permissions.
      </p>
    </div>
    <div class="text-center">
      <ChartPieIcon class="mx-auto h-12 w-12 text-blue-600" />
      <h3 class="mt-4 text-lg font-semibold text-gray-800">Multiple Repayment Strategies</h3>
      <p class="mt-2 text-gray-600">
        Supports Snowball, Avalanche, Debt-to-Interest Ratio, CFI, and custom strategies.
      </p>
    </div>
    <div class="text-center">
      <SparklesIcon class="mx-auto h-12 w-12 text-blue-600" />
      <h3 class="mt-4 text-lg font-semibold text-gray-800">Snowflake Payments</h3>
      <p class="mt-2 text-gray-600">
        Apply extra funds to debts whenever they're available.
      </p>
    </div>
    <div class="text-center">
      <GlobeAltIcon class="mx-auto h-12 w-12 text-blue-600" />
      <h3 class="mt-4 text-lg font-semibold text-gray-800">Multicurrency Support</h3>
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
} from '@heroicons/vue/24/outline';
</script>

<style scoped>
/* No additional styles needed */
</style>

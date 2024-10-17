<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="text-center">
      <CreditCardIcon class="mx-auto h-12 w-12 text-blue-600" />
      <h3 class="mt-4 text-lg font-semibold text-gray-800">Manage Multiple Loans</h3>
      <p class="mt-2 text-gray-600">Easily track and prioritize your debts.</p>
    </div>
    <div class="text-center">
      <CurrencyDollarIcon class="mx-auto h-12 w-12 text-blue-600" />
      <h3 class="mt-4 text-lg font-semibold text-gray-800">Multicurrency Support</h3>
      <p class="mt-2 text-gray-600">Handle debts in various currencies seamlessly.</p>
    </div>
    <div class="text-center">
      <RocketLaunchIcon class="mx-auto h-12 w-12 text-blue-600" />
      <h3 class="mt-4 text-lg font-semibold text-gray-800">Accelerated Repayment Plans</h3>
      <p class="mt-2 text-gray-600">Strategize to achieve a debt-free life faster.</p>
    </div>
  </div>
</template>

<script setup>
// Import Heroicons v2 icons
import { CreditCardIcon, CurrencyDollarIcon, RocketLaunchIcon } from '@heroicons/vue/24/outline';
</script>

<style scoped>
/* Add any component-specific styles if necessary */
</style>

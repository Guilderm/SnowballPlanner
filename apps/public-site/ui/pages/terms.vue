<!-- C:\Repository\DebtFreePlanner\apps\public-site\ui\pages\terms.vue -->

<template>
  <div class="min-h-screen bg-gray-100">
    <main class="max-w-4xl mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-4">Terms of Service</h1>
      <p class="mb-4">Last updated: {{ lastUpdated }}</p>

      <!-- Terms of Service Sections -->
      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to DebtFreePlanner. By accessing or using our service, you agree
          to be bound by these Terms of Service. If you do not agree with any part
          of the terms, you must not use our service.
        </p>
      </section>

      <!-- Add additional sections here -->

      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-2">10. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at
          <a href="mailto:support@debtfreeplanner.com" class="text-blue-600 underline"
            >support@debtfreeplanner.com</a
          >.
        </p>
      </section>
    </main>
  </div>
</template>

<script setup>
const lastUpdated = 'October 21, 2024';
</script>

<script lang="ts">
export default {
  head() {
    return {
      title: 'Terms of Service - DebtFreePlanner',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Read the Terms of Service for DebtFreePlanner to understand the rules and regulations for using our service.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Terms of Service, DebtFreePlanner, User Agreement, Rules, Regulations',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add any page-specific styles here if needed */
</style>

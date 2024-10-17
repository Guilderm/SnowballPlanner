<!-- C:\Repository\DebtFreePlanner\apps\public-site\ui\pages\index.vue -->
<template>
  <section class="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
    <!-- Headline -->
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-800">
        Strategically Plan Your Journey to a Debt-Free Living
      </h1>
      <p class="mt-4 text-lg text-gray-600">
        Coming soon: A powerful web-based tool to manage and accelerate your debt repayment plans.
      </p>
    </div>

    <!-- Hero Image -->
    <div class="mt-8">
      <img src="/images/hero-image.svg" alt="DebtFreePlanner Illustration" class="w-full max-w-md mx-auto">
    </div>

    <!-- Countdown Timer -->
    <CountdownTimer />

    <!-- Email Signup Form -->
    <form @submit.prevent="submitEmail" class="mt-8 w-full max-w-md mx-auto">
      <div class="flex">
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          class="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
          required
        />
        <button
          type="submit"
          class="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
        >
          Notify Me
        </button>
      </div>
      <p v-if="message" class="mt-4 text-center text-green-600">{{ message }}</p>
    </form>

    <!-- Features -->
    <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="text-center">
        <!-- Replace the SVG below with an appropriate icon -->
        <svg class="mx-auto h-12 w-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <!-- Example SVG content -->
          <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
        </svg>
        <h3 class="mt-4 text-lg font-semibold text-gray-800">Manage Multiple Loans</h3>
        <p class="mt-2 text-gray-600">Easily track and prioritize your debts.</p>
      </div>
      <div class="text-center">
        <!-- Replace the SVG below with an appropriate icon -->
        <svg class="mx-auto h-12 w-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <!-- Example SVG content -->
          <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
        </svg>
        <h3 class="mt-4 text-lg font-semibold text-gray-800">Multicurrency Support</h3>
        <p class="mt-2 text-gray-600">Handle debts in various currencies seamlessly.</p>
      </div>
      <div class="text-center">
        <!-- Replace the SVG below with an appropriate icon -->
        <svg class="mx-auto h-12 w-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <!-- Example SVG content -->
          <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
        </svg>
        <h3 class="mt-4 text-lg font-semibold text-gray-800">Accelerated Repayment Plans</h3>
        <p class="mt-2 text-gray-600">Strategize to achieve a debt-free life faster.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import CountdownTimer from '@/components/CountdownTimer.vue';

const email = ref('');
const message = ref('');

const submitEmail = async () => {
  // Placeholder for email submission logic
  // You can integrate with a backend API or a service like Mailchimp
  message.value = `Thank you! We will notify you at ${email.value}`;
  email.value = '';
};
</script>

<style scoped>
/* Add page-specific styles here if necessary */
</style>

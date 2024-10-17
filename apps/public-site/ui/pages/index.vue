<!-- C:\Repository\DebtFreePlanner\apps\public-site\ui\pages\index.vue -->
<template>
  <section class="bg-gray-50">
    <!-- Hero Section -->
    <div class="container mx-auto px-4 py-12">
      <!-- Headline -->
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800">
          Strategically Plan Your Journey to a Debt-Free Living
        </h1>
        <p class="mt-4 text-lg text-gray-600">
          Coming soon: A powerful web-based tool to manage and accelerate your debt repayment plans.
        </p>
      </div>

      <!-- Hero Image -->
      <div class="mt-8 flex justify-center">
        <img
          src="/images/hero-image.svg"
          alt="DebtFreePlanner Illustration"
          class="w-full max-w-md"
        />
      </div>

      <!-- Launch Date -->
      <div class="mt-4 text-center">
        <p class="text-gray-700 text-lg">Launching on December 1st, 2024</p>
      </div>

      <!-- Countdown Timer -->
      <CountdownTimer />

      <!-- Email Signup Form -->
      <EmailSignupForm />
    </div>

    <!-- Features Section -->
    <div class="bg-white py-12">
      <div class="container mx-auto px-4">
        <Features />
      </div>
    </div>
  </section>
</template>

<script setup>
// Correcting the path for components to reflect your structure
import CountdownTimer from '@/components/coming-soon/CountdownTimer.vue';
import EmailSignupForm from '@/components/coming-soon/EmailSignupForm.vue';
import Features from '@/components/coming-soon/Features.vue';
</script>

<script>
export default {
  head() {
    return {
      title: 'Home - DebtFreePlanner',
      meta: [
        {
          name: 'description',
          content:
            'Welcome to DebtFreePlanner. Strategically plan your journey to a debt-free life.',
        },
        {
          name: 'author',
          content: 'Guilder W. Milliner',
        },
        // Additional meta tags can be added here if needed
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>

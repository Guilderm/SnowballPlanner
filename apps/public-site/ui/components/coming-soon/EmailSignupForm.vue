<!-- C:\Repository\DebtFreePlanner\apps\public-site\ui\components\coming-soon\EmailSignupForm.vue -->
<template>
  <div class="mt-8 w-full max-w-md mx-auto">
    <form @submit.prevent="submitEmail" class="flex">
      <input
        v-model="email"
        type="email"
        placeholder="Enter your email"
        class="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
        aria-label="Email address"
      />
      <button
        type="submit"
        class="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors duration-300"
      >
        Notify Me
      </button>
    </form>
    <p v-if="message" class="mt-4 text-center text-green-600">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const message = ref('');

const submitEmail = async () => {
  // Placeholder for email submission logic
  message.value = `Thank you! We will notify you at ${email.value}`;
  email.value = '';
};
</script>

<style scoped>
/* No additional styles needed */
</style>

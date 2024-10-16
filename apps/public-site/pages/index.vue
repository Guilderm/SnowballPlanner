<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50 px-4">
    <div class="max-w-md text-center">
      <img
        class="mx-auto h-12 w-auto"
        src="/favicon.ico"
        alt="Debt Free Planner Logo"
      />
      <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Coming Soon</h2>
      <p class="mt-4 text-lg text-gray-600">
        We're working hard to launch our new website. Stay tuned!
      </p>
      <div class="mt-8">
        <form @submit.prevent="submitEmail" class="sm:flex">
          <input
            v-model="email"
            type="email"
            required
            class="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            class="mt-3 w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:ml-3 sm:mt-0 sm:w-auto"
          >
            Notify Me
          </button>
        </form>
        <p v-if="message" class="mt-4 text-sm text-green-500">
          {{ message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const message = ref('')

const submitEmail = () => {
  // Implement your email submission logic here
  // For demonstration, we'll just show a success message
  message.value = 'Thank you! We will notify you when we launch.'
  email.value = ''
}
</script>

<style scoped>
/* Add any page-specific styles here */
</style>

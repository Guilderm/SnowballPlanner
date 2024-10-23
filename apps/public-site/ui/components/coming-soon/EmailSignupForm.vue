<!-- apps/public-site/ui/components/coming-soon/EmailSignupForm.vue -->

<template>
  <form class="mx-auto mt-8 w-full max-w-md" @submit.prevent="submitEmail">
    <!-- Updated label: Nesting and 'for' attribute -->
    <label for="email" class="sr-only">
      Email Address
      <input
        id="email"
        v-model="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        required
        class="grow rounded-l-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </label>

    <div class="flex">
      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="isLoading"
        class="rounded-r-md bg-blue-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-700 disabled:bg-blue-400"
      >
        {{ isLoading ? 'Subscribing...' : 'Subscribe' }}
      </button>
    </div>

    <!-- Feedback Message -->
    <p
      v-if="message"
      :class="{ 'text-green-600': success, 'text-red-600': !success }"
      class="mt-4 text-center"
      role="alert"
      aria-live="assertive"
    >
      {{ message }}
    </p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

// Reactive References
const email = ref('')
const message = ref('')
const success = ref(true)
const isLoading = ref(false)

// Email Submission Handler
const submitEmail = async () => {
  // Basic Validation: Check if email is entered
  if (!email.value) {
    message.value = 'Please enter a valid email address.'
    success.value = false
    return
  }

  // Enhanced Validation: Check email format using regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email.value)) {
    message.value = 'Please enter a valid email address.'
    success.value = false
    return
  }

  // Prepare Data for Submission
  const data = {
    email_address: email.value,
    status: 'subscribed',
  }

  try {
    isLoading.value = true
    // Make API Call to Subscribe Email
    const response = await axios.post(
      '/api/services/newsletter_subscription',
      data
    )
    console.log('Subscription Response:', response.data)

    // Success Feedback
    message.value = `Thank you! We will notify you at ${email.value}.`
    success.value = true
    email.value = '' // Reset Email Input
  } catch (error: unknown) {
    // Error Handling
    if (axios.isAxiosError(error) && error.response) {
      console.error('Subscription error:', error.response.data)
      if (error.response.data && error.response.data.detail) {
        message.value = `Error: ${error.response.data.detail}`
      } else {
        message.value = 'There was an error subscribing. Please try again.'
      }
    } else {
      console.error('An unknown error occurred:', error)
      message.value = 'An unknown error occurred. Please try again later.'
    }
    success.value = false
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
/* Optional: Add any component-specific styles here */
</style>

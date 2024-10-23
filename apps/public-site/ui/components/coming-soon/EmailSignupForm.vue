<!-- apps/public-site/ui/components/coming-soon/EmailSignupForm.vue -->

<template>
  <form class="mx-auto mt-8 w-full max-w-md" @submit.prevent="submitEmail">
    <label for="email" class="sr-only">Email Address</label>
    <div class="flex">
      <input
        id="email"
        v-model="email"
        type="email"
        placeholder="Enter your email"
        required
        class="grow rounded-l-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        class="rounded-r-md bg-blue-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-700"
      >
        Subscribe
      </button>
    </div>
    <p
      v-if="message"
      :class="{ 'text-green-600': success, 'text-red-600': !success }"
      class="mt-4 text-center"
      role="alert"
    >
      {{ message }}
    </p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const email = ref('')
const message = ref('')
const success = ref(true)

const submitEmail = async () => {
  if (!email.value) {
    message.value = 'Please enter a valid email address.'
    success.value = false
    return
  }

  // Simple email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email.value)) {
    message.value = 'Please enter a valid email address.'
    success.value = false
    return
  }

  const data = {
    email_address: email.value,
    status: 'subscribed',
  }

  try {
    const response = await axios.post(
      '/api/services/newsletter_subscription',
      data
    )
    console.log('Subscription Response:', response.data)
    message.value = 'Thank you! We will notify you at ' + email.value + '.'
    success.value = true
    email.value = ''
  } catch (error: unknown) {
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
  }
}
</script>

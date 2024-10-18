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
    <p v-if="message" :class="{'text-green-600': success, 'text-red-600': !success}" class="mt-4 text-center">
      {{ message }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const email = ref('');
const message = ref('');
const success = ref(true);

const submitEmail = async () => {
  if (!email.value) {
    message.value = 'Please enter a valid email address';
    success.value = false;
    return;
  }

  const data = {
    email_address: email.value,
    status: 'subscribed',
  };

  try {
    // Make the API call to your backend route for handling MailChimp requests
const response = await axios.post('/api/services/newsletter_subscription', data);
    message.value = 'Thank you! We will notify you at ' + email.value;
    success.value = true;
    email.value = ''; // Reset the email input after successful submission
  } catch (error) {
    console.error(error);
    message.value = 'There was an error subscribing. Please try again.';
    success.value = false;
  }
};
</script>

<style scoped>
/* No additional styles needed */
</style>

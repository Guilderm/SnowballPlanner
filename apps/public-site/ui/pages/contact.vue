<!-- C:\Repository\DebtFreePlanner\apps\public-site\ui\pages\contact.vue -->

<template>
  <div class="min-h-screen bg-gray-100">
    <main class="max-w-4xl mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Contact Us</h1>
      
      <div class="space-y-6">
        <!-- Contact Information Section -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p class="text-gray-700 mb-2">
            We'd love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </section>

        <!-- Email Section -->
        <section class="flex items-center">
          <!-- Email Icon -->
          <EnvelopeIcon class="h-6 w-6 text-gray-600 mr-3" />
          <a href="mailto:support@debtfreeplanner.app" class="text-blue-600 underline">
            support@debtfreeplanner.app
          </a>
        </section>

        <!-- WhatsApp Link Section -->
        <section class="flex items-center">
          <!-- WhatsApp Icon -->
          <ChatBubbleBottomCenterIcon class="h-6 w-6 text-green-600 mr-3" />
          <a href="https://wa.me/50671457690" target="_blank" rel="noopener noreferrer" class="text-green-600 underline">
            Chat with us on WhatsApp
          </a>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { EnvelopeIcon, ChatBubbleBottomCenterIcon } from '@heroicons/vue/24/outline';

definePageMeta({
  title: 'Contact Us - DebtFreePlanner',
  meta: [
    {
      name: 'description',
      content:
        'Contact DebtFreePlanner for support, inquiries, or feedback. Reach us via email or WhatsApp.',
    },
    {
      name: 'keywords',
      content: 'Contact, DebtFreePlanner, Support, Email, WhatsApp',
    },
  ],
});

const lastUpdated = 'October 21, 2024';
</script>

<style scoped>
/* Add any page-specific styles here if needed */
</style>

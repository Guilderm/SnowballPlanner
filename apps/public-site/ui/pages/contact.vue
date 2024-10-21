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
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 mr-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.94 6.34l7.06 4.12 7.06-4.12a2 2 0 00-2.06-1.67H5a2 2 0 00-2.06 1.67z" />
            <path d="M18 8.34l-8 4.66-8-4.66V14a2 2 0 002 2h12a2 2 0 002-2V8.34z" />
          </svg>
          <a href="mailto:support@debtfreeplanner.app" class="text-blue-600 underline">
            support@debtfreeplanner.app
          </a>
        </section>

        <!-- Phone Number Section -->
        <section class="flex items-center">
          <!-- Phone Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 mr-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 3.5A1.5 1.5 0 013.5 2h1A1.5 1.5 0 016 3.5v13A1.5 1.5 0 014.5 18h-1A1.5 1.5 0 012 16.5v-13zM7 3h10a1 1 0 011 1v12a1 1 0 01-1 1H7V3z" />
          </svg>
          <a href="tel:+50671457690" class="text-blue-600 underline">
            +506 7145 7690
          </a>
        </section>

        <!-- WhatsApp Link Section -->
        <section class="flex items-center">
          <!-- WhatsApp Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 mr-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.52 3.48A12 12 0 003.48 20.52l1.21-4.45a7.5 7.5 0 0111.83-11.83l4.45-1.21z" />
            <path d="M6.88 17.12a9 9 0 1112.72-12.72L17.12 6.88a5.5 5.5 0 00-7.78 7.78l-2.46 2.46z" />
          </svg>
          <a href="https://wa.me/50671457690" target="_blank" rel="noopener noreferrer" class="text-green-600 underline">
            Chat with us on WhatsApp
          </a>
        </section>
      </div>
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
      title: 'Contact Us - DebtFreePlanner',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Contact DebtFreePlanner for support, inquiries, or feedback. Reach us via email, phone, or WhatsApp.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Contact, DebtFreePlanner, Support, Email, Phone, WhatsApp',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add any page-specific styles here if needed */
</style>

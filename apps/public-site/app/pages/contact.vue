<template>
  <div class="min-h-screen bg-gray-100">
    <main class="mx-auto max-w-4xl px-4 py-8">
      <h1 class="mb-6 text-3xl font-bold">Contact Us</h1>

      <div class="space-y-6">
        <!-- Contact Information Section -->
        <section>
          <h2 class="mb-4 text-2xl font-semibold">Get in Touch</h2>
          <p class="mb-2 text-gray-700">
            We'd love to hear from you! Whether you have a question about
            features, pricing, or anything else, our team is ready to answer all
            your questions.
          </p>
        </section>

        <!-- Email Section -->
        <section class="flex items-center">
          <EnvelopeIcon class="mr-3 size-6 text-gray-600" />
          <a
            href="mailto:support@debtfreeplanner.app"
            class="text-blue-600 underline"
          >
            support@debtfreeplanner.app
          </a>
        </section>

        <!-- WhatsApp Link Section -->
        <section class="flex items-center">
          <ChatBubbleBottomCenterIcon class="mr-3 size-6 text-green-600" />
          <a
            href="https://wa.me/50671457690"
            target="_blank"
            rel="noopener noreferrer"
            class="text-green-600 underline"
          >
            Chat with us on WhatsApp
          </a>
        </section>

        <!-- Display Last Updated Date -->
        <section class="text-sm text-gray-500">
          Last Updated: {{ lastUpdated }}
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  EnvelopeIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/vue/24/outline";

definePageMeta({
  title: "Contact Us - DebtFreePlanner",
  meta: [
    {
      name: "description",
      content:
        "Contact DebtFreePlanner for support, inquiries, or feedback. Reach us via email or WhatsApp.",
    },
    {
      name: "keywords",
      content: "Contact, DebtFreePlanner, Support, Email, WhatsApp",
    },
  ],
});

const lastUpdated = "October 21, 2024";
</script>

<style scoped>
/* Add any page-specific styles here if needed */
</style>

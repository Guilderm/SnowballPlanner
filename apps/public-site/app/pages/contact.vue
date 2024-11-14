<template>
  <div>
    <main>
      <div>
        <!-- Email Link Section -->
        <section>
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
import { useHead } from "@vueuse/head";

useHead({
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
/* Your styles here */
</style>

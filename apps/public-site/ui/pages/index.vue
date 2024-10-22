<!-- C:\Repository\DebtFreePlanner\apps\public-site\ui\pages\index.vue -->

<template>
  <section
    class="relative z-0 bg-[url('/images/coming-soon-background.jpg')] bg-cover bg-fixed bg-center bg-no-repeat before:absolute before:inset-0 before:z-0 before:bg-black/50 before:content-['']"
  >
    <!-- Main content with parallax background -->
    <div
      class="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12"
    >
      <!-- Launch Announcement Component -->
      <LaunchAnnouncement />

      <!-- Countdown Timer with margin-top for space -->
      <div class="mt-6">
        <CountdownTimer />
      </div>

      <!-- Email Signup Form -->
      <EmailSignupForm />

      <!-- Features Section -->
      <div class="mt-12 w-full px-4">
        <Features />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import LaunchAnnouncement from '@/components/coming-soon/LaunchAnnouncement.vue'
import CountdownTimer from '@/components/coming-soon/CountdownTimer.vue'
import EmailSignupForm from '@/components/coming-soon/EmailSignupForm.vue'
import Features from '@/components/coming-soon/Features.vue'

definePageMeta({
  title:
    'DebtFreePlanner - Strategically Plan Your Journey to a Debt-Free Living',
  meta: [
    {
      name: 'description',
      content:
        'Strategically plan your journey to a debt-free living with DebtFreePlanner. Sign up for updates and be the first to know when we launch.',
    },
    {
      name: 'keywords',
      content:
        'DebtFreePlanner, Debt management, Financial planning, Coming soon, Launch, Sign up',
    },
  ],
})
</script>

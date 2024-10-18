<!-- C:\Repository\DebtFreePlanner\apps\public-site\ui\pages\index.vue -->
<template>
  <section class="coming-soon-section relative">
    <!-- Main content with parallax background -->
    <div class="content-wrapper flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <!-- Launch Announcement Component -->
      <LaunchAnnouncement />

      <!-- Countdown Timer -->
      <CountdownTimer />

      <!-- Email Signup Form -->
      <EmailSignupForm />

      <!-- Features Section -->
      <div class="features mt-12 w-full px-4">
        <Features />
      </div>
    </div>
  </section>
</template>

<script setup>
import LaunchAnnouncement from '@/components/coming-soon/LaunchAnnouncement.vue';
import CountdownTimer from '@/components/coming-soon/CountdownTimer.vue';
import EmailSignupForm from '@/components/coming-soon/EmailSignupForm.vue';
import Features from '@/components/coming-soon/Features.vue';
</script>

<style scoped>
.coming-soon-section {
  background-image: url('/images/coming-soon-background.jpg');
  background-size: cover;
  background-attachment: fixed; /* Parallax effect */
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;
}

.coming-soon-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Dark overlay */
  z-index: 0;
}

.content-wrapper {
  position: relative;
  z-index: 1;
}

.features > div {
  background: rgba(255, 255, 255, 0.85); /* Semi-transparent background */
  padding: 2rem;
  border-radius: 0.5rem;
  shadow: lg;
}
</style>

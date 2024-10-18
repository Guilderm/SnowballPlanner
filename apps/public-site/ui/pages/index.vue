<!-- C:\Repository\DebtFreePlanner\apps\public-site\ui\pages\index.vue -->
<template>
  <section class="coming-soon-section">
    <!-- Main content with parallax background -->
    <div class="content-wrapper">
      <div class="container flex flex-col items-center mx-auto px-4 py-12">
        <!-- Launch Announcement Component -->
        <LaunchAnnouncement />

        <!-- Countdown Timer -->
        <CountdownTimer />

        <!-- Email Signup Form -->
        <EmailSignupForm />

        <!-- Features Section -->
        <div class="features mt-12">
          <Features />
        </div>
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
  position: relative;
  overflow: hidden;
}

.content-wrapper {
  position: relative;
  z-index: 1;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.coming-soon-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/coming-soon-background.jpg');
  background-size: cover;
  background-attachment: fixed; /* Parallax effect */
  background-position: center;
  background-repeat: no-repeat;
}

.features {
  width: 100%;
}

.features > div {
  background: rgba(255, 255, 255, 0.85);
  padding: 2rem;
  border-radius: 0.5rem;
}

.container {
  max-width: 1200px;
}
</style>

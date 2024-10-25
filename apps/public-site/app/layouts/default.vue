<!-- apps\public-site\app\layouts\default.vue -->

<template>
  <div class="flex min-h-screen flex-col">
    <Navbar />
    <main class="grow">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>
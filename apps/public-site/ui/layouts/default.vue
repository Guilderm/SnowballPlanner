<!-- C:\Repository\DebtFreePlanner\apps\public-site\ui\layouts\default.vue -->
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

<style scoped>
/* No additional styles needed */
</style>

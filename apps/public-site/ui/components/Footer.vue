<!-- C:\Repository\DebtFreePlanner\apps\public-site\ui\components\Footer.vue -->

<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p>&copy; {{ currentYear }} DebtFreePlanner. All rights reserved.</p>
        </div>
        <div class="flex space-x-4">
          <nuxt-link to="/privacy" class="text-gray-400 hover:text-white">Privacy Policy</nuxt-link>
          <nuxt-link to="/terms" class="text-gray-400 hover:text-white">Terms of Service</nuxt-link>
          <nuxt-link to="/contact" class="text-gray-400 hover:text-white">Contact Us</nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
/* No additional styles needed */
</style>

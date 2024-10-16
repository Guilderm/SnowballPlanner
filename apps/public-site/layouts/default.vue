<template>
  <div class="flex min-h-screen flex-col">
    <!-- Header (optional) -->
    <header class="bg-gray-800 p-4 text-white">
      <h1 class="text-xl">Debt Free Planner</h1>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <NuxtPage />
    </main>

    <!-- Footer (optional) -->
    <footer class="bg-gray-800 p-4 text-center text-white">
      &copy; {{ new Date().getFullYear() }} Debt Free Planner. All rights
      reserved.
    </footer>
  </div>
</template>

<script setup>
// No additional script needed for the default layout
</script>

<style scoped>
/* Add any layout-specific styles here */
</style>

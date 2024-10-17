<!-- C:\Repository\DebtFreePlanner\apps\public-site\ui\app.vue -->
<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// No additional script needed
</script>

<style>
/* Ensure that the body has no overflow issues and proper stacking */
body {
  @apply bg-gray-50;
}
</style>

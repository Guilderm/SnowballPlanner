<!-- src/App.vue -->
<template>
  <div id="app">
    <PrimeToast />
    <ComingSoon />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Toast from 'primevue/toast';
import ComingSoon from './components/ComingSoon.vue';

export default defineComponent({
  name: 'App',
  components: {
    PrimeToast: Toast,
    ComingSoon,
  },
});
</script>

<style>
/* Global styles can go here */
</style>

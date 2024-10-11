<template>
  <div id="app">
    <Toast />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Toast from 'primevue/toast';

export default defineComponent({
  name: 'App',
  components: {
    Toast,
  },
});
</script>

<style>
/* Global styles can go here */
</style>

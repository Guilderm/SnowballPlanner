<template>
  <div class="flex space-x-4 justify-center mt-8">
    <div class="text-center">
      <p class="text-4xl font-bold">{{ days }}</p>
      <p class="text-sm text-gray-600">Days</p>
    </div>
    <div class="text-center">
      <p class="text-4xl font-bold">{{ hours }}</p>
      <p class="text-sm text-gray-600">Hours</p>
    </div>
    <div class="text-center">
      <p class="text-4xl font-bold">{{ minutes }}</p>
      <p class="text-sm text-gray-600">Minutes</p>
    </div>
    <div class="text-center">
      <p class="text-4xl font-bold">{{ seconds }}</p>
      <p class="text-sm text-gray-600">Seconds</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const targetDate = new Date('2024-12-01T00:00:00'); // Set your launch date here

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

let timer: number | undefined; // Changed this to allow possible 'undefined'

const updateCountdown = () => {
  const now = new Date();
  const timeRemaining = targetDate.getTime() - now.getTime();

  if (timeRemaining > 0) {
    days.value = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    minutes.value = Math.floor((timeRemaining / (1000 * 60)) % 60);
    seconds.value = Math.floor((timeRemaining / 1000) % 60);
  } else {
    days.value = hours.value = minutes.value = seconds.value = 0;
    if (timer !== undefined) {
      clearInterval(timer);
    }
  }
};

onMounted(() => {
  updateCountdown();
  timer = window.setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  if (timer !== undefined) {
    clearInterval(timer);
  }
});
</script>

<style scoped>
/* Add component-specific styles here if necessary */
</style>

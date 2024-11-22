<!-- apps\public-site\app\components\coming-soon\CountdownTimer.vue -->

<template>
  <div class="mt-8 flex justify-center space-x-4">
    <div class="text-center">
      <p class="text-4xl font-bold text-white">{{ days }}</p>
      <p class="text-sm text-white">Days</p>
    </div>
    <span class="text-4xl font-bold text-white">:</span>
    <div class="text-center">
      <p class="text-4xl font-bold text-white">{{ hours }}</p>
      <p class="text-sm text-white">Hours</p>
    </div>
    <span class="text-4xl font-bold text-white">:</span>
    <div class="text-center">
      <p class="text-4xl font-bold text-white">{{ minutes }}</p>
      <p class="text-sm text-white">Minutes</p>
    </div>
    <span class="text-4xl font-bold text-white">:</span>
    <div class="text-center">
      <p class="text-4xl font-bold text-white">{{ seconds }}</p>
      <p class="text-sm text-white">Seconds</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const targetDate = new Date("2024-12-01T00:00:00");

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

let timer: number;

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  if (distance < 0) {
    clearInterval(timer);
    return;
  }

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.value = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
};

onMounted(() => {
  updateCountdown();
  timer = window.setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style scoped>
/* No additional styles needed */
</style>

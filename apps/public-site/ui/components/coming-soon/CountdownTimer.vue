<!-- C:\Repository\DebtFreePlanner\apps\public-site\ui\components\coming-soon\CountdownTimer.vue -->
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
import { ref, onMounted, onUnmounted } from 'vue'

const targetDate = new Date('2024-12-01T00:00:00')

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let timer: number | undefined

const updateCountdown = () => {
  const now = new Date()
  const timeRemaining = targetDate.getTime() - now.getTime()

  if (timeRemaining > 0) {
    days.value = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24)
    minutes.value = Math.floor((timeRemaining / (1000 * 60)) % 60)
    seconds.value = Math.floor((timeRemaining / 1000) % 60)
  } else {
    days.value = hours.value = minutes.value = seconds.value = 0
    if (timer !== undefined) {
      clearInterval(timer)
    }
  }
}

onMounted(() => {
  updateCountdown()
  timer = window.setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (timer !== undefined) {
    clearInterval(timer)
  }
})
</script>

<style scoped>
/* No additional styles needed */
</style>

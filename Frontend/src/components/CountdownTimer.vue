<template>
  <div class="countdown-timer">
    <div class="time-unit">
      <span class="number">{{ days }}</span>
      <span class="label">Days</span>
    </div>
    <div class="time-unit">
      <span class="number">{{ hours }}</span>
      <span class="label">Hours</span>
    </div>
    <div class="time-unit">
      <span class="number">{{ minutes }}</span>
      <span class="label">Minutes</span>
    </div>
    <div class="time-unit">
      <span class="number">{{ seconds }}</span>
      <span class="label">Seconds</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountdownTimer',
  props: {
    targetDate: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      intervalId: null,
    };
  },
  mounted() {
    this.startCountdown();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    startCountdown() {
      const target = new Date(this.targetDate).getTime();
      this.intervalId = setInterval(() => {
        const now = new Date().getTime();
        const distance = target - now;

        if (distance < 0) {
          clearInterval(this.intervalId);
          return;
        }

        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        this.minutes = Math.floor((distance / 1000 / 60) % 60);
        this.seconds = Math.floor((distance / 1000) % 60);
      }, 1000);
    },
  },
};
</script>

<style scoped>
.countdown-timer {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.time-unit {
  margin: 0 10px;
  text-align: center;
}

.number {
  font-size: 2em;
  color: #007BFF; /* Blue */
}

.label {
  font-size: 1em;
}
</style>

<template>
  <div class="progress-bar">
    <div class="progress" :style="{ width: progress + '%' }">
      {{ progress }}%
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.progress-bar {
  background-color: #ccc; /* Gray */
  border-radius: 10px;
  overflow: hidden;
  margin: 20px auto;
  width: 80%;
  max-width: 500px;
}

.progress {
  background-color: #28a745; /* Green */
  color: white;
  padding: 10px 0;
  text-align: center;
}
</style>

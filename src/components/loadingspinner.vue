<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-white/40 z-[100]"
  >
    <div class="relative w-24 h-24 border border-gray-700 bg-gray-400">
      <!-- Filler animation -->
      <div
        class="absolute bottom-0 left-0 w-full bg-black transition-all"
        :style="{ height: progress + '%' }"
      ></div>

      <!-- Percentage display -->
      <div
        class="absolute inset-0 flex items-center justify-center text-white font-bold"
      >
        {{ progress }}%
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const progress = ref(0);

onMounted(() => {
  const interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += 1;
    } else {
      clearInterval(interval);
    }
  }, 50); // Adjust speed (lower is faster)
});
</script>

<style scoped>
/* Additional styles if needed */
</style>

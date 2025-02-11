<script setup>
import navbar from "./components/navbar.vue";
import footers from "./components/footer.vue";
import LoadingSpinner from "./components/loadingspinner.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const isLoading = ref(false);
const progress = ref(0);
const router = useRouter();

// Function to start loading animation
const startLoading = (next) => {
  isLoading.value = true;
  progress.value = 0;

  const interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value = Math.min(progress.value + Math.random() * 4 + 1, 100);
      // ✅ Ensures it never exceeds 100%
    } else {
      clearInterval(interval);
      setTimeout(() => {
        isLoading.value = false;
        progress.value = 0;
        next(); // Navigate to the new page only after 100%
      }, 500);
    }
  }, 50);
};

// Handle router-link clicks
router.beforeEach((to, from, next) => {
  startLoading(next);
});

// Handle page reload
onMounted(() => {
  startLoading(() => {});
});
</script>

<template>
  <div class="overflow-y-hidden scroll-smooth">
    <navbar />

    <!-- Loading Spinner with Progress Bar -->
    <div
      v-if="isLoading"
      class="fixed inset-0 flex items-center justify-center bg-white/50 z-[100]"
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
          {{ Math.round(progress) }}%
        </div>
      </div>
    </div>

    <!-- Page content -->
    <div v-show="!isLoading" />
    <footers />
  </div>
</template>

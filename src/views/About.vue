<template>
  <div class="text-gray-900 py-60">
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto p-8">
      <div class="grid md:grid-cols-2 gap-8 xl:gap-20 items-center">
        <!-- Image -->
        <div class="relative">
          <img
            src="/src/assets/img/about3.png"
            alt="Fashion Model"
            class="rounded-lg shadow-lg h-96 object-cover"
          />
        </div>

        <!-- Content -->
        <div>
          <h1 class="text-5xl font-bold text-red-500 mb-10">
            Rayuth <span class="text-black">Fashion</span>
          </h1>
          <p class="mt-4 text-gray-600">
            We believe that fashion is more than just wearing clothes—it’s a
            lifestyle and a way to express yourself. We create unique,
            high-quality apparel to match your personality.
          </p>

          <h3 class="text-xl font-semibold mt-6 text-gray-700">
            Personalized Design
          </h3>
          <p class="text-gray-600">
            Our designs focus on comfort, elegance, and modern trends, ensuring
            every piece is perfect for you.
          </p>

          <h3 class="text-xl font-semibold mt-4 text-gray-700">
            Fashion Trendsetter
          </h3>
          <p class="text-gray-600">
            We stay ahead of the trends so you can always look stylish and
            confident.
          </p>

          <button
            class="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition"
          >
            Discover More
          </button>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section
      class="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-14 mt-8 scroll-fade"
    >
      <div
        class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        <div>
          <p class="text-3xl font-bold text-black">1.4K+</p>
          <p class="text-gray-600">Products Sold</p>
        </div>
        <div>
          <p class="text-3xl font-bold text-black">720+</p>
          <p class="text-gray-600">Customers Order</p>
        </div>
        <div>
          <p class="text-3xl font-bold text-black">899+</p>
          <p class="text-gray-600">Feedback Customers</p>
        </div>
        <div>
          <p class="text-3xl font-bold text-black">5+</p>
          <p class="text-gray-600">Years Experience</p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="relative scroll-fade">
      <img
        src="/src/assets/img/about2.png"
        alt="Fashion Designer"
        class="w-full h-[500px] object-cover"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center">
        <div class="max-w-6xl mx-auto text-white px-8">
          <h2 class="text-3xl font-bold">
            We Deliver Fashion as Fashionable as You Are
          </h2>
          <p class="mt-4 max-w-2xl">
            We make fashion simple yet elegant. Explore our latest collections
            and find something that truly speaks to your style.
          </p>
          <button
            class="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-black hover:border hover:border-white hover:text-white transition"
          >
            Discover More
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const observedElements = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.3 } // Trigger when 30% of the element is visible
  );

  // Select all elements with class "scroll-fade"
  observedElements.value = document.querySelectorAll(".scroll-fade");
  observedElements.value.forEach((el) => observer.observe(el));
});
</script>

<style scoped>
/* Add additional custom styles if needed */
.scroll-fade {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-fade.show {
  opacity: 1;
  transform: translateY(0);
}
</style>

<template>
  <div class="flex justify-center cursor-text sm:cursor-text">
    <div class="flex items-center sm:w-1/2 mt-4 sm:cursor-text w-96">
      <div class="ml-3 absolute text-gray-500 z-0">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </div>
      <input
        type="text"
        placeholder="Search"
        class="w-full pl-10 py-2 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] outline-none"
      />
    </div>
  </div>
  <div class="max-w-2xl mx-auto mt-10">
    <div
      id="default-carousel"
      class="relative rounded-lg overflow-hidden shadow-lg z-0"
      data-carousel="static"
    >
      <!-- Carousel wrapper -->
      <div class="relative h-80 md:h-96" data-carousel-inner>
        <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/src/assets/img/IMG_1165.png"
            class="object-cover w-full h-full"
            alt="Slide 1"
          />
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/src/assets/img/IMG_1166.png"
            class="object-cover w-full h-full"
            alt="Slide 2"
          />
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/src/assets/img/IMG_1168.png"
            class="object-cover w-full h-full"
            alt="Slide 3"
          />
        </div>
      </div>
      <!-- Slider indicators -->
      <!-- Slider indicators -->
      <div
        class="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2"
        data-carousel-indicators
      >
        <button
          v-for="(item, index) in 3"
          :key="index"
          type="button"
          :class="[
            'w-3 h-3 rounded-full bg-gray-300 hover:bg-black focus:outline-none transition',
            index === activeIndex ? 'bg-black' : '',
          ]"
          @click="setSlide(index)"
        ></button>
      </div>

      <!-- Slider controls -->
      <button
        type="button"
        class="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
        @click="prevSlide"
      >
        <svg
          class="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <button
        type="button"
        class="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
        @click="nextSlide"
      >
        <svg
          class="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0, // Tracks the active slide index
    };
  },
  mounted() {
    const carousel = document.querySelector("[data-carousel-inner]");
    const items = carousel.querySelectorAll("[data-carousel-item]");

    const changeSlide = () => {
      items[this.activeIndex].classList.add("hidden");
      items[this.activeIndex].classList.remove("active");
      this.activeIndex = (this.activeIndex + 1) % items.length;
      items[this.activeIndex].classList.remove("hidden");
      items[this.activeIndex].classList.add("active");
    };

    // Auto-slide interval
    setInterval(changeSlide, 3000); // Adjust the interval (3000ms = 3 seconds)
  },
  methods: {
    setSlide(index) {
      const carousel = document.querySelector("[data-carousel-inner]");
      const items = carousel.querySelectorAll("[data-carousel-item]");

      items[this.activeIndex].classList.add("hidden");
      items[this.activeIndex].classList.remove("active");
      this.activeIndex = index;
      items[this.activeIndex].classList.remove("hidden");
      items[this.activeIndex].classList.add("active");
    },
    prevSlide() {
      this.setSlide(
        (this.activeIndex - 1 + 3) % 3 // Wrap to the last slide if at the first slide
      );
    },
    nextSlide() {
      this.setSlide((this.activeIndex + 1) % 3); // Wrap to the first slide if at the last slide
    },
  },
};
</script>

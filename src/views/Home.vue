<template>
  <div class="flex justify-center cursor-text sm:cursor-text mt-40">
    <div class="flex items-center sm:w-1/2 mt-4 sm:cursor-text w-96 relative">
      <div class="ml-3 absolute text-gray-500 z-0">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </div>
      <input
        type="text"
        v-model="searchQuery"
        @input="handleInput"
        placeholder="Search..."
        class="w-full pl-10 py-2 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] outline-none"
      />
      <!-- Autocomplete suggestions -->
      <div
        v-if="showSuggestions"
        class="absolute top-12 w-full bg-white rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto"
      >
        <ul>
          <li
            v-for="(suggestion, index) in filteredSuggestions"
            :key="index"
            @click="selectSuggestion(suggestion)"
            class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            {{ suggestion }}
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Rest of your code (carousel, features, etc.) -->
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

  <div class="py-14 scroll-fade">
    <div
      class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 lg:gap-20 px-4 sm:px-0"
    >
      <!-- Free Delivery -->
      <div
        class="flex items-center gap-2 px-4 sm:px-7 py-3 sm:py-5 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
      >
        <div
          class="text-4xl sm:text-5xl text-red-500 hover:scale-105 transition-transform"
        >
          <font-awesome-icon icon="fa-solid fa-truck-fast" />
        </div>
        <div>
          <h1 class="text-black font-bold text-lg sm:text-xl">Free Delivery</h1>
          <p class="text-xs sm:text-sm">Order $25 up</p>
        </div>
      </div>

      <!-- Easy Return -->
      <div
        class="flex items-center gap-2 px-4 sm:px-7 py-3 sm:py-5 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
      >
        <div
          class="text-4xl sm:text-5xl text-red-500 hover:scale-105 transition-transform"
        >
          <font-awesome-icon icon="fa-solid fa-arrow-right-arrow-left" />
        </div>
        <div>
          <h1 class="text-black font-bold text-lg sm:text-xl">Easy Return</h1>
          <p class="text-xs sm:text-sm">24H</p>
        </div>
      </div>

      <!-- Shopping Online -->
      <div
        class="flex items-center gap-2 px-4 sm:px-7 py-3 sm:py-5 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
      >
        <div
          class="text-4xl sm:text-5xl text-red-500 hover:scale-105 transition-transform"
        >
          <font-awesome-icon icon="fa-solid fa-bag-shopping" />
        </div>
        <div>
          <h1 class="text-black font-bold text-lg sm:text-xl">
            Shopping Online
          </h1>
          <p class="text-xs sm:text-sm">Easy Order</p>
        </div>
      </div>

      <!-- High Quality -->
      <div
        class="flex items-center gap-2 px-4 sm:px-7 py-3 sm:py-5 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
      >
        <div
          class="text-4xl sm:text-5xl text-red-500 hover:scale-105 transition-transform"
        >
          <font-awesome-icon icon="fa-solid fa-medal" />
        </div>
        <div>
          <h1 class="text-black font-bold text-lg sm:text-xl">High Quality</h1>
          <p class="text-xs sm:text-sm">Premium quality products</p>
        </div>
      </div>
    </div>
  </div>

  <!-- My Clothing -->
  <section class="scroll-fade">
    <div class="mt-16 mb-10">
      <div class="flex items-center gap-4 sm:gap-8 px-4 sm:px-0 justify-center">
        <h1 class="text-2xl sm:text-3xl text-gray-900 font-sans font-bold">
          My Clothing
        </h1>
      </div>
      <div
        class="flex items-center justify-center gap-3 xl:mt-20 mt-10 xl:mb-40 xl:gap-10"
      >
        <div>
          <div class="bg-gray-300 pb-0 p-4 xl:px-10 rounded-lg shadow-sm">
            <img
              class="xl:w-[200px] hover:scale-105"
              src="/src/assets/img/Pic4.png"
              alt=""
            />
          </div>
          <div class="text-center font-khmer mt-5 xl:text-2xl">អាវក្រៅ</div>
        </div>
        <div>
          <div
            class="bg-gray-300 py-4 p-5 xl:px-10 xl:py-0 rounded-lg shadow-sm"
          >
            <img
              class="xl:w-[200px] hover:scale-105"
              src="/src/assets/img/Pic1.png"
              alt=""
            />
          </div>
          <div class="text-center font-khmer mt-5 xl:text-2xl">អាវក្រណាត់</div>
        </div>
        <div>
          <div
            class="bg-gray-300 pt-0 xl:pb-10 p-4 xl:px-10 rounded-lg shadow-sm"
          >
            <img
              class="xl:w-[200px] hover:scale-105"
              src="/src/assets/img/Pic2.png"
              alt=""
            />
          </div>
          <div class="text-center font-khmer mt-5 xl:text-2xl">Jeans</div>
        </div>
        <div>
          <div
            class="bg-gray-300 pb-0 xl:pt-6 p-4 xl:px-10 rounded-lg shadow-sm"
          >
            <img
              class="xl:w-[200px] hover:scale-105"
              src="/src/assets/img/Pic3.png"
              alt=""
            />
          </div>
          <div class="text-center font-khmer mt-5 xl:text-2xl">Tshirt</div>
        </div>
      </div>
    </div>
  </section>

  <!-- New Arrival -->
  <section>
    <div class="mt-10">
      <div
        class="flex items-center gap-4 sm:gap-8 px-4 sm:px-0 justify-center mb-10 xl:mb-20"
      >
        <h1 class="text-2xl sm:text-3xl text-gray-900 font-sans font-bold">
          New Arrival
        </h1>
      </div>
      <div>
        <div class="flex flex-wrap gap-6 xl:gap-10 justify-center xl:mx-56">
          <div
            v-for="product in menuProducts"
            :key="product.title"
            class="w-[200px] border border-black p-4 rounded-lg text-center"
          >
            <div
              class="bg-red-500 text-white absolute p-1 rounded-md hover:scale-[1.02]"
            >
              New
            </div>
            <img
              :src="product.imgSrc"
              :alt="product.name"
              class="rounded mb-3 hover:scale-105"
            />
            <h3 class="text-lg font-semibold font-Kamchea">
              {{ product.name }}
            </h3>
            <p class="text-red-500 font-bold text-base">${{ product.price }}</p>
            <button
              @click="addToCart(product)"
              class="mt-2 bg-black text-white px-4 py-2 rounded w-full transition-transform ease-in-out hover:scale-[1.02]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Featured Product -->
  <section>
    <div class="mt-10">
      <div
        class="flex items-center gap-4 sm:gap-8 px-4 sm:px-0 justify-center mb-10 xl:mb-20"
      >
        <h1 class="text-2xl sm:text-3xl text-gray-900 font-sans font-bold">
          Featured Product
        </h1>
      </div>
      <div>
        <div class="flex flex-wrap gap-6 xl:gap-10 justify-center xl:mx-56">
          <div
            v-for="product in menuProducts"
            :key="product.title"
            class="w-[200px] border border-black p-4 rounded-lg text-center"
          >
            <div
              class="bg-red-500 text-white absolute p-1 rounded-md hover:scale-[1.02]"
            >
              -10%
            </div>
            <img
              :src="product.imgSrc"
              :alt="product.name"
              class="rounded mb-3 hover:scale-105"
            />
            <h3 class="text-lg font-semibold font-Kamchea">
              {{ product.name }}
            </h3>
            <p class="text-red-500 font-bold text-base">${{ product.price }}</p>
            <button
              @click="addToCart(product)"
              class="mt-2 bg-black text-white px-4 py-2 rounded w-full transition-transform ease-in-out hover:scale-[1.02]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, inject } from "vue";
import b1 from "/src/assets/img/b1.png"

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

// Inject cart function (ensure a provider exists)
const addToCart = inject("addToCart", (product) =>
  console.warn("addToCart is not provided", product)
);

const menuProducts = ref([
  {
    id: 1,
    name: "អាវក្រៅL",
    price: 6,
    imgSrc: b1,
  },
  {
    id: 2,
    name: "ខោM",
    price: 9,
    imgSrc: "./src/assets/img/c1.png",
  },
  {
    id: 3,
    name: "អាវក្រៅXL",
    price: 9,
    imgSrc: "./src/assets/img/kit3.png",
  },
  {
    id: 4,
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: "./src/assets/img/c5.png",
  },
  {
    id: 5,
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: "./src/assets/img/c6.png",
  },
  {
    id: 6,
    name: "អាវក្រៅM",
    price: 9,
    imgSrc: "./src/assets/img/kit6.png",
  },
  {
    id: 7,
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: "./src/assets/img/x3.png",
  },
  {
    id: 13,
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: "./src/assets/img/x8.png",
  },
  {
    id: 8,
    name: "អាវក្រៅL",
    price: 9,
    imgSrc: "./src/assets/img/kit8.png",
  },
  {
    id: 9,
    name: "អាវក្រៅL",
    price: 6,
    imgSrc: "./src/assets/img/kit9.png",
  },
  {
    id: 14,
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: "./src/assets/img/x2.png",
  },
  {
    id: 15,
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: "./src/assets/img/x10.png",
  },
  {
    id: 16,
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: "./src/assets/img/x11.png",
  },
  {
    id: 17,
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: "./src/assets/img/x12.png",
  },
  {
    id: 18,
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: "./src/assets/img/x1.png",
  },
  {
    id: 10,
    name: "អាវក្រៅM",
    price: 9,
    imgSrc: "./src/assets/img/kit10.png",
  },
  {
    id: 11,
    name: "អាវក្រៅ2XL",
    price: 13,
    imgSrc: "./src/assets/img/kit11.png",
  },
  {
    id: 12,
    name: "អាវក្រៅL",
    price: 9,
    imgSrc: "./src/assets/img/kit12.png",
  },
]);

const searchQuery = ref("");
const suggestions = ref(["Jeans", "T-Shirts", "អាវក្រៅ", "អាវក្រណាត់"]);
const showSuggestions = ref(false);
const activeIndex = ref(0);

const filteredSuggestions = computed(() => {
  return suggestions.value.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const handleInput = () => {
  showSuggestions.value = searchQuery.value.length > 0;
};

const selectSuggestion = (suggestion) => {
  searchQuery.value = suggestion;
  showSuggestions.value = false;
};

const setSlide = (index) => {
  const carousel = document.querySelector("[data-carousel-inner]");
  const items = carousel.querySelectorAll("[data-carousel-item]");

  items[activeIndex.value].classList.add("hidden");
  items[activeIndex.value].classList.remove("active");
  activeIndex.value = index;
  items[activeIndex.value].classList.remove("hidden");
  items[activeIndex.value].classList.add("active");
};

const prevSlide = () => {
  setSlide((activeIndex.value - 1 + 3) % 3);
};

const nextSlide = () => {
  setSlide((activeIndex.value + 1) % 3);
};

const changeSlide = () => {
  const carousel = document.querySelector("[data-carousel-inner]");
  const items = carousel.querySelectorAll("[data-carousel-item]");

  items[activeIndex.value].classList.add("hidden");
  items[activeIndex.value].classList.remove("active");
  activeIndex.value = (activeIndex.value + 1) % items.length;
  items[activeIndex.value].classList.remove("hidden");
  items[activeIndex.value].classList.add("active");
};

onMounted(() => {
  const carousel = document.querySelector("[data-carousel-inner]");
  const items = carousel.querySelectorAll("[data-carousel-item]");

  items[activeIndex.value].classList.remove("hidden");
  items[activeIndex.value].classList.add("active");

  setInterval(changeSlide, 3000);
});
</script>

<style>
/* Optional: Add custom styles for the autocomplete dropdown */
.scroll-fade {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-fade.show {
  opacity: 1;
  transform: translateY(0);
}
</style>

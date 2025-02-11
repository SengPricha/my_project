<script setup>
import { ref, onMounted, inject } from "vue";

// Inject cart function (ensure a provider exists)
const addToCart = inject("addToCart", (product) =>
  console.warn("addToCart is not provided", product)
);

// List of products
const menuProducts = ref([
  {
    id: 1,
    category: "អាវក្រៅ",
    name: "អាវក្រៅL",
    price: 6,
    imgSrc: "./src/assets/img/kit1.png",
  },
  {
    id: 2,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: "./src/assets/img/c5.png",
  },
  {
    id: 3,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: "./src/assets/img/c6.png",
  },
  {
    id: 4,
    category: "អាវក្រៅ",
    name: "អាវក្រៅM",
    price: 9,
    imgSrc: "./src/assets/img/kit2.png",
  },
  {
    id: 5,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 9,
    imgSrc: "./src/assets/img/c3.png",
  },
  {
    id: 6,
    category: "អាវក្រៅ",
    name: "អាវក្រៅL",
    price: 9,
    imgSrc: "./src/assets/img/kit4.png",
  },
  {
    id: 37,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: "./src/assets/img/x1.png",
  },
  {
    id: 38,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: "./src/assets/img/x2.png",
  },
  {
    id: 7,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: "./src/assets/img/c1.png",
  },
  {
    id: 8,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: "./src/assets/img/c2.png",
  },
  {
    id: 39,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: "./src/assets/img/x3.png",
  },
  {
    id: 9,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: "./src/assets/img/c4.png",
  },
  {
    id: 40,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: "./src/assets/img/x4.png",
  },
  {
    id: 41,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: "./src/assets/img/x5.png",
  },
  {
    id: 42,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: "./src/assets/img/x6.png",
  },
  {
    id: 43,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: "./src/assets/img/x7.png",
  },
  {
    id: 44,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: "./src/assets/img/x8.png",
  },
  {
    id: 45,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: "./src/assets/img/x9.png",
  },
  {
    id: 46,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: "./src/assets/img/x10.png",
  },
  {
    id: 10,
    category: "អាវក្រៅ",
    name: "អាវក្រៅL",
    price: 6,
    imgSrc: "./src/assets/img/kit9.png",
  },
  {
    id: 11,
    category: "អាវក្រៅ",
    name: "អាវក្រៅM",
    price: 9,
    imgSrc: "./src/assets/img/kit6.png",
  },
  {
    id: 12,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 9,
    imgSrc: "./src/assets/img/c7.png",
  },
  {
    id: 13,
    category: "អាវក្រៅ",
    name: "អាវក្រៅL",
    price: 9,
    imgSrc: "./src/assets/img/kit8.png",
  },
  {
    id: 14,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: "./src/assets/img/c8.png",
  },
  {
    id: 15,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: "./src/assets/img/c9.png",
  },
  {
    id: 16,
    category: "អាវក្រៅ",
    name: "អាវក្រៅL",
    price: 6,
    imgSrc: "./src/assets/img/kit7.png",
  },
  {
    id: 47,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: "./src/assets/img/x11.png",
  },
  {
    id: 48,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: "./src/assets/img/x12.png",
  },
  {
    id: 17,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: "./src/assets/img/c12.png",
  },
  {
    id: 18,
    category: "អាវក្រៅ",
    name: "អាវក្រៅM",
    price: 9,
    imgSrc: "./src/assets/img/kit10.png",
  },
  {
    id: 19,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: "./src/assets/img/c11.png",
  },
  {
    id: 20,
    category: "អាវក្រៅ",
    name: "អាវក្រៅL",
    price: 9,
    imgSrc: "./src/assets/img/kit12.png",
  },
  {
    id: 21,
    category: "អាវក្រៅ",
    name: "អាវក្រៅS",
    price: 9,
    imgSrc: "./src/assets/img/kit13.png",
  },
  {
    id: 22,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: "./src/assets/img/c10.png",
  },
  {
    id: 23,
    category: "អាវក្រៅ",
    name: "អាវក្រៅS",
    price: 9,
    imgSrc: "./src/assets/img/kit11.png",
  },
  {
    id: 24,
    category: "អាវក្រៅ",
    name: "អាវក្រៅS",
    price: 9,
    imgSrc: "./src/assets/img/kit3.png",
  },
  {
    id: 25,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: "./src/assets/img/b1.png",
  },
  {
    id: 26,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: "./src/assets/img/z2.png",
  },
  {
    id: 27,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: "./src/assets/img/z3.png",
  },
  {
    id: 28,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: "./src/assets/img/z4.png",
  },
  {
    id: 29,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: "./src/assets/img/z5.png",
  },
  {
    id: 30,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: "./src/assets/img/z6.png",
  },
  {
    id: 31,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: "./src/assets/img/b7.png",
  },
  {
    id: 32,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: "./src/assets/img/b8.png",
  },
  {
    id: 33,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: "./src/assets/img/b9.png",
  },
  {
    id: 34,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: "./src/assets/img/b10.png",
  },
  {
    id: 35,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: "./src/assets/img/b11.png",
  },
  {
    id: 36,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: "./src/assets/img/b12.png",
  },
]);

// Active category (default: all)
const activeCategory = ref("AllCategory");

// Filtered product list
const filteredProducts = ref([...menuProducts.value]);

// Function to filter products
const filterProducts = (category) => {
  activeCategory.value = category;
  filteredProducts.value =
    category === "AllCategory"
      ? [...menuProducts.value]
      : menuProducts.value.filter((p) => p.category === category);
};

// Load all products on mount
onMounted(() => {
  filterProducts("AllCategory");
});
</script>

<template>
  <div>
    <div class="p-6 mt-40">
      <!-- Filter Buttons -->
      <div
        class="flex gap-3 mb-10 justify-center items-center flex-wrap font-khmer"
      >
        <button
          v-for="category in [
            'AllCategory',
            'អាវក្រៅ',
            'អាវក្រណាត់',
            'Jeans',
            'Tshirt',
          ]"
          :key="category"
          class="px-16 py-2 text-black rounded-full hover:bg-gray-900 hover:text-white flex-wrap shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          :class="{ 'bg-black text-white': activeCategory === category }"
          @click="filterProducts(category)"
        >
          {{ category }}
        </button>
      </div>

      <!-- Product Display -->
      <div class="flex flex-wrap gap-6 xl:gap-10 justify-center xl:mx-56">
        <div
          v-for="product in filteredProducts"
          :key="product.title"
          class="w-[200px] border border-black p-4 rounded-lg text-center"
        >
          <img
            :src="product.imgSrc"
            :alt="product.name"
            class="rounded mb-3 hover:scale-105"
          />
          <h3 class="text-lg font-semibold font-Kamchea">{{ product.name }}</h3>
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
</template>

<script setup>
import { ref, onMounted, inject } from "vue";

import kit1 from "/src/assets/img/kit1.png";
  import c5 from "/src/assets/img/c5.png";
  import c6 from "/src/assets/img/c6.png";
  import kit2 from "/src/assets/img/kit2.png";
  import c3 from "/src/assets/img/c3.png";
  import kit4 from "/src/assets/img/kit4.png";
  import x1 from "/src/assets/img/x1.png";
  import x2 from "/src/assets/img/x2.png";
  import c1 from "/src/assets/img/c1.png";
  import c2 from "/src/assets/img/c2.png";
  import x3 from "/src/assets/img/x3.png";
  import c4 from "/src/assets/img/c4.png";
  import x4 from "/src/assets/img/x4.png";
  import x5 from "/src/assets/img/x5.png";
  import x6 from "/src/assets/img/x6.png";
  import x7 from "/src/assets/img/x7.png";
  import x8 from "/src/assets/img/x8.png";
  import x9 from "/src/assets/img/x9.png";
  import x10 from "/src/assets/img/x10.png";
  import kit9 from "/src/assets/img/kit9.png";
  import kit6 from "/src/assets/img/kit6.png";
  import c7 from "/src/assets/img/c7.png";
  import kit8 from "/src/assets/img/kit8.png";
  import c8 from "/src/assets/img/c8.png";
  import c9 from "/src/assets/img/c9.png";
  import kit7 from "/src/assets/img/kit7.png";
  import x11 from "/src/assets/img/x11.png";
  import x12 from "/src/assets/img/x12.png";
  import c12 from "/src/assets/img/c12.png";
  import kit10 from "/src/assets/img/kit10.png";
  import c11 from "/src/assets/img/c11.png";
  import kit12 from "/src/assets/img/kit12.png";
  import kit13 from "/src/assets/img/kit13.png";
  import c10 from "/src/assets/img/c10.png";
  import kit11 from "/src/assets/img/kit11.png";
  import kit3 from "/src/assets/img/kit3.png";
  import b1 from "/src/assets/img/b1.png";
  import z2 from "/src/assets/img/z2.png";
  import z3 from "/src/assets/img/z3.png";
  import z4 from "/src/assets/img/z4.png";
  import z5 from "/src/assets/img/z5.png";
  import z6 from "/src/assets/img/z6.png";
  import b7 from "/src/assets/img/b7.png";
  import b8 from "/src/assets/img/b8.png";
  import b9 from "/src/assets/img/b9.png";
  import b10 from "/src/assets/img/b10.png";
  import b11 from "/src/assets/img/b11.png";
  import b12 from "/src/assets/img/b12.png";

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
    imgSrc: kit1,
  },
  {
    id: 2,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: c5,
  },
  {
    id: 3,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: c6,
  },
  {
    id: 4,
    category: "អាវក្រៅ",
    name: "អាវក្រៅM",
    price: 9,
    imgSrc: kit2,
  },
  {
    id: 5,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 9,
    imgSrc: c3,
  },
  {
    id: 6,
    category: "អាវក្រៅ",
    name: "អាវក្រៅL",
    price: 9,
    imgSrc: kit4,
  },
  {
    id: 37,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: x1,
  },
  {
    id: 38,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: x2,
  },
  {
    id: 7,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: c1,
  },
  {
    id: 8,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: c2,
  },
  {
    id: 39,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: x3,
  },
  {
    id: 9,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: c4,
  },
  {
    id: 40,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: x4,
  },
  {
    id: 41,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: x5,
  },
  {
    id: 42,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: x6,
  },
  {
    id: 43,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: x7,
  },
  {
    id: 44,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: x8,
  },
  {
    id: 45,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: x9,
  },
  {
    id: 46,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: x10,
  },
  {
    id: 10,
    category: "អាវក្រៅ",
    name: "អាវក្រៅL",
    price: 6,
    imgSrc: kit9,
  },
  {
    id: 11,
    category: "អាវក្រៅ",
    name: "អាវក្រៅM",
    price: 9,
    imgSrc: kit6,
  },
  {
    id: 12,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 9,
    imgSrc: c7,
  },
  {
    id: 13,
    category: "អាវក្រៅ",
    name: "អាវក្រៅL",
    price: 9,
    imgSrc: kit8,
  },
  {
    id: 14,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: c8,
  },
  {
    id: 15,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: c9,
  },
  {
    id: 16,
    category: "អាវក្រៅ",
    name: "អាវក្រៅL",
    price: 6,
    imgSrc: kit7,
  },
  {
    id: 47,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: x11,
  },
  {
    id: 48,
    category: "អាវក្រណាត់",
    name: "អាវក្រណាត់L",
    price: 9,
    imgSrc: x12,
  },
  {
    id: 17,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: c12,
  },
  {
    id: 18,
    category: "អាវក្រៅ",
    name: "អាវក្រៅM",
    price: 9,
    imgSrc: kit10,
  },
  {
    id: 19,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: c11,
  },
  {
    id: 20,
    category: "អាវក្រៅ",
    name: "អាវក្រៅL",
    price: 9,
    imgSrc: kit12,
  },
  {
    id: 21,
    category: "អាវក្រៅ",
    name: "អាវក្រៅS",
    price: 9,
    imgSrc: kit13,
  },
  {
    id: 22,
    category: "Jeans",
    name: "ចង្កេះ30",
    price: 13,
    imgSrc: c10,
  },
  {
    id: 23,
    category: "អាវក្រៅ",
    name: "អាវក្រៅS",
    price: 9,
    imgSrc: kit11,
  },
  {
    id: 24,
    category: "អាវក្រៅ",
    name: "អាវក្រៅS",
    price: 9,
    imgSrc: kit3,
  },
  {
    id: 25,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: b1,
  },
  {
    id: 26,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: z2,
  },
  {
    id: 27,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: z3,
  },
  {
    id: 28,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: z4,
  },
  {
    id: 29,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: z5,
  },
  {
    id: 30,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: z6,
  },
  {
    id: 31,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: b7,
  },
  {
    id: 32,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: b8,
  },
  {
    id: 33,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: b9,
  },
  {
    id: 34,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: b10,
  },
  {
    id: 35,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: b11,
  },
  {
    id: 36,
    category: "Tshirt",
    name: "អាវយឺតS",
    price: 9,
    imgSrc: b12,
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

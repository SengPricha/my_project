<template>
  <div class="bg-black text-white font-khmer pt-2 z-[1000] fixed w-full">
    <marquee>
      ស្វាគមន៍មកកាន់គេហទំព័រ Rayuth Fashion មានលក់សំលៀកបំពាក់ជាច្រើនប្រភេទដូចជា
      ខោជើងវែង អាវក្រណាត់ អាវយឺត អាវក្រៅ និងអីវ៉ាន់ជាច្រើនមុខទៀត។
      ហាងយើងខ្ញុំផ្ដោតទៅលើគុណភាព តំលៃ និងម៉ូតថ្មីៗដែលនាំចូលពីក្រៅប្រទេស។
    </marquee>
  </div>
  <header
    class="flex justify-between items-center py-6 px-8 text-black shadow md:px-32 z-[1000] fixed w-full mt-10 bg-white"
  >
    <router-link to="/" class="flex items-center">
      <img
        class="w-16 h-16 hover:scale-105 transition-all"
        src="/src/assets/img/IMG_1167.png"
        alt="logo"
      />
      <h1 class="ml-1 font-bold font-serif text-xl">
        <span class="text-red-500">Rayuth</span> Fashion
      </h1>
    </router-link>
    <ul class="hidden xl:flex items-center gap-4 font-semibold text-lg">
      <router-link to="/home" v-slot="{ isActive }">
        <li
          :class="[
            'p-3 rounded-md transition-all cursor-pointer',
            isActive
              ? 'bg-black text-white'
              : 'hover:text-white hover:bg-black',
          ]"
        >
          Home
        </li>
      </router-link>
      <router-link to="/about" v-slot="{ isActive }">
        <li
          :class="[
            'p-3 rounded-md transition-all cursor-pointer',
            isActive
              ? 'bg-black text-white'
              : 'hover:text-white hover:bg-black',
          ]"
        >
          About
        </li>
      </router-link>
      <router-link to="/contact" v-slot="{ isActive }">
        <li
          :class="[
            'p-3 rounded-md transition-all cursor-pointer',
            isActive
              ? 'bg-black text-white'
              : 'hover:text-white hover:bg-black',
          ]"
        >
          Contact
        </li>
      </router-link>
      <router-link to="/category" v-slot="{ isActive }">
        <li
          :class="[
            'p-3 rounded-md transition-all cursor-pointer',
            isActive
              ? 'bg-black text-white'
              : 'hover:text-white hover:bg-black',
          ]"
        >
          Category
        </li>
      </router-link>
      <router-link to="/service" v-slot="{ isActive }">
        <li
          :class="[
            'p-3 rounded-md transition-all cursor-pointer',
            isActive
              ? 'bg-black text-white'
              : 'hover:text-white hover:bg-black',
          ]"
        >
          Service
        </li>
      </router-link>
    </ul>
    <div
      class="relative flex items-center justify-center gap-3 font-semibold text-2xl"
    >
      <router-link to="/cart" class="flex items-center">
        <font-awesome-icon
          icon="fa-solid fa-cart-shopping"
          class="cursor-pointer"
        />
        <p
          class="absolute top-[-5px] right-[80px] bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-sm text-white"
        >
          {{ cart.length }}
        </p>
      </router-link>
      <router-link to="/">
        <button
          class="bg-black text-white rounded-full text-sm p-2 xl:w-20 xl:h-10 transition-transform ease-in-out hover:scale-[1.02]"
        >
          Login
        </button>
      </router-link>
    </div>

    <font-awesome-icon
      icon="fa-solid fa-bars"
      class="xl:hidden block cursor-pointer text-3xl"
      @click="isMenuOpen = !isMenuOpen"
    />

    <div
      :class="[
        'absolute xl:hidden top-32 z-0 left-0 w-full shadow bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-opacity',
        isMenuOpen ? 'flex' : 'hidden',
      ]"
      style="transition: 0.3s ease, opacity 0.3s ease"
    >
      <router-link
        to="/home"
        class="w-full"
        @click="closeMenu"
        v-slot="{ isActive }"
      >
        <li
          :class="[
            'list-none w-full text-center p-4 transition-all cursor-pointer',
            isActive
              ? 'bg-black text-white'
              : 'hover:bg-black hover:text-white',
          ]"
        >
          Home
        </li>
      </router-link>
      <router-link
        to="/about"
        class="w-full"
        @click="closeMenu"
        v-slot="{ isActive }"
      >
        <li
          :class="[
            'list-none w-full text-center p-4 transition-all cursor-pointer',
            isActive
              ? 'bg-black text-white'
              : 'hover:bg-black hover:text-white',
          ]"
        >
          About
        </li>
      </router-link>
      <router-link
        to="/contact"
        class="w-full"
        @click="closeMenu"
        v-slot="{ isActive }"
      >
        <li
          :class="[
            'list-none w-full text-center p-4 transition-all cursor-pointer',
            isActive
              ? 'bg-black text-white'
              : 'hover:bg-black hover:text-white',
          ]"
        >
          Contact
        </li>
      </router-link>
      <router-link
        to="/category"
        class="w-full"
        @click="closeMenu"
        v-slot="{ isActive }"
      >
        <li
          :class="[
            'list-none w-full text-center p-4 transition-all cursor-pointer',
            isActive
              ? 'bg-black text-white'
              : 'hover:bg-black hover:text-white',
          ]"
        >
          Category
        </li>
      </router-link>
      <router-link
        to="/service"
        class="w-full"
        @click="closeMenu"
        v-slot="{ isActive }"
      >
        <li
          :class="[
            'list-none w-full text-center p-4 transition-all cursor-pointer',
            isActive
              ? 'bg-black text-white'
              : 'hover:bg-black hover:text-white',
          ]"
        >
          Services
        </li>
      </router-link>
    </div>
  </header>

  <!-- Router View -->
  <router-view></router-view>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

import { reactive, provide } from "vue";

// Shared cart state
const cart = reactive([]);

// Provide cart state and function globally
provide("cart", cart);
provide("addToCart", (product) => {
  const item = cart.find((p) => p.id === product.id);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
});

const isMenuOpen = ref(false);

// Function to close the mobile menu
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style></style>

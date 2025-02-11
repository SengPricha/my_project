<script setup>
import { inject } from "vue";

// Inject cart state and functions
const cart = inject("cart");

const increaseQuantity = (item) => {
  item.quantity += 1;
};

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity -= 1;
  }
};

const removeFromCart = (item) => {
  const index = cart.indexOf(item);
  if (index !== -1) {
    cart.splice(index, 1);
  }
};

const totalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);
const totalPrice = () =>
  cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
</script>

<template>
  <div class="flex mt-40 justify-center">
    <div class="p-4">
      <h2 class="text-3xl font-bold mb-4 text-center font-sans">
        Shopping Cart
      </h2>

      <div
        v-if="cart.length === 0"
        class="text-gray-500 text-2xl xl:mt-60 xl:mb-[300px] flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            color="currentColor"
          >
            <circle cx="12" cy="12" r="10" />
            <path
              d="M10 11L8.5 9.5m0 0L7 8m1.5 1.5L7 11m1.5-1.5L10 8m7 3l-1.5-1.5m0 0L14 8m1.5 1.5L14 11m1.5-1.5L17 8m-9 9a5 5 0 0 1 4-2c1.636 0 3.088.786 4 2"
            />
          </g>
        </svg>
        Your cart is empty.
      </div>

      <div v-else class="flex flex-col gap-4 justify-center items-center">
        <div
          v-for="item in cart"
          :key="item.id"
          class="bg-gray-100 p-4 rounded-lg mb-4 shadow flex items-center w-[430px] xl:w-[600px]"
        >
          <img
            :src="item.imgSrc"
            :alt="item.name"
            class="w-20 h-20 object-cover rounded mr-4"
          />

          <div class="flex-1">
            <h3 class="font-semibold text-lg">{{ item.name }}</h3>
            <p class="text-gray-600">Price: ${{ item.price }}</p>
          </div>

          <div class="flex items-center space-x-2">
            <button
              @click="decreaseQuantity(item)"
              class="px-3 py-1 bg-gray-300 text-gray-700 rounded"
            >
              -
            </button>
            <span class="text-lg font-semibold">{{ item.quantity }}</span>
            <button
              @click="increaseQuantity(item)"
              class="px-3 py-1 bg-gray-300 text-gray-700 rounded"
            >
              +
            </button>
          </div>

          <p class="font-semibold mx-4">
            Total: ${{ item.price * item.quantity }}
          </p>

          <button @click="removeFromCart(item)" class="ml-4">
            <font-awesome-icon
              icon="fa-solid fa-trash"
              class="text-red-500 text-3xl"
            />
          </button>
        </div>

        <!-- Cart Summary -->
        <div
          class="bg-gray-200 p-4 rounded-lg mt-4 w-[430px] xl:w-[600px] z-[100]"
        >
          <h3 class="text-lg font-semibold">Cart Summary</h3>
          <div class="flex justify-between">
            <p>Sub Total: ({{ totalItems() }} item)</p>
            <p>Total Price: ${{ totalPrice() }}</p>
          </div>
        </div>
        <!-- Checkout Button -->
        <div>
          <button
            class="bg-black text-white text-center px-40 py-5 mt-5 rounded-lg transition-transform ease-in-out hover:scale-[1.02]"
          >
            PROCEED TO BUY
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

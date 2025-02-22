<script setup>
import { inject, ref } from "vue";
import { useRouter } from "vue-router";

const cart = inject("cart");
const userData = inject("userData");
const router = useRouter();

// Calculate total price from cart
const totalPrice = () =>
  cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

// Delivery companies
const deliveryCompanies = ["Virak Buntham Express", "Capitol Express", "J&T Express"];

// Validation and conditional navigation using router-link click handler
const proceedToPayment = (e) => {
  if (
    !userData.receiverName ||
    !userData.phoneNumber ||
    !userData.address ||
    !userData.selectedCompany
  ) {
    alert("Please fill in all fields before proceeding to payment.");
    e.preventDefault(); // Prevent navigation if validation fails
  }
};
</script>

<template>
  <div class="flex justify-center pt-40">
    <!-- Checkout Form -->
    <div class="bg-gray-100 p-6 rounded-lg w-[450px]">
      <h2 class="text-center text-2xl font-bold mb-4">Checkout</h2>

      <!-- Receiver Information -->
      <div class="mb-4">
        <label class="block font-semibold">Receiver Name:</label>
        <input
          v-model="userData.receiverName"
          type="text"
          class="w-full p-2 border rounded-md"
          placeholder="Enter your name"
        />
      </div>

      <div class="mb-4">
        <label class="block font-semibold">Phone Number:</label>
        <input
          v-model="userData.phoneNumber"
          type="text"
          class="w-full p-2 border rounded-md"
          placeholder="Enter phone number"
        />
      </div>

      <div class="mb-4">
        <label class="block font-semibold">Address:</label>
        <textarea
          v-model="userData.address"
          class="w-full p-2 border rounded-md"
          placeholder="Enter address"
        ></textarea>
      </div>

      <!-- Delivery Company Selection -->
      <div class="mb-4">
        <label class="block font-semibold">Choose Delivery Company:</label>
        <select
          v-model="userData.selectedCompany"
          class="w-full p-2 border rounded-md"
        >
          <option value="" disabled>Select Company</option>
          <option
            v-for="company in deliveryCompanies"
            :key="company"
            :value="company"
          >
            {{ company }}
          </option>
        </select>
      </div>

      <!-- Order Summary -->
      <div class="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 class="font-semibold text-lg">Order Summary</h3>
        <ul>
          <li v-for="item in cart" :key="item.id" class="flex justify-between">
            <span>{{ item.name }} - {{ item.quantity }} x ${{ item.price }}</span>
            <span>= ${{ item.quantity * item.price }}</span>
          </li>
        </ul>
        <hr class="my-2" />
        <p class="font-semibold text-lg">Total Price: ${{ totalPrice() }}</p>
      </div>

      <!-- Router-Link for Payment -->
      <router-link
        to="/cart/checkout/payment"
        @click="proceedToPayment"
        class="bg-black text-white w-full py-2 rounded-md text-lg transition text-center block"
      >
        Proceed to Payment
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject } from "vue";

// Access global state
const cart = inject("cart");
const userData = inject("userData");

// Step control flags
const showThankYou = ref(false);
const showQRCode = ref(false);

// List of available banks (Cambodian banks as examples)
const availableBanks = ["ABA Bank", "Acleda Bank", "Wing", "TrueMoney"];

// Mapping bank names to QR code URLs (using a public QR code generator)
const bankQRCodeUrls = {
  "ABA Bank":
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=KHQR+SENCPRICHA+0.00+USD",
  "Acleda Bank":
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=KHQR+SENCPRICHA+0.00+USD",
  Wing:
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=KHQR+SENCPRICHA+0.00+USD",
  TrueMoney:
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=KHQR+SENCPRICHA+0.00+USD",
};

// Computed property to get the QR code URL based on the selected bank
const qrCodeUrl = computed(() => {
  return bankQRCodeUrls[userData.selectedBank] || "";
});

// Function to display the QR code based on the selected bank
const displayQRCode = () => {
  if (!userData.selectedBank) {
    alert("Please select a bank first.");
    return;
  }
  showQRCode.value = true;
};

// Function to simulate completing payment
const completePayment = () => {
  if (!userData.selectedBank) {
    alert("Please select a bank first.");
    return;
  }
  if (!showQRCode.value) {
    alert("Please display the QR code first.");
    return;
  }
  // Simulate successful payment
  showThankYou.value = true;
};

// (Optional) Function to print the invoice
const invoiceRef = ref(null);
const printInvoice = () => {
  const printContent = invoiceRef.value.innerHTML;
  const originalContent = document.body.innerHTML;
  document.body.innerHTML = printContent;
  window.print();
  document.body.innerHTML = originalContent;
};
</script>

<template>
  <div class="bg-gray-100 p-6 rounded-lg pt-40">
    <h2 class="text-center text-2xl font-bold mb-4">Payment</h2>
    <!-- Payment Step -->
    <div v-if="!showThankYou" class="flex justify-center items-center flex-col">
      <p class="mb-2 font-semibold">Choose your bank or payment method:</p>
      <select
        v-model="userData.selectedBank"
        class="w-[400px] xl:w-[600px] p-2 border rounded-md mb-4"
      >
        <option value="" disabled>Select a Bank/Method</option>
        <option v-for="bank in availableBanks" :key="bank" :value="bank">
          {{ bank }}
        </option>
      </select>

      <!-- Button to show the QR Code -->
      <button
        @click="displayQRCode"
        class="bg-black text-white w-[400px] xl:w-[600px] py-2 rounded-md text-lg hover:bg-black/30 transition mb-4"
      >
        Show Bank QR Code
      </button>

      <!-- Display the QR Code if available -->
      <div v-if="showQRCode" class="flex justify-center mb-4">
        <img :src="qrCodeUrl" alt="QR Code" class="border" />
      </div>

      <!-- Button to complete payment -->
      <button
        @click="completePayment"
        class="bg-black text-white w-[400px] xl:w-[600px] py-2 rounded-md text-lg hover:bg-black/30 transition"
      >
        Complete Payment
      </button>
    </div>

    <!-- Thank You & Invoice Print Step -->
    <div v-else class="flex justify-center items-center flex-col">
      <p class="text-center text-xl mb-4 font-semibold">
        Thank you for your payment!
      </p>
      <button
        @click="printInvoice"
        class="bg-black text-white w-[400px] xl:w-[600px] py-2 rounded-md text-lg hover:bg-black/30 transition mb-3"
      >
        Print Invoice
      </button>
    </div>
  </div>

  <!-- The actual invoice (hidden by default) -->
  <div ref="invoiceRef" class="hidden">
    <div class="invoice-box bg-white p-6 rounded-md w-[400px] mx-auto">
      <h2 class="text-center text-2xl font-bold">Invoice</h2>
      <div class="mt-4 border p-4 rounded-md">
        <p><strong>Receiver Name:</strong> {{ userData.receiverName }}</p>
        <p><strong>Phone Number:</strong> {{ userData.phoneNumber }}</p>
        <p><strong>Address:</strong> {{ userData.address }}</p>
        <p><strong>Delivery Company:</strong> {{ userData.selectedCompany }}</p>
        <p><strong>Payment Method:</strong> {{ userData.selectedBank }}</p>
        <hr class="my-2" />
        <p><strong>Order Summary:</strong></p>
        <ul>
          <li v-for="item in cart" :key="item.id">
            {{ item.name }} - {{ item.quantity }} x ${{ item.price }} = $
            {{ item.quantity * item.price }}
          </li>
        </ul>
        <hr class="my-2" />
        <p>
          <strong>Total Price:</strong>
          <span class="font-bold">
            ${{
              cart.reduce((sum, item) => sum + item.quantity * item.price, 0)
            }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Print styling: Only show the invoice-box when printing */
@media print {
  body * {
    visibility: hidden !important;
  }
  .invoice-box,
  .invoice-box * {
    visibility: visible !important;
  }
  .invoice-box {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
}
</style>

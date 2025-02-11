<template>
  <section class="max-w-7xl mx-auto p-8 pt-60">
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <!-- Contact Form -->
      <div class="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label class="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              v-model="form.name"
              required
              class="w-full mt-2 p-3 border rounded-lg"
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              v-model="form.email"
              required
              class="w-full mt-2 p-3 border rounded-lg"
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-medium">Message</label>
            <textarea
              v-model="form.message"
              required
              rows="4"
              class="w-full mt-2 p-3 border rounded-lg"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-black/80 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <!-- Contact Information -->
      <div>
        <h2 class="text-3xl font-bold text-gray-800 mb-6">
          Contact Information
        </h2>
        <p class="text-gray-600 mb-4">
          Reach out to us for any questions or inquiries. We’re happy to assist
          you!
        </p>

        <div class="space-y-4">
          <p class="text-gray-700">
            <strong>📍 Address:</strong>
            <span class="font-khmer">ផ្លូវជាតិលេខ៥ ក្រុងបាត់ដំបង</span>
          </p>
          <p class="text-gray-700"><strong>📞 Phone:</strong> +123 456 789</p>
          <p class="text-gray-700">
            <strong>✉ Email:</strong> info@rayuthfashion.com
          </p>
        </div>

        <!-- Google Maps Embed -->
        <div class="mt-6">
          <iframe
            class="w-full h-64 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.820669491016!2d103.19887217479317!3d13.095731613013556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31054cbf1b36e15d%3A0xe133afca3eb145e0!2sBattambang%20Province%2C%20Cambodia!5e0!3m2!1sen!2sus!4v1707777777777!5m2!1sen!2sus"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Show success alert
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: `Thank you, ${this.form.name}! We have received your message.`,
        confirmButtonText: "OK",
        confirmButtonColor: "#6D28D9",
      });

      // Clear form after submission
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>

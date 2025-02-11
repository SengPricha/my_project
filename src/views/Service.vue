<template>
  <section class="py-12 mt-40">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="text-center p-6 bg-white rounded-xl text-black shadow-lg hover:shadow-2xl hover:bg-black hover:text-white transition"
        >
          <!-- Icon section with hover effect for color change -->
          <div
            class="text-red-500 text-4xl mb-4 hover:text-white transition duration-300"
          >
            <i :class="service.icon"></i>
          </div>
          <h3 class="text-lg font-semibold mb-2">{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Personal Styling",
          description:
            "Expert fashion advice to help you create your unique style.",
          icon: "fas fa-tshirt", // Fashion icon for styling
        },
        {
          title: "Tailoring Services",
          description:
            "Custom clothing alterations and fittings for perfect comfort.",
          icon: "fas fa-scissors", // Icon for tailoring
        },
        {
          title: "Wardrobe Consultation",
          description:
            "Get the perfect wardrobe pieces for your lifestyle and needs.",
          icon: "fas fa-clipboard-list", // Icon for wardrobe consultation
        },
        {
          title: "Fashion Photography",
          description:
            "Professional photoshoots to showcase your style and brand.",
          icon: "fas fa-camera-retro", // Icon for photography
        },
        {
          title: "E-commerce Solutions",
          description:
            "Build your online store and sell fashion items worldwide.",
          icon: "fas fa-shopping-cart", // Icon for eCommerce
        },
        {
          title: "Fashion Branding",
          description:
            "Create a strong brand identity with our creative services.",
          icon: "fas fa-paint-brush", // Icon for branding
        },
        {
          title: "Runway Show Production",
          description:
            "Organize runway events and fashion shows with a professional touch.",
          icon: "fas fa-users", // Icon for runway events
        },
        {
          title: "Social Media Marketing",
          description:
            "Boost your fashion brand’s presence with targeted social media campaigns.",
          icon: "fas fa-share-alt", // Icon for social media
        },
      ],
    };
  },
};
</script>

<style>
/* Add custom styles if needed */
</style>

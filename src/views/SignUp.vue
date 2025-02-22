<template>
  <div class="flex items-center justify-center min-h-screen mt-10">
    <form @submit.prevent="SignUp">
      <div
        class="flex flex-col w-[450px] xl:w-[750px] h-[550px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-10 rounded-3xl"
      >
        <div class="flex justify-center items-center gap-10">
          <div class="border border-black rounded-full w-24 h-24 p-4 flex">
            <img
              class="w-20 h-20"
              src="/src/assets/img/IMG_1167.png"
              alt="logo"
            />
          </div>

          <div class="flex text-2xl font-serif">
            <h1 class="text-red-500">
              Rayuth <span class="text-black">Fashion</span>
            </h1>
          </div>
        </div>

        <div class="flex flex-col text-center mt-5">
          <input
            id="name"
            v-model="name"
            class="p-3 border border-black rounded-2xl text-xl"
            type="text"
            placeholder="Username"
          /><br />
          <input
            id="email"
            v-model="email"
            class="p-3 border border-black rounded-2xl text-xl"
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            id="password"
            v-model="password"
            class="p-3 border border-black rounded-2xl text-xl"
            type="password"
            placeholder="Password"
          /><br />
          <button
            class="bg-black text-white p-2 rounded-2xl text-base"
            type="submit"
          >
            SignUp
          </button>

          <div class="flex justify-center items-center">
            <div class="hover:underline mt-2">Already have an account?</div>
            <router-link to="/login" class="mt-2">Login</router-link>
          </div>
        </div>

        <div class="flex justify-between mt-5">
          <div><a class="hover:underline mt-2" href="#">English (EN)</a></div>
          <div>
            <a class="hover:underline mt-2" href="#">Cookies notice</a>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2"; // Import SweetAlert2

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      data: [],
    };
  },
  methods: {
    SignUp() {
      // Push the user data into the array
      this.data.push([this.name, this.email, this.password]);

      // Store the data in sessionStorage
      sessionStorage.setItem("user", JSON.stringify(this.data));

      // Clear form fields
      this.name = "";
      this.email = "";
      this.password = "";

      // Show success popup and redirect
      Swal.fire({
        icon: "success",
        title: "SignUp Successful!",
        text: "You have successfully signed up.",
        confirmButtonText: "OK",
        confirmButtonColor: "#6D28D9",
      }).then(() => {
        // Redirect to login page
        this.$router.push("/login");
      });
    },
  },
};
</script>

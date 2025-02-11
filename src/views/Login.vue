<template>
  <div class="flex items-center justify-center min-h-screen mt-10">
    <form @submit.prevent="login">
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
            id="password"
            v-model="password"
            class="p-3 border border-black rounded-2xl text-xl"
            type="password"
            placeholder="Password"
          /><br />
          <button
            type="submit"
            onclick="login()"
            class="bg-black text-white p-2 rounded-2xl text-xl"
          >
            Login
          </button>
          <a class="hover:underline mt-2" href="#">Forgot Password?</a>
          <div class="flex justify-center items-center">
            <div class="hover:underline mt-2">Don't have an account?</div>
            <router-link to="/signup" class="mt-2"
              >Create new account</router-link
            >
          </div>
        </div>
        <div class="flex justify-center gap-5 items-center mt-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 128 128"
            >
              <path
                fill="#fff"
                d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"
              />
              <path
                fill="#e33629"
                d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"
              />
              <path
                fill="#f8bd00"
                d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"
              />
              <path
                fill="#587dbd"
                d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"
              />
              <path
                fill="#319f43"
                d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11.703 5.616c.03-.905.278-2.237 1.145-3.112c.805-.813 1.785-1.209 2.395-1.39a.347.347 0 0 1 .45.353c-.04.866-.268 2.158-.856 2.85c-.554.652-1.444 1.516-2.749 1.662a.348.348 0 0 1-.385-.363"
              />
              <path
                fill="currentColor"
                d="M13.937 22.17c.627.24 1.26.482 1.833.482c1.227 0 4.798-2.83 4.926-5.768a.4.4 0 0 0-.215-.36c-.908-.508-2.392-1.774-2.443-3.615c-.06-2.146 1.017-3.85 1.832-4.555c.184-.159.247-.439.083-.617c-.742-.81-2.234-1.925-3.596-1.898c-.99.02-1.883.39-2.65.706c-.587.243-1.1.455-1.526.455c-.403 0-.887-.21-1.443-.453c-.748-.326-1.626-.708-2.61-.708c-1.824 0-5.428 1.513-5.428 7.352c0 3.095 3.195 9.543 5.892 9.461c.582 0 1.204-.24 1.822-.48c.608-.236 1.211-.47 1.767-.47c.537 0 1.143.233 1.756.468"
              />
            </svg>
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
      password: "",
    };
  },
  methods: {
    login() {
      // Retrieve user data from sessionStorage
      const data = JSON.parse(sessionStorage.getItem("user"));

      if (!data) {
        Swal.fire({
          title: "Error",
          text: "No user data found. Please sign up first.",
          icon: "error",
        });
        return;
      }

      let isAuthenticated = false;

      // Check if the entered credentials match any user in the data
      for (let i = 0; i < data.length; i++) {
        if (data[i][0] === this.name && data[i][2] === this.password) {
          isAuthenticated = true;
          break;
        }
      }

      // Show success or error message based on authentication
      if (isAuthenticated) {
        Swal.fire({
          title: "Login Success",
          text: "You are logged in successfully!",
          icon: "success",
        }).then(() => {
          // Redirect to another page after successful login
          this.$router.push("/home"); // Uncomment if using Vue Router
        });
      } else {
        Swal.fire({
          title: "Not Found",
          text: "Username or password not found.",
          icon: "error",
        });
      }

      // Clear the form fields after submission
      this.name = "";
      this.password = "";
    },
  },
};
</script>

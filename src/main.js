import { createApp, reactive } from "vue";
import "./style.css";
import App from "./App.vue";

import "@fortawesome/fontawesome-free/css/all.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router"; 

import {
  faCartShopping,
  faBars,
  faTruckFast,
  faMedal,
  faTrash,
  faBagShopping,
  faMagnifyingGlass,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

// Add the icons to the FontAwesome library
library.add(
  faCartShopping,
  faTruckFast,
  faArrowRightArrowLeft,
  faBagShopping,
  faMedal,
  faBars,
  faTrash,
  faMagnifyingGlass
);

// Create the Vue app
const app = createApp(App);

// Create global reactive states for cart and userData
const cart = reactive([]);
const userData = reactive({
  receiverName: "",
  phoneNumber: "",
  address: "",
  selectedCompany: "",
  selectedBank: "",
});

// Provide the reactive states globally
app.provide("cart", cart);
app.provide("userData", userData);

// Register FontAwesomeIcon as a global component
app.component("font-awesome-icon", FontAwesomeIcon);

// Use the router and mount the app
app.use(router).mount("#app");

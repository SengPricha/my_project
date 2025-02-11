import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Icon } from "@iconify/vue/dist/iconify.js";
// import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router"; // Import the router
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
// const app = createApp(App);
// app.use(router);
// app.mount("#app");
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("Icon", Icon)
  .use(router) // Use the router
  .mount("#app");

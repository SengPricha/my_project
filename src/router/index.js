// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

// Import your components

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Category from "../views/Category.vue";
import Service from "../views/Service.vue";
import Cart from "../views/Cart.vue";
import Login from "../views/Login.vue";

const routes = [
  { path: "/home", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/service", component: Service },
  { path: "/cart", component: Cart },
  { path: "/", component: Login },
  { path: "/category", component: Category },
  {
    path: "/signup",
    component: () => import("../views/SignUp.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

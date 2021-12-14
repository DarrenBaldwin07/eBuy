import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from '../views/login.vue'
import Store from '../views/store.vue'
import Cart from '../views/Cart.vue'
import profile from '../views/profile.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
  },

  {
    path: '/store',
    name: 'store',
    component: Store,
  },

  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },

  {
    path: '/profile',
    name: 'profile',
    component: profile,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

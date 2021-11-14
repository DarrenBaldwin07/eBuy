import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from '../views/login.vue'
import Store from '../views/store.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/store',
    name: 'store',
    component: Store,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

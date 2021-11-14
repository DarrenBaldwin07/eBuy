import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Auth from '../views/Auth.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "About",
    component: Auth
      
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

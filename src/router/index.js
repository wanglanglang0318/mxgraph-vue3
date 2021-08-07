import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/example",
    name: "example",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/example.vue"),
  },
  {
    path: "/mxGraph",
    name: "mxGraph",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/example.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

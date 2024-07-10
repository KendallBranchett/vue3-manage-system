import { createRouter, createWebHashHistory } from "vue-router";
import login from "../views/login.vue";

const routes = [
  {
    path: "/login",
    meta: {
      title: "登录",
      noAuth: true,
    },
    component: login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

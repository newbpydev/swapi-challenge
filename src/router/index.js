import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";

import HomeView from "@/views/HomeView";

// import GStore from "@/store";

//# ROUTES         |
const routes = [
  {
    //* Home
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
];

//# ROUTER         |
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  //these hooks do not get a next function and cannot affect the navigation
  NProgress.done();
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";

import HomeView from "@/views/HomeView";
import ResultsView from "@/views/ResultsView";

import GStore from "@/store";

import StarWarsService from "@/services/StarWarsService";

//# ROUTES         |
const routes = [
  {
    //* Home
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    //* ResultsView
    path: "/:type",
    name: "ResultsView",
    component: ResultsView,
    // props: true,
    beforeEnter: (to) => {
      return StarWarsService.getAll(to.params.type)
        .then((response) => {
          GStore.results = response.data;
          // console.log(GStore);
        })
        .catch((error) => {
          console.log(error);
        });
    },
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

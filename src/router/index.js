import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";

import HomeView from "@/views/HomeView";
import ResultsView from "@/views/ResultsView";
import DetailsView from "@/views/DetailsView";

import GStore from "@/store";

import StarWarsService from "@/services/StarWarsService";

//# ROUTES         |
const routes = [
  {
    //* Home
    path: "/",
    name: "HomeView",
    component: HomeView,
    // beforeEnter: async (to) => {
    //   console.log(to);
    //   const res = await StarWarsService.getRoot();
    //   GStore.menu = Object.keys(res.data);
    // },
  },
  {
    //* ResultsView
    path: "/:type",
    name: "ResultsView",
    component: ResultsView,

    // props: true,
    beforeEnter: (to) => {
      console.log("💥💥 /type beforeEnter");
      return StarWarsService.getAll(to.params.type)
        .then((response) => {
          GStore.results = response.data;
          // console.log(GStore);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    beforeUpdate() {
      console.log("⭐⭐ /type beforeUpdate");
    },
  },
  {
    //* DetailsView
    path: "/:type/:id",
    name: "DetailsView",
    component: DetailsView,
    beforeEnter: async (to) => {
      const res = await StarWarsService.getOne(to.params.type, to.params.id);
      GStore.details = res.data;

      // const homeworldObj = StarWarsService.getName(GStore.details.homeworld);
      // console.log(homeworldObj, GStore.details.homeworld);

      // GStore.details = { ...GStore.details, homeworldObj };
      // // const hwRes = await StarWarsService.

      console.log("⭐⭐ from route details view", GStore.details);
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

import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";

import HomeView from "@/views/HomeView";
import ResultsView from "@/views/ResultsView";
import DetailsView from "@/views/DetailsView";

import GStore from "@/store";

import StarWarsService from "@/services/StarWarsService";
// import extraction from "@/utils/extraction";

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
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    beforeEnter: (to) => {
      return StarWarsService.getAll(to.params.type, to.query.page || 1)
        .then((response) => {
          GStore.results = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
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
  NProgress.done();
});

export default router;

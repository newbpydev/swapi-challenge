<template>
  <!-- <header-component></header-component> -->

  <!-- <results-list :resultItems="GStore.results"></results-list> -->
  <results-list :results="GStore.results.results"></results-list>
</template>

<script>
// import HeaderComponent from "@/components/HeaderComponent";
import ResultsList from "@/components/ResultsList.vue";
import StarWarsService from "@/services/StarWarsService";

export default {
  name: "ResultsView",
  components: {
    // HeaderComponent,
    ResultsList,
  },

  inject: ["GStore"],

  data() {
    return {
      results: null,
      type: "",
    };
  },

  beforeRouteUpdate(to) {
    return StarWarsService.getAll(to.params.type)
      .then((response) => {
        this.GStore.results = response.data;
        console.log(this.GStore);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="css" scoped></style>

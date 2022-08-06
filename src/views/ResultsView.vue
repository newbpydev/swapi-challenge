<template>
  <results-list :results="GStore.results.results"></results-list>
</template>

<script>
import ResultsList from "@/components/ResultsList.vue";
import StarWarsService from "@/services/StarWarsService";

export default {
  name: "ResultsView",
  components: {
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
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="css" scoped></style>

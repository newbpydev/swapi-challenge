<template>
  <!-- <header-component></header-component> -->

  <!-- <results-list :resultItems="GStore.results"></results-list> -->
  <results-list></results-list>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import ResultsList from "@/components/ResultsList.vue";
// import StarWarsService from "@/services/StarWarsService";

export default {
  name: "ResultsView",
  components: {
    HeaderComponent,
    ResultsList,
  },

  data() {
    return {
      results: null,
      type: "",
    };
  },

  // inject: ["GStore"],

  watch: {
    // results() {
    //   this.type = this.$route.params.type;
    //   console.log("💥💥💥💥", this.type);
    // },
    // console.log(this.$route.params.category);
  },

  computed: {
    // category() {
    //   return this.$route.params.type;
    // },
  },

  // beforeRouteEnter(routeTo, routeFrom, next) {
  //   StarWarsService.getAll(type).then((response) => {
  //     // console.log(response.data.results);
  //     // console.log(routeTo, routeFrom);
  //     next((component) => {
  //       component.results = response.data.results;
  //     });
  //   });
  // },
};
</script>

<style lang="css" scoped></style>

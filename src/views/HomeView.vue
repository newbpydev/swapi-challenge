<template>
  <!-- <header-component></header-component> -->
  <card-list :menuItems="GStore.menu"></card-list>
</template>

<script>
// import HeaderComponent from "@/components/HeaderComponent";
import CardList from "@/components/CardList.vue";
// import StarWarsService from "@/services/StarWarsService";

export default {
  name: "HomeView",
  components: {
    // HeaderComponent,
    CardList,
  },

  inject: ["GStore"],

  mounted() {
    console.log(this.GStore.menu);
  },

  // data() {
  //   return {
  //     menuItems: null,
  //   };
  // },

  // beforeRouteEnter(routeTo, routeFrom, next) {
  //   StarWarsService.getRoot().then((response) => {
  //     next((component) => {
  //       component.menuItems = response.data;
  //     });
  //   });
  // },
};
</script>

<style lang="css" scoped></style>

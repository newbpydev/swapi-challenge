<template>
  <!-- <header-component></header-component> -->

  <card-list :menuItems="menuItems"></card-list>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import CardList from "@/components/CardList.vue";
import StarWarsService from "@/services/StarWarsService";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    CardList,
  },

  data() {
    return {
      menuItems: null,
    };
  },

  beforeRouteEnter(routeTo, routeFrom, next) {
    StarWarsService.getRoot().then((response) => {
      // console.log(response);
      // console.log(routeTo, routeFrom);
      next((component) => {
        component.menuItems = response.data;
      });
    });
  },
};
</script>

<style lang="css" scoped></style>

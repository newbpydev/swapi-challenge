<template>
  <header-component></header-component>

  <card-list></card-list>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";

import CardList from "@/components/CardList.vue";

export default {
  components: {
    HeaderComponent,

    CardList,
  },

  name: "HomeView",
};
</script>

<style lang="css" scoped></style>

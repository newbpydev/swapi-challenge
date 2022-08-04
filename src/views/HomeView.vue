<template>
  <header-component></header-component>

  <main>
    <card-list></card-list>
  </main>
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

<style lang="css" scoped>
main {
  
}
</style>

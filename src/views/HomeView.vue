<template>
  <card-list :menuItems="GStore.menu"></card-list>
</template>

<script>
import CardList from "@/components/CardList.vue";

export default {
  name: "HomeView",
  components: {
    CardList,
  },

  inject: ["GStore"],
};
</script>

<style lang="css" scoped></style>

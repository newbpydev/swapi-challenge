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

  mounted() {
    console.log(this.GStore.menu);
  },
};
</script>

<style lang="css" scoped></style>

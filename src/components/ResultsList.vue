<template>
  <div class="card-list--grid">
    <base-card
      v-for="result in results"
      :key="result.url"
      :title="result.name ? result.name : result.title"
      :cardObj="result"
      >{{ result.name }}</base-card
    >
  </div>
</template>

<script>
import BaseCard from "@/components/BaseCard";

export default {
  name: "ResultsList",

  components: {
    BaseCard,
  },

  props: ["results"],

  // data() {
  //   return {
  //     items: null,
  //   };
  // },
};
</script>

<style lang="css" scoped>
.card-list--grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-content: center;
  justify-items: center;
  gap: 3rem;
}
</style>

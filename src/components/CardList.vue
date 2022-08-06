<template>
  <div class="card-list--grid">
    <base-card
      v-for="item in items"
      :key="item"
      :url="item"
      :cardObj="menuItems"
    ></base-card>
  </div>
</template>

<script>
import BaseCard from "@/components/BaseCard";

export default {
  name: "CardList",

  components: {
    BaseCard,
  },

  props: ["menuItems"],

  data() {
    return {
      items: null,
    };
  },

  watch: {
    menuItems(val) {
      // console.log(val);
      this.items = Object.keys(val);
      // console.log(this.items);
    },
  },
};
// BaseCard;
</script>

<style lang="css" scoped>
.card-list--grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-content: center;
  justify-items: center;
  gap: 3rem;
}
</style>

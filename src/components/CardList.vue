<template>
  <div class="card-list--grid">
    <base-card title="character"></base-card>
    <base-card title="films"></base-card>
    <base-card title="species"></base-card>
    <base-card title="vehicles"></base-card>
    <base-card title="starships"></base-card>
    <base-card title="worlds"></base-card>
  </div>
</template>

<script>
import BaseCard from "@/components/BaseCard";

export default {
  name: "CardList",

  components: {
    BaseCard,
  },
};
BaseCard;
</script>

<style lang="css" scoped>
.card-list--grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  
  
}
</style>

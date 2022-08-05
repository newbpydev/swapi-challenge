<template>
  <div class="card-list--grid">
    <!-- <base-card
      title="characters"
      imgUrl="https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg"
    ></base-card>
    <base-card
      title="films"
      imgUrl="https://www.stevensegallery.com/640/360"
    ></base-card>
    <base-card
      imgUrl="https://www.stevensegallery.com/640/360"
      title="species"
    ></base-card>
    <base-card
      imgUrl="https://www.stevensegallery.com/640/360"
      title="vehicles"
    ></base-card>
    <base-card
      imgUrl="https://www.stevensegallery.com/640/360"
      title="starships"
    ></base-card>
    <base-card
      imgUrl="https://www.stevensegallery.com/640/360"
      title="worlds"
    ></base-card> -->

    <base-card v-for="item in items" :key="item" :title="item">{{ item }}</base-card>
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
      this.items = Object.keys(val);
      console.log(this.items);
    },
  },
};
BaseCard;
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

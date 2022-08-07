<template>
  <div class="card-list--grid">
    <base-card
      v-for="item in menuItems"
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

  // watch: {
  //   menuItems(val) {
  //     // console.log(val);
  //     this.items = Object.keys(val);
  //     // console.log(this.items);
  //   },
  // },
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

/* ! MEDIA: 1350px */
@media (max-width: 84.375em) {
  .card-list--grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
/* ! MEDIA: 1200px */
@media (max-width: 78em) {
}

/* ! MEDIA: 1200px */
@media (max-width: 68.75em) {
  .card-list--grid {
    grid-template-columns: repeat(4, 1fr);
    /* gap: 2rem; */
  }
}

/* ! MEDIA: 890px */
@media (max-width: 55.625em) {
  .card-list--grid {
    grid-template-columns: repeat(3, 1fr);
    /* gap: 2rem; */
  }
}

/* ! MEDIA: 650px */
@media (max-width: 40.625em) {
  .card-list--grid {
    grid-template-columns: repeat(2, 1fr);
    /* gap: 2rem; */
  }
}

/* ! MEDIA: 460px */
@media (max-width: 28.75em) {
  .card-list--grid {
    grid-template-columns: repeat(1, 1fr);
    /* gap: 2rem; */
  }
}
</style>

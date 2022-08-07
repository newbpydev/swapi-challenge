<template>
  <!-- <router-link :to="toUrl"> -->
  <li>{{ listItem }}</li>
  <!-- </router-link> -->
</template>

<script>
import extraction from "@/utils/extraction";

export default {
  name: "BaseRelatedDetailsItem",
  props: {
    listItem: {
      type: String,
    },
  },

  computed: {
    toUrl() {
      return extraction.getToRoute(this.listItem);
    },
  },
};
</script>

<style scoped>
li {
  /* list-style: none; */
  font-family: "Source Serif Pro", serif;
  font-weight: 400;
  font-size: 2.4rem;
  text-decoration: none;
}
</style>

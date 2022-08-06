<template>
  <div class="related-details" v-if="list.length !== 0">
    <h3>{{ title }}</h3>
    <base-related-details-item
      v-for="listItem in list"
      :key="listItem"
      :listItem="listItem"
    ></base-related-details-item>
  </div>
</template>

<script>
import BaseRelatedDetailsItem from "./info-pane/BaseRelatedDetailsItem.vue";
export default {
  components: { BaseRelatedDetailsItem },
  name: "RelatedDetails",
  props: {
    title: {
      type: String,
      default: "related name",
    },
    list: {
      type: Array,
    },
  },
};
</script>

<style scoped></style>

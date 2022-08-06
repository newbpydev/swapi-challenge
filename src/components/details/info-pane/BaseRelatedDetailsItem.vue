<template>
  <li>{{ listItem }}</li>
</template>

<script>
export default {
  name: "BaseRelatedDetailsItem",
  props: {
    listItem: {
      type: String,
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
}
</style>

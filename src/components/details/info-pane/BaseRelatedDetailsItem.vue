<template>
  <div>{{ listItem }}</div>
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

<style scoped></style>

<template>
  <div>
    <h2 class="title">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "BaseTextTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.title {
  font-family: "Bebas Neue", cursive;
  font-size: 4.8rem;
}
</style>

<template>
  <div>
    <span class="label">{{ label }}: &nbsp;</span>
    <span class="description">{{ description }}</span>
  </div>
</template>

<script>
export default {
  name: "BaseTextOutput",
  props: {
    label: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
div {
  font-family: "Source Serif Pro", serif;
  font-weight: 400;
  font-size: 2.8rem;
}
</style>

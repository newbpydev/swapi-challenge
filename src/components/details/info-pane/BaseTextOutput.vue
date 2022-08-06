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

<style scoped></style>

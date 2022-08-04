<template>
  <div class="card">

    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "BaseCard",

  props: {
    title: {
      type: String,
      default: "Title goes here",
    },
  },
};
</script>

<style lang="css" scoped>
.card {
  width: 20rem;
  height: 30rem;
  background-color: gray;
  /* border: 0.5rem solid var(--prim-color-yellow); */
  border-radius: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.card::before {
  content: "";
  position: absolute;
  border-radius: 1rem;
  top: -.5rem;
  bottom: -.5rem;
  left: -.5rem;
  right: -.5rem;
  background: var(--prim-color-yellow);
  z-index: -1;
}
.card::after {
  content: "";
  position: absolute;
  top: -.5rem;
  bottom: -.5rem;
  left: -.5rem;
  right: -.5rem;
  background: var(--prim-color-yellow);
  z-index: -1;
  filter: blur(1rem);
}
.card::before,
.card::after {
  background: linear-gradient(235deg, var(--prim-color-yellow), orange);
}
</style>

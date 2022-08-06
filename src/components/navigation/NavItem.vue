<template>
  <router-link :to="{ name: 'ResultsView', params: { type: navTitle } }">
    <li
      :disabled="navTitle === $route.params.type"
      :class="{ active: navTitle === $route.params.type }"
    >
      {{ navTitle }}
    </li>
  </router-link>
</template>

<script>
export default {
  name: "NavItem",
  props: ["navTitle"],
};
</script>

<style scoped>
.active {
  /* color: blue; */
  position: relative;
  /* cursor: default; */
  color: black;
  -webkit-text-stroke: 0.1rem var(--prim-color-yellow);
}

a {
  padding: 1rem 1rem;
  /* background: var(--prim-color-yellow); */
}
li {
  font-size: 3.2rem;
  letter-spacing: 0.4rem;
  color: var(--prim-color-yellow);
  list-style: none;
}
</style>

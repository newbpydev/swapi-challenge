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
  cursor: default;
  color: black;
  -webkit-text-stroke: 0.1rem var(--prim-color-yellow);
}

a {
  padding: 1rem 1rem;
  /* background: var(--prim-color-yellow); */
  position: relative;
}

a::before {
  content: "";
  position: absolute;
  border-bottom: 0rem solid var(--prim-color-yellow);
  bottom: 0rem;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}
a::after {
  content: "";
  position: absolute;
  border-bottom: 0rem solid var(--prim-color-yellow);
  bottom: 0rem;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  filter: blur(1rem);
  opacity: 0;
  transition: opacity 0.3s ease, border-bottom 0.3s ease;
}
a::before,
a::after {
  /* background: linear-gradient(235deg, var(--prim-color-yellow), orange); */
  border-bottom: 0rem solid
    linear-gradient(235deg, var(--prim-color-yellow), orange);
}
a:hover::after,
a:hover::before {
  opacity: 1;
  border-bottom: 0.5rem solid var(--prim-color-yellow);
}

li {
  font-size: 3.2rem;
  letter-spacing: 0.4rem;
  color: var(--prim-color-yellow);
  list-style: none;
}
</style>

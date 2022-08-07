<template>
  <nav>
    <ul>
      <nav-item
        v-for="menuItem in GStore.menu"
        :key="menuItem"
        :navTitle="menuItem"
        >{{ menuItem }}</nav-item
      >
    </ul>
  </nav>
</template>

<script>
import NavItem from "@/components/navigation/NavItem.vue";

export default {
  components: { NavItem },
  name: "NavigationComponent",
  inject: ["GStore"],
};
</script>

<style scoped>
nav {
  font-family: Galaxy;
  margin-top: 2.4rem;
}
ul {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  gap: 3rem;
}

/* ! MEDIA: 1350px */
@media (max-width: 84.375em) {
}
/* ! MEDIA: 1200px */
@media (max-width: 78em) {
}

/* ! MEDIA: 1100px */
@media (max-width: 68.75em) {
  ul {
    gap: 1rem;
  }
}

/* ! MEDIA: 890px */
@media (max-width: 55.625em) {
  ul {
    /* justify-content: center; */
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ! MEDIA: 650px */
@media (max-width: 40.625em) {
}

/* ! MEDIA: 460px */
@media (max-width: 28.75em) {
}
</style>

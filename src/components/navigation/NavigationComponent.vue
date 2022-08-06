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
  font-family: DeathStar;
  margin-top: 2.4rem;
}
ul {
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  gap: 3rem;
}
</style>

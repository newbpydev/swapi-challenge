<template>
  <header>
    <logo-component></logo-component>
    <navigation-component></navigation-component>
  </header>
</template>

<script>
import LogoComponent from "@/components/LogoComponent";
import NavigationComponent from "@/components/navigation/NavigationComponent";

export default {
  components: {
    LogoComponent,
    NavigationComponent,
  },

  name: "HeaderComponent",
};
</script>

<style lang="css" scoped>
header {
  margin-bottom: 3.2rem;
}
</style>

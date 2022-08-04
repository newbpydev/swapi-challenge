<template>
  <h1>Star Wars</h1>
  <h2>Data Base</h2>
</template>

<script>
export default {
  name: "LogoComponent",
};
</script>

<style lang="css" scoped>
@font-face {
  font-family: DeathStar;
  src: url(../assets/fonts/DeathStar-VmWB.ttf);
}
h1,
h2 {
  font-family: DeathStar;
  color: black;
  -webkit-text-stroke: 0.01rem var(--prim-color-yellow);
}

h1 {
  font-size: 5.2rem;
}

h2 {
  font-size: 2.4rem;
}
</style>

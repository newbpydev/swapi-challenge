<template>
  <div class="container">
    <h1>Star Wars</h1>
    <h2>Data Base</h2>
  </div>
</template>

<script>
export default {
  name: "LogoComponent",
};
</script>

<style lang="css" scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1,
h2 {
  margin-top: 0.8rem;
  font-family: DeathStar;
  color: black;
  -webkit-text-stroke: 0.01rem var(--prim-color-yellow);
}

h1 {
  font-size: 5.2rem;
  border-bottom: 0.2rem solid var(--prim-color-yellow);
  width: fit-content;
}

h2 {
  font-size: 2.4rem;
}
</style>

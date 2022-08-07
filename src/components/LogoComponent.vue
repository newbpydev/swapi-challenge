<template>
  <router-link :to="{ name: 'HomeView' }">
    <div class="container">
      <h1>Star Wars</h1>
      <h2>Data Base</h2>
    </div>
  </router-link>
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
  margin-bottom: 4.8rem;
}
h1,
h2 {
  margin-top: 0.8rem;
  font-family: DeathStar;
  /* color: black; */
  color: var(--prim-color-yellow);
  /* -webkit-text-stroke: 0.01rem var(--prim-color-yellow); */
  /* -webkit-text-stroke: 0.2rem var(--prim-color-yellow); */
}

h1 {
  font-size: 9.6rem;
  border-bottom: 0.2rem solid var(--prim-color-yellow);
  width: fit-content;
}

h2 {
  font-size: 4.8rem;
}

/* ! MEDIA: 1350px */
@media (max-width: 84.375em) {
}
/* ! MEDIA: 1200px */
@media (max-width: 78em) {
}

/* ! MEDIA: 1100px */
@media (max-width: 68.75em) {
}

/* ! MEDIA: 890px */
@media (max-width: 55.625em) {
  h1 {
    font-size: 6.4rem;
  }
  h2 {
    font-size: 3.2rem;
  }
}

/* ! MEDIA: 650px */
@media (max-width: 40.625em) {
}

/* ! MEDIA: 460px */
@media (max-width: 28.75em) {
}
</style>

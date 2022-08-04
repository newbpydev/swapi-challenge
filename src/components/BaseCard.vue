<template>
  <div class="card" :style="{ 'background-image': 'url(' + imgUrl + ')' }">
    <!-- <img :src="imgUrl" alt="" /> -->
    <h3>{{ title.toUpperCase() }}</h3>
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
    imgUrl: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="css" scoped>
.card {
  width: 20rem;
  height: 30rem;
  background-color: gray;
  background-position: center;
  background-size: cover;
  /* border: 0.5rem solid var(--prim-color-yellow); */
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
}
.card::before {
  content: "";
  position: absolute;
  border-radius: 1rem;
  top: -0.5rem;
  bottom: -0.5rem;
  left: -0.5rem;
  right: -0.5rem;
  background: var(--prim-color-yellow);
  z-index: -1;
}
.card::after {
  content: "";
  position: absolute;
  top: -0.5rem;
  bottom: -0.5rem;
  left: -0.5rem;
  right: -0.5rem;
  background: var(--prim-color-yellow);
  z-index: -1;
  filter: blur(1rem);
}
.card::before,
.card::after {
  background: linear-gradient(235deg, var(--prim-color-yellow), orange);
}

h3 {
  background: var(--prim-color-yellow);
  font-family: DeathStar;
  letter-spacing: .6rem;
  width: 100%;
  padding: 1rem 0;
  color: black;
}
</style>

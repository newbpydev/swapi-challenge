<template>
  <background-effect></background-effect>
  <header-component></header-component>

  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import BackgroundEffect from "@/components/BackgroundEffect";
import HeaderComponent from "@/components/HeaderComponent";
import StarWarsService from "./services/StarWarsService";
import GStore from "@/store";

export default {
  name: "App",

  components: {
    BackgroundEffect,
    HeaderComponent,
  },

  beforeCreate() {
    return StarWarsService.getRoot()
      .then((response) => {
        GStore.menu = Object.keys(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
/*! Style Notes  */ /*
- FONT SIZE SYSTEM (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
- SPACING SYSTEM (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

# Star Wars Style Guide
  ## Layout
    The designs were created to the following widths:
    - Mobile: 375px
    - Desktop: 1440px
  ## Colors
    ### Primary
      Dark cyan: hsl(185, 75%, 39%)
      Very dark desaturated blue: hsl(229, 23%, 23%)
      Dark grayish blue: hsl(227, 10%, 46%)
    ### Neutral
      Dark gray: hsl(0, 0%, 59%)
  ## Typography
    ### Body Copy
      - Font size (name and stats): 18px
    ### Font
      - Family: [Kumbh Sans](https://fonts.google.com/specimen/Kumbh+Sans)
      - Weights: 400, 700
*/
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;700;900&display=swap");

@font-face {
  font-family: DeathStar;
  src: url(./assets/fonts/SfDistantGalaxyOutline-xoeO.ttf);
}
@font-face {
  font-family: Galaxy;
  src: url(./assets/fonts/SfDistantGalaxy-0l3d.ttf);
}
@font-face {
  font-family: Aurek;
  src: url(./assets/fonts/Aurek-Besh.ttf);
}
@font-face {
  font-family: Mandalor;
  src: url(./assets/fonts/mandalor.ttf);
}

/*! Variables  */
:root {
  --prim-color-v-dark-gray: rgb(6, 6, 6);
  --prim-color-v-dark-desa-blue: hsl(229, 23%, 23%);
  --prim-color-yellow: #ffe81f;
  --neut-color-gray: hsl(0, 0%, 59%);

  --font-size-name-stats: 1.8rem;

  --border-radius: 1rem;
}

/*! General Styles  */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

body {
  font-family: "Bebas Neue", sans-serif;
  font-size: var(--font-size-name-stats);
  text-align: center;
  color: var(--prim-color-v-dark-desa-blue);
  background-color: black;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  gap: 1rem;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1440px;
  /* min-height: 100vh; */
  /* background: black; */
  margin: 0 auto;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}

main {
  margin-bottom: 10rem;
}

.info-pane {
  text-align: left;
  grid-column: span 2;
}
.details-card {
  /* background: var(--prim-color-yellow); */
  background: white;
  border-radius: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
  margin-bottom: 6rem;
  width: 95vw;
}

/* ! MEDIA: 1350px */
@media (max-width: 84.375em) {
}
/* ! MEDIA: 1200px */
@media (max-width: 78em) {
}

/* ! MEDIA: 1100px */
@media (max-width: 68.75em) {
  .info-pane {
    grid-column: span 1;
  }
  .details-card {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* ! MEDIA: 890px */
@media (max-width: 55.625em) {
  .details-card {
    grid-template-columns: repeat(1, 1fr);
  }
}

/* ! MEDIA: 650px */
@media (max-width: 40.625em) {
}

/* ! MEDIA: 460px */
@media (max-width: 28.75em) {
  #app {
    min-width: 33rem;
  }
  /* .details-card {
    min-width: 100vw;
  } */
}
</style>

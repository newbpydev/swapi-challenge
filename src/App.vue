<template>
  <background-effect></background-effect>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <header-component></header-component> -->
  <home-view></home-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HeaderComponent from '@/components/HeaderComponent'
import BackgroundEffect from '@/components/BackgroundEffect'

import HomeView from "@/views/HomeView";

export default {
  name: "App",

  components: {
    // HeaderComponent,
    BackgroundEffect,
    HomeView,
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
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap");

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
  /* font-family: "Kumbh Sans", sans-serif; */
  font-size: var(--font-size-name-stats);
  text-align: center;
  color: var(--prim-color-v-dark-desa-blue);

  /* display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  position: relative; */

  /* overflow: hidden; */
  background-color: var(--prim-color-v-dark-gray);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div class="info-pane">
    <base-text-title :title="name"></base-text-title>

    <base-text-output label="Height" :description="height"></base-text-output>
    <base-text-output label="Mass" :description="mass"></base-text-output>
    <base-text-output
      label="Hair Color"
      :description="hairColor"
    ></base-text-output>
    <base-text-output
      label="Eye Color"
      :description="eyeColor"
    ></base-text-output>
    <base-text-output
      label="Birth Year"
      :description="birthYear"
    ></base-text-output>
    <base-text-output label="Gender" :description="gender"></base-text-output>
    <base-text-output
      label="Homeworld"
      :description="homeworld"
    ></base-text-output>
  </div>
</template>

<script>
import BaseTextOutput from "./BaseTextOutput.vue";
import BaseTextTitle from "./BaseTextTitle.vue";
// import StarWarsService from "@/services/StarWarsService";
// import extraction from "@/utils/extraction";

export default {
  components: { BaseTextOutput, BaseTextTitle },
  name: "PeoplePaneDetail",

  inject: ["GStore"],

  data() {
    return {
      name: this.GStore.details.name,
      height: this.GStore.details.height,
      mass: this.GStore.details.mass,
      hairColor: this.GStore.details.hair_color,
      eyeColor: this.GStore.details.eye_color,
      birthYear: this.GStore.details.birth_year,
      gender: this.GStore.details.gender,
      homeworld: this.GStore.details.homeworld,
    };
  },

  computed: {
    // homeworldName() {
    //   const category = extraction.getCategory(this.homeworld);
    //   console.log(category);
    //   return category;
    // },
  },

  mounted() {
    // console.log(extraction.getCategory(this.homeworld));
  },
};
</script>

<style scoped>
/* .pane {
  text-align: left;
  grid-column: span 2;
} */
</style>

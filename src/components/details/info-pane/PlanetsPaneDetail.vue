<template>
  <div class="info-pane">
    <base-text-title :title="name"></base-text-title>

    <base-text-output
      label="Rotation Period"
      :description="rotationPeriod"
    ></base-text-output>
    <base-text-output
      label="Orbital Period"
      :description="orbitalPeriod"
    ></base-text-output>
    <base-text-output
      label="Diameter"
      :description="diameter"
    ></base-text-output>
    <base-text-output label="Climate" :description="climate"></base-text-output>
    <base-text-output label="Gravity" :description="gravity"></base-text-output>
    <base-text-output label="Terrain" :description="terrain"></base-text-output>
    <base-text-output
      label="Surface Water"
      :description="surfaceWater"
    ></base-text-output>
    <base-text-output
      label="Population"
      :description="population"
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
  name: "PlanetsPaneDetail",

  inject: ["GStore"],

  data() {
    return {
      name: this.GStore.details.name,
      rotationPeriod: this.GStore.details.rotation_period,
      orbitalPeriod: this.GStore.details.orbital_period,
      diameter: this.GStore.details.diameter,
      climate: this.GStore.details.climate,
      gravity: this.GStore.details.gravity,
      terrain: this.GStore.details.terrain,
      surfaceWater: this.GStore.details.surface_water,
      population: this.GStore.details.population,
    };
  },
};
</script>

<style scoped>
/* .pane {
  text-align: left;
  grid-column: span 2;
} */
</style>

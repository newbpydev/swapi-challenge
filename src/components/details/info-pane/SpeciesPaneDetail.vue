<template>
  <div class="info-pane">
    <base-text-title :title="name"></base-text-title>

    <base-text-output
      label="Classification"
      :description="classification"
    ></base-text-output>

    <base-text-output
      label="Designation"
      :description="designation"
    ></base-text-output>

    <base-text-output
      label="Average Heigh"
      :description="averageHeight"
    ></base-text-output>

    <base-text-output
      label="Skin Color"
      :description="skinColors"
    ></base-text-output>

    <base-text-output
      label="Hair Color"
      :description="hairColors"
    ></base-text-output>

    <base-text-output
      label="Eye Color"
      :description="eyeColors"
    ></base-text-output>

    <base-text-output
      label="Average Lifespan"
      :description="averageLifespan"
    ></base-text-output>

    <base-text-output
      label="Homeworld"
      :description="homeworld"
    ></base-text-output>

    <base-text-output
      label="Language"
      :description="language"
    ></base-text-output>
  </div>
</template>

<script>
import BaseTextOutput from "./BaseTextOutput.vue";
import BaseTextTitle from "./BaseTextTitle.vue";

export default {
  components: { BaseTextOutput, BaseTextTitle },
  name: "SpeciesPaneDetail",

  inject: ["GStore"],

  data() {
    return {
      name: this.GStore.details.name,
      classification: this.GStore.details.classification,
      designation: this.GStore.details.designation,
      averageHeight: this.GStore.details.average_height,
      skinColors: this.GStore.details.skin_colors,
      hairColors: this.GStore.details.hair_colors,
      eyeColors: this.GStore.details.eye_colors,
      averageLifespan: this.GStore.details.average_lifespan,
      homeworld: this.GStore.details.homeworld,
      language: this.GStore.details.language,
    };
  },
};
</script>

<style scoped>
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
}

/* ! MEDIA: 650px */
@media (max-width: 40.625em) {
}

/* ! MEDIA: 460px */
@media (max-width: 28.75em) {
}
</style>

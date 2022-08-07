<template>
  <div class="info-pane">
    <base-text-title :title="name"></base-text-title>

    <base-text-output label="Model" :description="model"></base-text-output>
    <base-text-output
      label="Manufacturer"
      :description="manufacturer"
    ></base-text-output>
    <base-text-output
      label="Cost In Credits"
      :description="costInCredits"
    ></base-text-output>
    <base-text-output label="Length" :description="length"></base-text-output>
    <base-text-output
      label="Max Atmosphering Speed"
      :description="maxAtmospheringSpeed"
    ></base-text-output>
    <base-text-output label="Crew" :description="crew"></base-text-output>
    <base-text-output
      label="Passengers"
      :description="passengers"
    ></base-text-output>
    <base-text-output
      label="Cargo Capacity"
      :description="cargoCapacity"
    ></base-text-output>
    <base-text-output
      label="Consumables"
      :description="consumables"
    ></base-text-output>
    <base-text-output
      label="Vehicle Class"
      :description="vehicleClass"
    ></base-text-output>
  </div>
</template>

<script>
import BaseTextOutput from "./BaseTextOutput.vue";
import BaseTextTitle from "./BaseTextTitle.vue";

export default {
  components: { BaseTextOutput, BaseTextTitle },
  name: "VehiclesPaneDetail",

  inject: ["GStore"],

  data() {
    return {
      name: this.GStore.details.name,
      model: this.GStore.details.model,
      manufacturer: this.GStore.details.manufacturer,
      costInCredits: this.GStore.details.cost_in_credits,
      length: this.GStore.details.length,
      maxAtmospheringSpeed: this.GStore.details.max_atmosphering_speed,
      crew: this.GStore.details.crew,
      passengers: this.GStore.details.passengers,
      cargoCapacity: this.GStore.details.cargo_capacity,
      consumables: this.GStore.details.consumables,
      vehicleClass: this.GStore.details.vehicle_class,
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

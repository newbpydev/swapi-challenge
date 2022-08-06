<template>
  <section class="details-section">
    <div class="details-card">
      <img-detail></img-detail>
      <people-pane-detail v-if="routeType === 'people'"></people-pane-detail>
      <planets-pane-detail v-if="routeType === 'planets'"></planets-pane-detail>
      <films-pane-detail v-if="routeType === 'films'"></films-pane-detail>
      <species-pane-detail v-if="routeType === 'species'"></species-pane-detail>
      <vehicles-pane-detail
        v-if="routeType === 'vehicles'"
      ></vehicles-pane-detail>
      <starships-pane-detail
        v-if="routeType === 'starships'"
      ></starships-pane-detail>

      <related-details
        v-if="relatedLists.films"
        title="films"
        :list="relatedLists.films"
      ></related-details>

      <related-details
        v-if="relatedLists.species"
        title="species"
        :list="relatedLists.species"
      ></related-details>

      <related-details
        v-if="relatedLists.vehicles"
        title="vehicles"
        :list="relatedLists.vehicles"
      ></related-details>

      <related-details
        v-if="relatedLists.starships"
        title="starships"
        :list="relatedLists.starships"
      ></related-details>

      <related-details
        v-if="relatedLists.residents"
        title="residents"
        :list="relatedLists.residents"
      ></related-details>

      <related-details
        v-if="relatedLists.characters"
        title="characters"
        :list="relatedLists.characters"
      ></related-details>

      <related-details
        v-if="relatedLists.people"
        title="people"
        :list="relatedLists.people"
      ></related-details>

      <related-details
        v-if="relatedLists.pilots"
        title="pilots"
        :list="relatedLists.pilots"
      ></related-details>
    </div>
  </section>
</template>

<script>
import ImgDetail from "@/components/details/ImgDetail.vue";
import PeoplePaneDetail from "@/components/details/info-pane/PeoplePaneDetail";
import RelatedDetails from "@/components/details/RelatedDetails.vue";
import PlanetsPaneDetail from "@/components/details/info-pane/PlanetsPaneDetail.vue";
import FilmsPaneDetail from "@/components/details/info-pane/FilmsPaneDetail.vue";
import SpeciesPaneDetail from "@/components/details/info-pane/SpeciesPaneDetail.vue";
import VehiclesPaneDetail from "@/components/details/info-pane/VehiclesPaneDetail.vue";

import StarshipsPaneDetail from "@/components/details/info-pane/StarshipsPaneDetail";

export default {
  components: {
    ImgDetail,
    PeoplePaneDetail,
    RelatedDetails,
    PlanetsPaneDetail,
    FilmsPaneDetail,
    SpeciesPaneDetail,
    VehiclesPaneDetail,
    StarshipsPaneDetail,
  },
  name: "DetailsView",
  inject: ["GStore"],
  data() {
    return {
      routeType: this.$route.params.type,

      relatedLists: {
        films: this.GStore.details.films,
        species: this.GStore.details.species,
        vehicles: this.GStore.details.vehicles,
        starships: this.GStore.details.starships,
        residents: this.GStore.details.residents,
        characters: this.GStore.details.characters,
        people: this.GStore.details.people,
        pilots: this.GStore.details.pilots,
      },
    };
  },
};
</script>

<style scoped>
.details-card {
  /* background: var(--prim-color-yellow); */
  background: white;
  border-radius: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
}
</style>

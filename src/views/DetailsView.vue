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

import StarWarsService from "@/services/StarWarsService";

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

  beforeRouteUpdate: (to) => {
    return StarWarsService.getOne(to.params.type, to.params.id)
      .then((response) => {
        this.GStore.details = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.details-section {
  display: flex;
  justify-content: center;
}

/* ! MEDIA: 1350px */
@media (max-width: 84.375em) {
}
/* ! MEDIA: 1200px */
@media (max-width: 78em) {
}

/* ! MEDIA: 1100px */
@media (max-width: 68.75em) {
  /* .details-card {
    grid-template-columns: repeat(2, 1fr);
  } */
}

/* ! MEDIA: 890px */
@media (max-width: 55.625em) {
}

/* ! MEDIA: 650px */
@media (max-width: 40.625em) {
}

/* ! MEDIA: 460px */
@media (max-width: 28.75em) {
  /* .details-section {
    min-width: 46rem;
  } */
}
</style>

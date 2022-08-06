<template>
  <section class="details-section">
    <div class="details-card">
      <img-detail></img-detail>
      <people-pane-detail v-if="routeType === 'people'"></people-pane-detail>
      <planets-pane-detail v-if="routeType === 'planets'"></planets-pane-detail>

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
    </div>
  </section>
</template>

<script>
import ImgDetail from "@/components/details/ImgDetail.vue";
import PeoplePaneDetail from "@/components/details/info-pane/PeoplePaneDetail";
import RelatedDetails from "@/components/details/RelatedDetails.vue";
import PlanetsPaneDetail from "@/components/details/info-pane/PlanetsPaneDetail.vue";

export default {
  components: {
    ImgDetail,
    PeoplePaneDetail,
    RelatedDetails,
    PlanetsPaneDetail,
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

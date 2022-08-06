<template>
  <section class="details-section">
    <div class="details-card">
      <img-detail></img-detail>
      <people-pane-detail v-if="routeType === 'people'"></people-pane-detail>

      <related-details title="films" :list="films"></related-details>
      <related-details title="species" :list="species"></related-details>
      <related-details title="vehicles" :list="vehicles"></related-details>
      <related-details title="starships" :list="starships"></related-details>
    </div>
  </section>
</template>

<script>
import ImgDetail from "@/components/details/ImgDetail.vue";
import PeoplePaneDetail from "@/components/details/info-pane/PeoplePaneDetail";
import RelatedDetails from "@/components/details/RelatedDetails.vue";

export default {
  components: { ImgDetail, PeoplePaneDetail, RelatedDetails },
  name: "DetailsView",
  inject: ["GStore"],
  data() {
    return {
      routeType: this.$route.params.type,
      films: this.GStore.details.films,
      species: this.GStore.details.species,
      vehicles: this.GStore.details.vehicles,
      starships: this.GStore.details.starships,
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

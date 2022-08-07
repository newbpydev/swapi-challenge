<template>
  <div class="info-pane">
    <base-text-title :title="title"></base-text-title>

    <base-text-output
      label="Episode ID"
      :description="`${episodeId}`"
    ></base-text-output>

    <base-text-output
      label="Director"
      :description="director"
    ></base-text-output>
    <base-text-output
      label="Producer"
      :description="producer"
    ></base-text-output>
    <base-text-output
      label="Release Date"
      :description="releaseDate"
    ></base-text-output
    ><base-text-output
      label="Opening Crawl"
      :description="openingCrawl"
    ></base-text-output>
  </div>
</template>

<script>
import BaseTextOutput from "./BaseTextOutput.vue";
import BaseTextTitle from "./BaseTextTitle.vue";

export default {
  components: { BaseTextOutput, BaseTextTitle },
  name: "FilmsPaneDetail",

  inject: ["GStore"],

  data() {
    return {
      title: this.GStore.details.title,
      episodeId: this.GStore.details.episode_id,
      openingCrawl: this.GStore.details.opening_crawl,
      director: this.GStore.details.director,
      producer: this.GStore.details.producer,
      releaseDate: this.GStore.details.release_date,
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

<template>
  <div class="image-card">
    <img :src="imgSrc" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc:
        "https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
      alt: "a photo of Yoda",
    };
  },

  name: "ImgDetail",
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

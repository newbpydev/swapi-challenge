<template>
  <div class="image-card">
    <img :src="newImgUrl" alt="" />
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

  computed: {
    newImgUrl() {
      let url = "";
      switch (this.$route.params.type) {
        case "people":
          url =
            "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg";
          break;
        case "planets":
          url =
            "https://static.wikia.nocookie.net/starwars/images/4/4d/Eaw_Kuat.jpg";
          break;
        case "films":
          url =
            "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg";
          break;
        case "species":
          url =
            "https://www.denofgeek.com/wp-content/uploads/2019/12/star-wars-alien-races.jpg?fit=1200%2C675";
          break;
        case "vehicles":
          url =
            "https://qph.cf2.quoracdn.net/main-qimg-e75a53262064ef86600891f5c3a2d9c7.webp";
          break;
        case "starships":
          url =
            "https://i.pinimg.com/originals/a2/2c/c4/a22cc4c5248145bd7d43b77b09bcec44.jpg";
          break;

        default:
          url =
            "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg";
          break;
      }

      return url;
    },
  },
};
</script>

<style scoped>
.image-card {
  width: 39rem;
  height: auto;
  border: 1rem solid gray;
  padding: 1rem;
  display: flex;
}
img {
  width: 100%;
  min-width: 35rem;
  height: auto;
  background-size: cover;
}

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
  /* img {
  width: 100%;
  height: auto;
  background-size: cover;
} */
}

/* ! MEDIA: 650px */
@media (max-width: 40.625em) {
}

/* ! MEDIA: 460px */
@media (max-width: 28.75em) {
}
</style>

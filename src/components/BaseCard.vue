<template>
  <router-link :to="id ? `${category}/${id}` : category">
    <div
      class="card"
      :style="{
        'background-image': 'url(' + newImgUrl + ')',
      }"
    >
      <h3>{{ title }}</h3>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "BaseCard",

  props: {
    url: {
      type: String,
      default: "#",
    },
    cardObj: {
      type: Object,
    },
  },

  data() {
    return {
      urlSplit: [],
      id: 0,
      category: "",
      imgUrl:
        "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      title: "",
    };
  },

  computed: {
    newImgUrl() {
      let url = "";
      switch (this.category) {
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

  beforeMount() {
    try {
      if (this.cardObj.url) {
        this.urlSplit = this.cardObj.url.split("/");
        this.id = this.urlSplit[this.urlSplit.length - 2];
        this.category = this.urlSplit[this.urlSplit.length - 3];
        this.title = this.cardObj.name ? this.cardObj.name : this.cardObj.title;
      } else {
        this.category = this.url;
        this.title = this.url;
      }
    } catch (error) {
      console.log({ error });
    }
  },
};
</script>

<style lang="css" scoped>
.card {
  width: 20rem;
  height: 30rem;
  background-color: gray;
  background-position: center;
  background-size: cover;
  /* border: 0.5rem solid var(--prim-color-yellow); */
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
}
.card::before {
  content: "";
  position: absolute;
  border-radius: 1rem;
  top: -0.5rem;
  bottom: -0.5rem;
  left: -0.5rem;
  right: -0.5rem;
  background: var(--prim-color-yellow);
  z-index: -1;
  opacity: 0;
}
.card::after {
  content: "";
  position: absolute;
  top: -0.5rem;
  bottom: -0.5rem;
  left: -0.5rem;
  right: -0.5rem;
  background: var(--prim-color-yellow);
  z-index: -1;
  filter: blur(1rem);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.card::before,
.card::after {
  background: linear-gradient(235deg, var(--prim-color-yellow), orange);
}

.card:hover::after,
.card:hover::before {
  opacity: 1;
}

h3 {
  background: var(--prim-color-yellow);
  font-family: Galaxy;
  letter-spacing: 0.6rem;
  width: 100%;
  padding: 1rem 0;
  color: black;
}

a {
  text-decoration: none;
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
}

/* ! MEDIA: 650px */
@media (max-width: 40.625em) {
}

/* ! MEDIA: 460px */
@media (max-width: 28.75em) {
  .card {
    min-width: 90vw;
    height: 50rem;
  }
}
</style>

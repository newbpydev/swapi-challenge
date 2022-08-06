<template>
  <router-link :to="id ? `${category}/${id}` : category">
    <div class="card" :style="{ 'background-image': 'url(' + imgUrl + ')' }">
      <!-- <img :src="imgUrl" alt="" /> -->

      <!-- <h3>{{ title.toUpperCase() }}</h3> -->
      <h3>{{ title }}</h3>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "BaseCard",

  props: {
    // title: {
    //   type: String,
    //   default: "Title goes here",
    // },
    // imgUrl: {
    //   type: String,
    //   default:
    //     "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    // },
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

  watch: {
    cardObj(val) {
      console.log(val);
    },
  },

  computed: {
    // category() {
    //   return this.data;
    // },
  },

  beforeMount() {
    // console.log(this.cardObj);
    try {
      // console.log(this.cardObj);
      // console.log(!!this.cardObj.url);
      if (this.cardObj.url) {
        this.urlSplit = this.cardObj.url.split("/");
        this.id = this.urlSplit[this.urlSplit.length - 2];
        this.category = this.urlSplit[this.urlSplit.length - 3];
        this.title = this.cardObj.name ? this.cardObj.name : this.cardObj.title;
        // console.log(this.id, this.category);
      } else {
        this.category = this.url;
        this.title = this.url;
        // console.log(this.category);
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
  font-family: DeathStar;
  letter-spacing: 0.6rem;
  width: 100%;
  padding: 1rem 0;
  color: black;
}

a {
  text-decoration: none;
}
</style>

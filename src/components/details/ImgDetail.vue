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

<style scoped></style>

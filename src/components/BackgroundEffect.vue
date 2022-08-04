<template>
  <div class="stars"></div>
  <div class="twinkling"></div>
</template>

<script>
export default {
  name: "BackgroundEffect",
};
</script>

<style lang="css" scoped>
@keyframes move-clouds-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 10000px 0;
  }
}
@keyframes move-twinkle-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}

.stars,
.twinkling {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.stars {
  background: #000 url(../assets/background-images/stars.png) repeat top center;
  z-index: -11;
}
.twinkling {
  background: transparent url(../assets/background-images/twinkling.png) repeat
    top center;
  z-index: -10;
  animation: move-twinkle-back 200s linear infinite;
}
</style>

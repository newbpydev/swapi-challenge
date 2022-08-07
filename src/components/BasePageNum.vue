<template>
  <div>
    <router-link :to="{ name: 'ResultsView', query: { page: pageNum } }">
      <span :class="{ active: parseInt($route.query.page) === pageNum }">
        <!-- <router-link :to="`/${$route.params.type}/?page=${pageNum}`">{{ -->
        {{ pageNum }}
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    pageNum: {
      type: Number,
    },
  },
};
</script>

<style scoped>
div {
  display: inline;
}
span {
  background: var(--prim-color-yellow);
  display: inline-block;
  text-align: center;
  /* padding: 1rem; */
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
}

.active {
  background: rgb(177, 115, 0);
  display: inline-block;
  text-align: center;
  /* padding: 1rem; */
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
}
</style>

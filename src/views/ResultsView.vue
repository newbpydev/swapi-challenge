<template>
  <results-list :results="GStore.results.results"></results-list>

  <div class="pagination-wrapper">
    <router-link
      id="page-prev"
      :to="{ name: 'ResultsView', query: { page: page - 1 } }"
      rel="prev"
      :class="{ disable: page === 1 }"
      >&#60; Page
    </router-link>

    <div class="pageNumbers">
      <base-page-num
        v-for="page in totalPages"
        :key="page"
        :pageNum="page"
      ></base-page-num>
    </div>

    <router-link
      id="page-next"
      :to="{ name: 'ResultsView', query: { page: page + 1 } }"
      rel="next"
      :class="{ disable: !hasNextPage }"
      >Page &#62;
    </router-link>
  </div>
</template>

<script>
import ResultsList from "@/components/ResultsList.vue";
import StarWarsService from "@/services/StarWarsService";
import BasePageNum from "@/components/BasePageNum.vue";

export default {
  name: "ResultsView",
  components: {
    ResultsList,
    BasePageNum,
  },

  inject: ["GStore"],

  props: ["page"],

  data() {
    return {
      results: null,
      type: "",
    };
  },

  computed: {
    hasNextPage() {
      console.log(this.page);
      console.log(this.page < this.totalPages);
      return this.page < this.totalPages;
    },
    totalPages() {
      console.log(Math.ceil(this.GStore.results.count / 10));
      return Math.ceil(this.GStore.results.count / 10);
    },
  },

  beforeRouteUpdate(to) {
    // console.log("⭐⭐ beforeRouteUpdate()");
    return StarWarsService.getAll(to.params.type, parseInt(to.query.page) || 1)
      .then((response) => {
        this.GStore.results = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="css" scoped>
.pagination-wrapper {
  display: flex;
  justify-content: space-between;

  margin-top: 4.8rem;
  font-size: 4rem;
}
.disable {
  pointer-events: none;
  opacity: 0.5;
}

#page-prev,
#page-next {
  padding: 1.5rem;
  background: var(--prim-color-yellow);
}
#page-next {
  justify-self: end;
}
</style>

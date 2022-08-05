<template>
  <nav>
    <ul>
      <button @click="test">click</button>
    </ul>
  </nav>
</template>

<script>
import StarWarsService from "@/services/StarWarsService";

export default {
  name: "NavigationComponent",

  methods: {
    test() {
      // fetch("https://en.wikipedia.org/wiki/Luke_Skywalker")
      // fetch(
      //   "https://en.wikipedia.org/w/api.php?origin=*&action=parse&page=Pet_door&format=json"
      // )
      //   .then((res) => {
      //     return res.json;
      //   })
      //   .then((data) => console.log(data))
      //   .catch((error) => console.log(error));
      console.log("MONKEYEYEEEY");
      StarWarsService.getTest().then((res) => console.log(res));
      return this.data;
    },
  },
};
</script>

<style scoped></style>

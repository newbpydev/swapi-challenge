<template>
  <header>
    <logo-component></logo-component>
  </header>
</template>

<script>
import LogoComponent from '@/components/LogoComponent'

export default {
  components: {
    LogoComponent
  },

  name: "HeaderComponent",


};
</script>

<style lang="css" scoped>
header {
  margin-bottom: 10rem
}
</style>

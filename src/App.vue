<template>
  <div id="app">
    <div class="container">
      <TheHeader @searchText="onSearchText"></TheHeader>
    
      <TheMain :searchText="searchText"></TheMain>
    </div>
    
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue"
import TheMain from "./components/TheMain.vue"

export default {
  name: 'App',
  components: { TheHeader, TheMain },

  data() {
    return {
      searchText: "",
    }
  },

  methods: {
    onSearchText(testoCercato) {
      this.searchText = testoCercato;
    }
  },

  mounted() {
  }
}
</script>

<style lang="scss">
@import "assets/scss/main.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

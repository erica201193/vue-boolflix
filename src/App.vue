<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from "axios"

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    axios.get("https://api.themoviedb.org/3/search/movie/", {
      params: {
        api_key: "3ccf13d52765e30b8380207d96d18e3d",
        query: "toy story",
        language:"it-IT",
      }
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <TheHeader />
    <main>
      <router-view :key="$route.fullPath" />
    </main>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue"
import router from "./router"

export default {
  name: "App",
  components: {
    TheHeader,
  },
  router,
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

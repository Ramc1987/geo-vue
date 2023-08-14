<template>
  <div id="app">
    <TheHeader />
    <main>
      <router-view :key="$route.fullPath" />
      <router-link class="nav-link" :to="'/about'">казачество в крыму</router-link>
      <router-link class="nav-link" :to="'/new'">казачество в крыму2</router-link>
      <router-link class="nav-link" :to="'/signup'">казачество в крыму3</router-link>
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

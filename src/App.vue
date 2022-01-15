<template>
  <div id="app">
    <NinePayHeader />
    <router-view />
  </div>
</template>

<script>
import NinePayHeader from './components/NinePayHeader.vue'

export default {
  name: 'App',
  components: {
    NinePayHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>

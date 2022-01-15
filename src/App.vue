<template>
  <vue100vh :css="{ height: '100rvh' }" id="app">
    <NinePayHeader />
    <router-view />
  </vue100vh>
</template>

<script>
import NinePayHeader from './components/NinePayHeader.vue'
import vue100vh from 'vue-100vh'

export default {
  name: 'App',
  components: {
    NinePayHeader,
    vue100vh,
  },
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  background-color: #e3f6f5;
}
</style>

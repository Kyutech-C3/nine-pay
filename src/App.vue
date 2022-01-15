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
@import url('https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap');

body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e3f6f5;
}
</style>

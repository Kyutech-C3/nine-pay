<template>
  <vue100vh :css="{ height: '100rvh' }" id="app">
    <NinePayHeader />
    <transition mode="out-in"><router-view /></transition>
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

*,
body {
  margin: 0;
}
#app,
.btn {
  font-family: 'Hachi Maru Pop', cursive;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e3f6f5;
}

.btn {
  padding: 0.5rem 1rem;
  background-color: #bbb;
  border: none;
  font-weight: 800;
  box-shadow: 3px 3px 10px silver;
  color: #202020;
  border-radius: 8px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>

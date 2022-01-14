<template>
  <div id="app">
    <img alt="Vue logo" class="logo" src="https://compositecomputer.club/img/C3logo.27978305.png">
    <HelloWorld msg="Welcome to our App"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.logo {
  width: 5rem;
}
</style>

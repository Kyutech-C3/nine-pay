<template>
  <div id="app">
    <NFCReader @addPoint="points++"/>
    <span>{{ points }}</span>
  </div>
</template>

<script>
import NFCReader from '../components/NFCReader.vue'

export default {
  name: 'NFCTest',
  data() {
    return {
      points: 0
    }
  },
  components: {
    NFCReader
  },
  methods: {
    
  }
}
</script>

<style scoped>
.logo {
  width: 5rem;
}
</style>

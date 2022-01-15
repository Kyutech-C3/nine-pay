<template>
  <div id="app">
    <BarcodeReader />
    
  </div>
</template>

<script>
import BarcodeReader from '../components/BarcodeReader.vue'

export default {
  name: 'BarcodeTest',
  components: {
    BarcodeReader
  }
}
</script>

<style scoped>
.logo {
  width: 5rem;
}
</style>

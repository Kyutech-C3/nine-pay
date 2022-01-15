<template>
  <div>
    <barcode-reader @code="onCode"/>
    <add-form :code="this.code" />
  </div>
</template>

<script>
import BarcodeReader from '../components/BarcodeReader.vue'
import AddForm from '../components/AddForm.vue'

export default {
  name: 'App',
  components: {
    BarcodeReader,
    AddForm
  },
  data() {
    return {
      code: null 
    }
  },
  methods: {
    onCode(code) {
      this.code = code
    }
  }
}
</script>

<style scoped>
.logo {
  width: 5rem;
}
</style>

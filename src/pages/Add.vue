<template>
  <div>
    <barcode-reader @code="onCode"/>
    <add-form class="add-form" :code="this.code" />
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
.add-form {
  margin: 1rem 0;
  padding: 2rem;
}
.logo {
  width: 5rem;
}
</style>

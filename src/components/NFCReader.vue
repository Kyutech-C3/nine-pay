<template>
  <div>
    <h1>NFC Reader</h1>
    <div v-if="reader">Reading...</div>
    <button class="btn btn-start" @click="startScan">開始</button>
  </div>
</template>
<script>
/* global NDEFReader */

const intervalMinutes = 1

export default {
  name: 'NFCReader',
  data() {
    return {
      reading: false,
      reader: null,
      interval: null
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    startScan(){
      this.interval = setInterval(this.scan, 1000 *  intervalMinutes)
    },
    listener({ serialNumber }) {
      console.log('!!')
      console.log(`> Serial Number: ${serialNumber}`);
      this.$emit('addPoint', serialNumber)
      this.reader.removeEventListener('reading', this.listener)
      this.reader = null
    },
    async scan() {
      console.log('check...')
      if(this.reader === null) {
        console.debug('NFC tag not detected...')
        this.reader = new NDEFReader()
        await this.reader.scan()
        this.reader.addEventListener("reading", this.listener);
      }
    },
  }
}
</script>
<style scoped>
.btn-start {
  margin: 1rem 0;
}
</style>
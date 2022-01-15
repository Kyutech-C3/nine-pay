<template>
  <div>
    <h1>NFC Reader</h1>
    <span v-if="reader">Reading...</span>
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
      reader: null
    }
  },
  created() {
    setInterval(this.scan, 1000 *  intervalMinutes)
  },
  methods: {
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
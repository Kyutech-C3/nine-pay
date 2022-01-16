<template>
  <div>
    <!-- <button class="btn btn-start" :class="{sleeping: sleeping}" :disabled="reading" @click="startScan" > -->
    <!-- {{ reading ? '検出中' : '開始' }}
    </button> -->
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
      sleeping: false,
      interval: null,
    }
  },
  created() {
    setInterval(this.scan, 1000 * intervalMinutes)
  },
  beforeDestroy() {
    this.reading = false
    this.sleeping = false
    clearInterval(this.interval)
  },
  methods: {
    startScan() {
      this.interval = setInterval(this.scan, 1000 * intervalMinutes)
      this.reading = true
    },
    listener({ serialNumber }) {
      console.log('!!')
      console.log(`> Serial Number: ${serialNumber}`)
      this.$emit('addPoints', serialNumber)
      this.sleeping = true
      this.reader.removeEventListener('reading', this.listener)
      this.reader = null
    },
    async scan() {
      console.log('check...')
      if (this.reader === null) {
        this.sleeping = false
        console.debug('NFC tag not detected...')
        this.reader = new NDEFReader()
        await this.reader.scan()
        this.reader.addEventListener('reading', this.listener)
      }
    },
  },
}
</script>
<style scoped>
.btn-start {
  margin: 1rem 0;
}
.sleeping {
  background-color: #ff0000;
}
</style>

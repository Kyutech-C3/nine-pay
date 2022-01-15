<template>
  <div>
    <h1>バーコードをかざしてください</h1>
    <div class="cameraArea" ref="cameraArea">
      <img v-show="code.length > 0" ref="resultImg" src="" class="resultImg" />
    </div>
    <button v-if="code.length > 0" @click="retryScan">Retry</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BarcodeScanner",
  data() {
    return {
      Quagga: null,
      code: "",
    };
  },
  mounted() {
    console.debug(this.$refs.resultImg)
    this.startScan()
  },
  methods: {
    startScan() {
      this.code = "";
      this.initQuagga();
    },
    retryScan() {
      this.stopScan()
      this.startScan()
    },
    stopScan() {
      this.Quagga.offProcessed(this.onProcessed)
      this.Quagga.offDetected(this.onDetected)
      this.Quagga.stop();
    },
    initQuagga() {
      this.Quagga = require("quagga");
      this.Quagga.onProcessed(this.onProcessed);
      this.Quagga.onDetected(this.onDetected);

      // 設定
      const config = {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: this.$refs.cameraArea,
          constraints: { facingMode: "environment" }
        },
        numOfWorkers: navigator.hardwareConcurrency || 4,
        decoder: { readers: ["ean_reader"] }
      };
      this.Quagga.init(config, this.onInit);
    },
    onInit(err) {
      if (err) {
        console.log(err);
        return;
      }
      console.info("Initialization finished. Ready to start");
      this.Quagga.start();
    },
    onDetected(success) {
      this.code = success.codeResult.code;
      if(this.code.length !== 13) {
        console.debug('code length is not 13')
        return
      }
      console.debug(success.codeResult)
      this.$emit('code', this.code)
      // 取得時の画像を表示
      // this.resultImg.setAttribute("src", this.Quagga.canvas.dom.image.toDataURL());
      console.debug(this.resultImg)
      this.$refs.resultImg.src = this.Quagga.canvas.dom.image.toDataURL()
      this.Quagga.stop();
    },
    onProcessed() {
    }
  }
});
</script>

<style>
.cameraArea {
  overflow: hidden;
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
}
.cameraArea video,
.cameraArea canvas {
  width: 100%;
}
.cameraArea .drawingBuffer {
  position: absolute;
}
button {
  width: 100px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #333;
  margin-top: 30px;
}
.resultImg {
  width: 100%;
}
.resultCode {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
.getMessage {
  color: red;
}
</style>
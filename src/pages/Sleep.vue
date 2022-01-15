<template>
  <body class="hachimaru">
    <NFCReader @addPoints="updatePoints" />   
    <div class="HP-container">  
      <div class="HP">
        {{ point }}
      </div>
      <div class="cloud-container">
        <img src="../assets/sleep_cloud_svg.svg" class="cloud">
      </div>
    </div>
    
    <div class="sub-cloud-container">
      <div class="box">
        <p>寝るともらえる<br>HP(ﾊﾝﾓｯｸﾎﾟｲﾝﾄ)<br>1min = 1HP</p>
      </div>
      <div class="sub-cloud top-cloud"></div>
      <div class="sub-cloud middle-cloud"></div>
      <div class="sub-cloud bottom-cloud"></div>
    </div>

    <div class="bed">
      <img src="../assets/sleep_bed_svg.svg">
    </div>

  </body>
</template>

<script>
import { doc, getDoc, getFirestore, updateDoc } from '@firebase/firestore';
import NFCReader from "../components/NFCReader.vue";
import { getUser } from "../plugins/auth";
export default {
    name: "Sleep",
    data() {
        return {
            point: 0
        };
    },
    mounted() {
        setInterval(() => {
            this.point++;
        }, 1000 * 60);
    },
    methods: {
      async updatePoints() {
        const user = await getUser()
        const docRef = doc(getFirestore(), 'users', user.uid)
        const docSnap = await getDoc(docRef)
        const currentPoints = docSnap.data().points || 0
        await updateDoc(docRef, {
          points: currentPoints + 1
        })
      }
    },
    components: { NFCReader }
}
</script>

<style>
#app {
  background-color: #bae8e8 !important;
}
.bed img {
  position: relative;
  max-width: 80%;
  /* top: 0px; */
}
@media screen and (min-width: 500px) {
  .bed img {
    max-width: 400px;
  }
}
.HP-container {
  font-size: 9rem;
  font-weight: bold;
  text-align: left;
  position: relative;
}
.HP {
  text-align: center;
  position: absolute;
  z-index: 10;
  left: 50%;
  transform: translate(-50%,-50%);
  top: 40%;
}
@media screen and (max-width: 500px) {
  .HP-container {
    font-size: 7rem;
  }
}
.HP img {
  z-index: -10;
}
.HP div {
  font-size: 2rem;
}
.cloud {
  max-width: 100%;
  height: auto;
}
@media screen and (min-width: 500px) {
  .cloud {
    max-width: 500px;
  }
}
.cloud-container {
  text-align: center;
}
@media screen and (min-width: 500px) {
  .sub-cloud-container {
    width: 513px;
    margin: auto;
  } 
}
.sub-cloud {
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  z-index: 1;
  transform: translate(-50%,-50%);
  position: relative;
}
.top-cloud {
  width: 90px;
  height: 70px;
  left: 75%;
  top: 36%;
}
.middle-cloud {
  width: 55px;
  height: 55px;
  left: 90%;
  top: 45%;
}
.bottom-cloud {
  width: 40px;
  height: 40px;
  left: 85%;
  top: 55%;
}
.hachimaru {
  font-family: 'Hachi Maru Pop', cursive;
  margin-top: 15px;
}
.box {
  padding: 0.5em 1em;
  margin: 2em 0;
  color: #474747;
  background: whitesmoke;
  border-left: double 7px #4ec4d3;
  border-right: double 7px #4ec4d3;
  position: absolute;
  left: 15px;
}
@media screen and (min-width: 500px) {
  .box {
    left: 15%;
  }
}
.box p {
  margin: 0; 
  padding: 0;
}
</style>

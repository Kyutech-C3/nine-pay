<template>
  <body class="hachimaru">
    <NFCReader @addPoints="updatePoints" />
    <div v-if="!available" class="alert">
      <div class="text">この端末は対応していません</div>
    </div>
    <div class="HP-container">
      <div class="HP">
        {{ points }}
      </div>
      <div class="cloud-container">
        <img src="../assets/sleep_cloud_svg.svg" class="cloud" />
      </div>
    </div>

    <div class="sub-cloud-container">
      <div class="box">
        <p>寝るともらえる<br />HP(ﾊﾝﾓｯｸﾎﾟｲﾝﾄ)<br />1min = 1HP</p>
      </div>
      <div class="sub-cloud top-cloud"></div>
      <div class="sub-cloud middle-cloud"></div>
      <div class="sub-cloud bottom-cloud"></div>
    </div>

    <div class="bed">
      <img src="../assets/sleep_bed_svg.svg" />
    </div>
  </body>
</template>

<script>
import {
  doc,
  getDoc,
  getFirestore,
  updateDoc,
  onSnapshot,
} from '@firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import NFCReader from '../components/NFCReader.vue'
import { getUser } from '../plugins/auth'

export default {
  name: 'Sleep',
  data() {
    return {
      points: 0,
      available: true,
    }
  },
  async created() {
    onAuthStateChanged(getAuth(), async (user) => {
      console.log(user)
      const uid = user.uid
      console.log(user)
      onSnapshot(doc(getFirestore(), 'users', uid), (snapshot) => {
        const d = snapshot.data()
        this.points = d.points
        console.debug(d)
      })
    })
  },
  methods: {
    async updatePoints() {
      const user = await getUser()
      const docRef = doc(getFirestore(), 'users', user.uid)
      const docSnap = await getDoc(docRef)
      const currentPoints = docSnap.data().points || 0
      await updateDoc(docRef, {
        points: currentPoints + 1,
      })
    },
  },
  components: { NFCReader },
  mounted() {
    this.available = 'NDEFReader' in window
    console.debug(this.available)
  },
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
  transform: translate(-50%, -50%);
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
  transform: translate(-50%, -50%);
  position: relative;
}
.top-cloud {
  width: 90px;
  height: 70px;
  left: 75%;
  top: -30px;
  animation: top-cloud 3s infinite;
  animation-timing-function: linear;
}
.middle-cloud {
  width: 55px;
  height: 55px;
  left: 90%;
  top: -20px;
  animation: middle-cloud 3s infinite;
  animation-timing-function: linear;
}
.bottom-cloud {
  width: 40px;
  height: 40px;
  left: 85%;
  top: 55%;
  animation: bottom-cloud 3s infinite;
  animation-timing-function: ease-out;
}
@keyframes bottom-cloud {
  15% {
    transform: scale(1.4);
  }
}
@keyframes middle-cloud {
  50% {
    transform: scale(1.4);
  }
}
@keyframes top-cloud {
  75% {
    transform: scale(1.3);
  }
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
.alert {
  padding: 0.5em 1em;
  margin: 2em 0;
  color: white;
  background: #f85e4d;
  margin: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  animation: hurueru 0.1s infinite;
}

.text {
  font-size: 50px;

  transform-origin: 50% 50%;
  display: inline-block;
}

@keyframes hurueru {
  0% {
    transform: translate(0px, 0px) rotateZ(0deg);
  }
  25% {
    transform: translate(2px, 2px) rotateZ(1deg);
  }
  50% {
    transform: translate(0px, 2px) rotateZ(0deg);
  }
  75% {
    transform: translate(2px, 0px) rotateZ(-1deg);
  }
  100% {
    transform: translate(0px, 0px) rotateZ(0deg);
  }
}
</style>

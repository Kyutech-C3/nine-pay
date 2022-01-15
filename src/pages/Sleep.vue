<template>
  <body class="hachimaru">
    <div class="HP-container">  
      <div class="HP">
        {{ points }}
      </div>
      <div class="cloud-container">
        <img src="../assets/sleep_cloud_svg.svg" class="cloud">
      </div>
    </div>
    
    <div>
      <div class="border-radius1"></div>
      <div class="border-radius2"></div>
      <div class="border-radius3"></div>
    </div>

    <div class="bed">
      <img src="../assets/sleep_bed_svg.svg">
    </div>

    <div class="box">
      <p>寝るともらえる<br>HP(ﾊﾝﾓｯｸﾎﾟｲﾝﾄ)<br> 
        1min = 1HP</p>
    </div>
  </body>
</template>

<script>
import { getFirestore, doc, onSnapshot} from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
export default {
  name: 'Sleep',
  data() {
    return {
      points: 0
    }
  },
  async created(){
    onAuthStateChanged(
      getAuth(),
      async (user) => {
        console.log(user)
        const uid = user.uid
        console.log(user)
        onSnapshot(doc(getFirestore(), 'users', uid),
        (snapshot) => {
        const d = snapshot.data()
        this.points = d.points
        console.debug(d)
        })
      })
  },
  mounted() {
    setInterval(() => {
      this.point++
    }, 1000 * 60);
  }
}
</script>

<style>
body {
  background-color: #bae8e8;
}
.bed img {
  position: relative;
  max-width: 80%;
  top: 170px;
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
.border-radius1 {
  width: 90px;
  height: 70px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  z-index: 1;
  position: absolute;
  left: 75%;
  transform: translate(-50%,-50%);
  top: 36%;
}
.border-radius2 {
  width: 55px;
  height: 55px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  position: absolute;
  z-index: 10;
  left: 90%;
  transform: translate(-50%,-50%);
  top: 45%;
}
.border-radius3 {
  width: 40px;
  height: 40px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  position: absolute;
  z-index: 10;
  left: 85%;
  transform: translate(-50%,-50%);
  top: 55%;
}
.hachimaru {
  font-family: 'Hachi Maru Pop', cursive;
}
.box {
  padding: 0.5em 1em;
  margin: 2em 0;
  color: #474747;
  background: whitesmoke; /*背景色*/
  border-left: double 7px #4ec4d3; /*左線*/
  border-right: double 7px #4ec4d3; /*右線*/
  position: relative;
  top: 150px;
}
.box p {
  margin: 0; 
  padding: 0;
}
</style>

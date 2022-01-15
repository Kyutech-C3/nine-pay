<template>
  <div class="main-area">
    <Button class="button-wrapper" text="ねる" link="/sleep" />
    <p class="point">63P</p>
    <Button class="button-wrapper" text="冷蔵庫" link="/list" />
  </div>
</template>

<script>
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Button from '../components/ButtonCircle.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default {
  components: {
    Button
  },
  created(){
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      console.log(user)
      if(user === null){
        this.$router.push("/login")
      }
    })
  },
  async mounted() {
    const db = getFirestore()
    const docRef = doc(db, 'test', 'hoge')
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()) {
      console.log(docSnap.data())
    }
  }
}
</script>

<style scoped>
.main-area{
  width: 100%;
  height: calc(100vh - 80px);
  background: #e3f6f5;
  display: flex;
  flex-flow: column;
  text-align: center;
}
.button-wrapper{
  margin: 60px auto;
}
.point{
  font-size: 40px;
}
</style>

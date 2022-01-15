<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

export default {
  name: 'App',
  components: {
    HelloWorld
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
</style>

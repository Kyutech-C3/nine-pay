<template>
  <div>
    <div>
      <label>JANコード</label>
      <input type="text" :value="code" disabled>
    </div>
    <div>
      <label>名称</label>
      <input type="text" v-model="name">
    </div>
    <button @click="submit">冷蔵庫に入れる</button>
  </div>
</template>
<script>
import { collection, getFirestore, serverTimestamp, addDoc } from '@firebase/firestore'
export default {
  name: 'AddForm',
  props: {
    code: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    submit() {
      if(this.user === null) {
        alert('ログインしてください')
        return
      }
      console.debug(this.$user)
      const uid = this.$user.uid
      const thingsCollection = collection(getFirestore(), 'users', uid, 'things')
      addDoc(thingsCollection, {
        barcode: this.code,
        name: this.name,
        createdAt: serverTimestamp()
      })
      
    }
  }
}
</script>
<style scoped>
</style>
<template>
  <div class="form">
    <div>
      <div class="form-label">JANコード</div>
      <div>{{ code === null ? '-' : code }}</div>
    </div>
    <div>
      <div class="form-label">名称</div>
      <input type="text" v-model="name">
    </div>
    <button @click="submit">冷蔵庫に入れる</button>
  </div>
</template>
<script>
import { collection, getFirestore, serverTimestamp, addDoc, where, query, getDocs } from '@firebase/firestore'
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
    async checkAlreadyRegisterd() {
      const uid = this.$user.uid
      const thingsCollection = collection(getFirestore(), 'users', uid, 'things')
      console.log('check', this.code)
      const docs = await getDocs(query(thingsCollection, where('barcode', '==', this.code)))
      console.debug('detected doc', docs)
      if(docs.empty) return null
      return docs.docs
    },
    async submit() {
      if(this.user === null) {
        alert('ログインしてください')
        return
      }

      const docs = await this.checkAlreadyRegisterd()
      if(docs !== null) {
        const doc = docs[0]
        alert('すでに同じ物が冷蔵庫に入っています', doc.get('name'))
        return
      }

      if(this.name === '') {
        alert('名前を入力してください')
        return
      }

      console.debug(this.$user)
      const uid = this.$user.uid
      const thingsCollection = collection(getFirestore(), 'users', uid, 'things')
      addDoc(thingsCollection, {
        barcode: this.code,
        name: this.name,
        createdAt: serverTimestamp()
      }).catch(e => alert(e))

      this.$router.push('/list')
      
    }
  }
}
</script>
<style scoped>
.form {
  background-color: #fff;
}
.form input {
  width: 100%;
  margin-bottom: 1rem;
}
.form-label {
  font-weight: 800;
}
</style>
<template>
  <div class="wrapper">
    <div class="topic">
      <a>冷蔵庫</a><br />
      <a>{{ points }}HP</a>
    </div>
    <table class="tbl">
      <thead>
        <tr>
          <th>id</th>
          <th>もの</th>
          <th>コード</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in datas" :key="data.name">
          <td>{{ index + 1 }}</td>
          <td>{{ data.name }}</td>
          <td>{{ data.barcode }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  getDocs,
  getDoc,
  getFirestore,
  collection,
  doc,
} from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
export default {
  data() {
    return {
      datas: [],
      points: -1,
      temppoints: -1,
    }
  },
  async created() {
    onAuthStateChanged(getAuth(), async (user) => {
      console.log(user)
      const uid = user.uid
      const thingsCollection = collection(
        getFirestore(),
        'users',
        uid,
        'things'
      )
      const docs = await getDocs(thingsCollection)
      this.datas = docs.docs.map((d) => d.data())
      console.debug(this.datas)
      console.log(user)
      this.user = user
      const docref = doc(getFirestore(), 'users', uid)
      const docSnap = await getDoc(docref)
      const d = docSnap.data()
      this.points = d.points
      console.debug(d)
    })
  },
}
</script>

<style scoped>
.wrapper {
  padding: 20px;
  margin-bottom: 120px;
}
.topic {
  font-size: 40px;
}
.tbl {
  width: 100%;
  border-spacing: 0;
  background-color: white;
  max-width: 800px;
  margin: 1rem auto;
}

table th {
  border-bottom: solid 2px #ff8e3c;
  padding: 10px 0;
}

table td {
  border-bottom: solid 2px #ddd;
  text-align: center;
  padding: 10px 20px;
}
</style>

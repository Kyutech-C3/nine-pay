<template>
  <div class="wrapper">
    <table class="tbl">
      <thead>
        <tr>
          <th>id</th>
          <th>もの</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in things" :key="data.name">
          <td>{{ index + 1 }}</td>
          <td>{{ data.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  getDocs,
  getFirestore,
  collection,
} from 'firebase/firestore'
import { getUser } from '../plugins/auth'
export default {
  data() {
    return {
      things: []
    }
  },
  async created() {
    await getUser()
    const usersCollection = collection(
      getFirestore(),
      'users',
    )
    const users = await getDocs(usersCollection)
    await Promise.all(users.docs.map(async (u) => {
      console.debug(u.data().name, u.id)
      const thingsColl = collection(getFirestore(), 'users', u.id, 'things')
      const things = (await getDocs(thingsColl)).docs.map(d => d.data())
      this.things = this.things.concat(things)
    }))
    console.log(this.things)
  }
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

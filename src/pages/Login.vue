<template>
  <div class="wrapper">
    <div>
      <button @click="login" class="log-button">Googleでログイン</button>
    </div>
    <div>
      <button @click="logout" class="log-button">ログアウト</button>
    </div>
  </div>
</template>

<script>
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'

export default {
  name: 'Login',
  methods: {
    login() {
      const provider = new GoogleAuthProvider()
      const auth = getAuth()
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential.accessToken
          // The signed-in user info.
          const user = result.user
          console.log(token)
          console.log(user)
          this.addUser(user.uid, user.displayName).then(() => {
            this.$router.push('/')
          })
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          // The email of the user's account used.
          const email = error.email
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error)
          console.error(errorCode, errorMessage)
          console.log(email, credential)
        })
    },
    logout() {
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log('success logout')
          alert('ログアウトしました')
        })
        .catch((error) => {
          // An error happened.
          console.error(error)
        })
    },
    async addUser(uid, name) {
      const db = getFirestore()
      const docRef = doc(db, 'users', uid)
      const docSnap = await getDoc(docRef)

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: name,
          points: 0,
        })
      }
    },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  justify-content: center;
  min-height: 400px;
}
.log-button {
  text-decoration: none;
  background-color: white;
  color: rgb(0, 0, 0);
  width: 130px;
  height: 130px;
  line-height: 130px;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  transition: 0.4s;
  border: dashed 2px rgb(173, 173, 173);
  box-shadow: 3px 3px 10px silver;
  margin: 40px;
}
.log-button:hover {
  background-color: rgb(231, 230, 230);
}
</style>

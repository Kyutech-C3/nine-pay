<template>
  <center>
    <button @click="login">Googleでログイン</button>
    <button @click="logout">ログアウト</button>
  </center>
</template>

<script>
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'

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
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          // The email of the user's account used.
          const email = error.email
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.error(errorCode, errorMessage)
          console.log(email, credential)
        })
    },
    logout() {
      const auth = getAuth()
      signOut(auth).then(() => {
        // Sign-out successful.
        console.log('success logout')
      }).catch((error) => {
        // An error happened.
        console.log(error)
      })
    }
  }
}
</script>
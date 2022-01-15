import { getAuth, onAuthStateChanged } from 'firebase/auth'

const authState = () => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    console.log(user)
  })
}
export default authState
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const authState = (Vue) => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    console.log(user)
    Vue.prototype.$user = user
  })
}
export default authState

export const getUser = () => new Promise((resolve) => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    // console.debug(user)
    resolve(user)
  })
})
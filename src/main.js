import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import { initializeApp } from 'firebase/app'
import { getMessaging, getToken } from 'firebase/messaging'
import authState from './plugins/auth'
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

var firebaseConfig = {
	apiKey: process.env.VUE_APP_API_KEY,
	authDomain: process.env.VUE_APP_AUTH_DOMAIN,
	databaseURL: process.env.VUE_APP_DATABASE_URL,
	projectId: process.env.VUE_APP_PROJECT_ID,
	storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
	appId: process.env.VUE_APP_APP_ID,
	measurementId: process.env.VUE_APP_MEASUREMENT_ID
}
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
export { firebaseApp }

const messaging = getMessaging()
// Get token
getToken(messaging, { vapidKey: process.env.VUE_APP_PUBLIC_VAPID_KEY })
	.then((currentToken) => {
		if (currentToken) {
			// Send the token to your server and update the UI if necessary
			console.log(`FCM TOKEN: ${currentToken}`)
		} else {
			// Show permission request UI
			console.log('No registration token available. Request permission to generate one.')
		}
	}).catch((err) => {
		console.log('Unable to get permission to notify.', err)
	})

Vue.use(authState)

library.add(faArrowLeft, faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import { initializeApp } from 'firebase/app'
import authState from './plugins/auth'
import './registerServiceWorker';

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

Vue.use(authState)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

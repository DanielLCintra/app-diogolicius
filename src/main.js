import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import router from './router'
import store from './store'
import firebase from './plugins/firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(firebase, { router })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

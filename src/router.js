import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Login from './views/LoginIndex'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'auth.index',
      component: Login
    }
  ]
})

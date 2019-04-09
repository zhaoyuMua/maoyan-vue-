import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/pages/start/Start'
import Home from '@/pages/home/Home'

Vue.use(Router)
export default new Router({
  routes: [
    {
    path: '/',
    name: 'start',
    component: Start
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]
})

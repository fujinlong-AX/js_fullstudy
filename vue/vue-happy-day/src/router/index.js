import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Anwser from '../views/Anwser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/Anwser',
    name: 'Anwser',
    component: Anwser
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

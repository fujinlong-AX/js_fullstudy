import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login.vue'
import Home from '@/views/Home.vue'
import User from '@/views/User.vue'
import User2 from '@/views/User2.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'user',
        component: User
      },
      {
        path: 'user2',
        component: User2
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

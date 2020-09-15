import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StarNotes',
    component: () => import ('@/views/StarNotes.vue'),
    meta: {
      title: '星辰日记'
    }
  },
  {
    path: '/StarBanner',
    name: 'StarBanner',
    component: () => import ('@/views/StarBanner.vue'),
    meta: {
      title: '星辰日记'
    }
  },
  {
    path: '/starLogin',
    name: 'starLogin',
    component: () => import ('@/views/starLogin.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/StarRegister',
    name: 'StarRegister',
    component: () => import ('@/views/StarRegister.vue'),
    meta: {
      title: '注册'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

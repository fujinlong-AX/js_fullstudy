import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/HelloWorld.vue'
import Hi from '../components/Hi.vue'
import Hi1 from '../components/Hi1.vue'
import Hi2 from '../components/Hi2.vue'

Vue.use(Router)
// Vue.use(Hi)
// Vue.use(Hi2)
// Vue.use(Hi1)

export default new Router({
  routes: [
    {
    path: '/',
    name: 'Hello',
    components: Hello
  },
  {
    path: '/hi',
    name: 'Hi',
    components: Hi,
    children: [{
        path: 'hi1',
        components: Hi1
      },
      {
        path: 'hi2',
        components: Hi2
      }]
  }
]
})
// let str = 'babel'
// let func = s => {
//   document.getElementById('app').innerHTML = `hello ${s}`
// }
// func(str)

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: "#app",
  template: '<App/>',
  component: {App}
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const getters = {
  count: (state) => {
    return state.count += 100
  }
}

const mutations = {
  add(state) {
    state.count++
  },
  reduce(state) {
    state.count--
  }
}
// 提交mutations里面的方法
const actions = {
  addAction(context) {
    context.commit('add')
  }
}

const moduleA = {
  state,
  mutations,
  getters,
  actions
}

const modulesB = {

}

export default new Vuex.Store({
  
})
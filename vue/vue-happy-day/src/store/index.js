import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    grade: 0,
    topicList: [
      {
        title: '题目一',
        choice: [
          '正确',
          '错误',
          '错误',
          '错误',
        ]
      },{
        title: '题目二',
        choice: [
          '正确',
          '错误',
          '错误',
          '错误',
        ]
      },{
        title: '题目三',
        choice: [
          '正确',
          '错误',
          '错误',
          '错误',
        ]
      },{
        title: '题目四',
        choice: [
          '正确',
          '错误',
          '错误',
          '错误',
        ]
      },
      {
        title: '题目五',
        choice: [
          '正确',
          '错误',
          '错误',
          '错误',
        ]
      }
    ],

  },
  mutations: {
    
  },
  actions: {
    
  },
  modules: {
  }
})

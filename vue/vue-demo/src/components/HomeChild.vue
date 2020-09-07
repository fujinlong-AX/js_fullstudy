<template>
  <div class="home">
    <p>首页的子主页</p>
    <hr/>
    <h3>{{count}}</h3>
    <div class="btn">
      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store.js'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      msg: 'hello world'
    }
  },
  store,
  // computed:{
  //   count() {
  //     return this.$store.count
  //   }
  // },
  // computed: mapState({
  //   count: state => state.count
  // }),
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count'])
  },
  // methods: {
  //   add() {
  //     // this.$store.state.count++
  //     this.$store.commit('add')
  //   },
  //   reduce() {
  //     this.$store.commit('reduce')
  //   }
  // }
  // methods: mapMutations([
  //   'add',
  //   'reduce'
  // ])
  methods: {
    ...mapMutations(['add', 'reduce'])
  }
}
</script>

<style>

</style>
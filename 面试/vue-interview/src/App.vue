<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
// activated：页面第一次进入的时候，钩子触发的顺序是created->mounted->activated
// deactivated ：页面退出的时候会触发deactivated，当再次前进或者后退的时候只触发activated
  activated() { // 命中缓存

  },
  deactivated() {

  },
  beforeCreate() {
    console.log('APP beforeCreate');
  },
  created() {
    console.log('APP created');
  },
  beforeMouted() {
    console.log('APP beforeMouted');
  },
  mounted() {
    console.log('APP mounted');
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

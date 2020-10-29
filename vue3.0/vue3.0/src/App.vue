<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <hr />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import comDemo from './components/comDemo.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    comDemo
  }
}
</script>

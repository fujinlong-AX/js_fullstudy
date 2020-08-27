<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <router-link to="/hi/hi1">hi 一</router-link> 
    <span style="display:inline-block"></span>
    <router-link to="/hi/hi2">hi 二</router-link>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: "Hi, I am laojiang"
    }
  }
}
</script>

<style>

</style>
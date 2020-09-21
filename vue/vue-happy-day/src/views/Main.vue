<template>
  <div class="main-wrapper">
    <div class="main-box">
        <img src="../assets/images/1-1.jpg" alt="">
    </div>
    <div class="main-home">
      <img src="../assets/images/1-2.png" alt="">
    </div>
    <div class="main-week">
      <img src="../assets/images/1-3.png" alt="">
    </div>
    <div class="main-start" >
      <img src="../assets/images/1-4.png" alt="" @click="handleClickStart">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClickStart() {
      this.$router.push('/Anwser')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .main-wrapper
    width 100%
    height 100%
    position relative
    .main-week
      position absolute
      right -500px
      top 0
      transform scale(1.5)
    .main-home
      position absolute
      top 400px
      left 220px
      transform scale(1.6)
    .main-start
      position absolute
      top 1050px
      left 420px
      transform scale(1.6)
</style>
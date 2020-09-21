<template>
  <div class="anwser-wrapper">
    <div class="anwser-box">
      <img src="../assets/images/1-1.jpg" alt="">
    </div>
    <div class="anwser-num">
      <img src="../assets/images/1-3.png" alt="">
    </div>
    <div class="anwser-border">
      <img src="../assets/images/2-1.png" alt="">
    </div>
    <div class="anwser-next">
      <img src="../assets/images/2-2.png" alt="">
    </div>
    <div class="anwser-list"> 
        <span>
          {{topicList[index].title}}
          <ul>
            <li v-for="(item,index) in topicList[index].choice" :key="index" @click="correctAnwser(index)" :class="color">
            {{item}}
            </li>
          </ul>         
        </span>
      
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      index: 0,
      color: 'selected'
    }
  },
  computed: {
    ...mapState(['grade', 'topicList']),
  },
  methods: {
    correctAnwser(index) {
      
    }
  }
}
</script>

<style lang="stylus" scoped>
  .anwser-wrapper
    width 100%
    height 100%
    position relative
    .anwser-num
      position absolute
      right -500px
      top 0
      transform scale(1.5)
    .anwser-border
      position absolute
      top 400px
      left 220px
      transform scale(1.6)
    .anwser-next
      position absolute
      top 1050px
      left 420px
      transform scale(1.6)
    .anwser-list
      width 500px
      height 400px
      color #ffffff
      font-size 25px
      position absolute
      top 400px
      left 220px
      transform scale(1.6)
      margin-left 200px
      margin-top 100px
      .selected
        color green
</style>
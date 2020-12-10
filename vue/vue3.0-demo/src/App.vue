<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>欢迎来到红浪漫洗浴中心</h1>
    <button @click="updateClock">上电池</button>
    <div>请选择陪您吟诗作对的小姐姐</div>
    <div>{{clock}}</div>
    <button @click="selectGirl(index)" v-for="(item,index) in girls" :key="index">
      {{index}}:{{item}}
    </button>
    <div v-if="curGirl">您当前选择的小姐姐是【{{curGirl}}】</div>
    <button @click="check">确认</button>
    <Suspense v-if="isCheck">
      <template #default>
        <AsyncShow />
      </template>
      <template #fallback>
        <div>小姐姐马上就来。。。</div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref,reactive,toRefs, Suspense } from 'vue';
import {clock, updateClock} from './hooks/useClock';
import AsyncShow from './components/AsyncShow.vue';

interface DataProps{
  girls: string[];
  curGirl: string;
  selectGirl: (index: number) => void;
}
export default defineComponent({
  name: 'App',
  components: {AsyncShow},
  setup(){
    const isCheck = ref(false);
    const data = reactive(
      {
        girls:['大脚','刘英','小红'],
        curGirl:'',
        selectGirl:(index: number) => {
          console.log(data);
          data.curGirl = data.girls[index];
          isCheck.value = false
        }
      }
    )
    const refData = toRefs(data);
    const check = () => {
      isCheck.value = true
    }
    // const girls = ref(['大脚','刘英','小红']);
    // const curGirl = ref('');
    // const selectGirl = (index: number)=>{
    //   curGirl.value = girls.value[index];
    // }
    return {
     ...refData,
     clock,
     updateClock,
     isCheck,
     check
    }
  }
});
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

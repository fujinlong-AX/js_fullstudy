<template>
  <h1>{{state.count}} * 2 = {{double}}</h1>
  <h2>{{num}}</h2>
  <button @click="add">累加</button>
</template>

<script>
import { reactive, computed, ref, onMounted} from 'vue'   // 提高treeshaking
export default {
  setup() {
    const state = reactive({
      count: 1
    }) 
    const num = ref(2)
    function add() {
      // num.value ++
      state.count++
    }
    const double = computed(() => state.count * 2)

    onMounted(() => {
      console.log('mounted');
    })
    return {
      state,
      add,
      double,
      num
    }
  }
}
function useCounter(count, n) {
  const state = reactive({
    count
  })
  const double = computed(() => state.count)
}
</script>

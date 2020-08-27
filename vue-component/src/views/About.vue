<template>
  <div class="about">
    <User :userName="name" @babyChange="getBabyName"></User>
    <Animal :babyName="babyName"></Animal>
  </div>
</template>

<script>
import User from '@/components/User'
import Animal from '@/components/Animal'
export default {
  data() {
    return {
      name: '皮皮',
      babyName: undefined
    }
  },
  components: {
    User,
    Animal
  },
  methods: {
    getBabyName(name) {
      // console.log(name)
      this.babyName = name
    }
  }
}
</script>

<style>
.about{
  color: red;
}
</style>
<template>
  <div class="home">
    <v-header title="豆瓣电影评分"></v-header>
    <Star :rating="{stars:[1, 1, 1, 1, 0], score: 8.5}"></Star>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Star from '@/components/Star.vue'

export default {
  name: 'Home',
  components: {
    'v-header': Header
  },
  name: 'Star',
  components: {
    'Star': Star
  },
}
</script>

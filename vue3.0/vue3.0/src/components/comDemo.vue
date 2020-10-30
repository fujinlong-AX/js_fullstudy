<!-- fragment -->
<template>
  <ul>
    <FragmentDemo :data="[5, 3, 1, 6, 9, 4, 2, 8]" />
    <hr />
    <TeleportDemo />
    <hr />
    <SuspenseDemo />
  </ul>
</template>

<script>
import FragmentDemo from './fragment.vue'
import TeleportDemo from './teleport.vue'
import SuspenseDemo from './suspense.vue'
export default {
  components: {
    FragmentDemo,
    TeleportDemo,
    SuspenseDemo
  }
}
</script>

<style>

</style>
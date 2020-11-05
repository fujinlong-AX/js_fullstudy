<template>
  <div class="mappage">
    <div class="section">
      <input type="text" placeholder="搜索" focus="true">
    </div>
    <scroll-view :scroll-y="true" class="addcont" style="height: 500rpx;">
      <div class="result" v-for="(item, index) in tips" :key="index">
        {{item.name}}
      </div>
    </scroll-view>
    <div class="map-container">
      <div class="title">显示当前位置:</div>
      <map name="map" id="map" scale="16" :longitude="longitude" :latitude="latitude" :markers="markers"></map>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tips: [],
      longitude: 0,
      latitude: 0,
      markers: []
    }
  }
}
</script>

<style>

</style>
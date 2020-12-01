<template>
  <div class="order">
    <div class="address" v-if="address.name">
      <div class="item">
        <div class="list">
          <div class="addresslist">
            <div>
              <span>张三</span>
              <div class="moren">默认</div>
            </div>
            <div class="info">
              <p>mobile</p>
              <p>address</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="seladdress" v-else>请选择默认地址</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      address: {}
    }
  },

}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
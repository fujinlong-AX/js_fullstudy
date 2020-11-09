<template>
  <div class="index">
    <!-- 头部的搜索 -->
    <div class="search">
      <div @click="toMappage">{{cityName}}</div>
      <div>
        <input type="text" placeholder="搜索商品"  />
        <span class="icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
import amapFile from '../../utils/amap-wx.js'
export default {
  data () {
    return {
      cityName: '南昌'
    }
  },
  methods: {
    toMappage() {
      // 通过我们的wx.getSetting 先查询一下用户是否授权"scoped.record"
      let _this = this
      wx.getSetting({
        // withSubscriptions: false,
        success: (res)=>{
          // 如果没有同意授权，打开设置
          // console.log(res);
          if (!res.authSetting['scope.userLoacation']) {
            wx.openSetting({
              success: (res)=>{
                // 获取授权位置信息
                _this.getCityName()
              },
            });
          } else {
            wx.navigateTo({
              url: '/pages/mappage/main',
            })
          }
        },
        fail: (err)=>{
          console.log(err);
        },
        complete: ()=>{}
      });
    },
    getCityName() {
      let _this = this 
      var myAmapFun = new amapFile.AMapWX({key:'23a534071fbf66c244b9f477d0dc89ae'})
      // 搞得地图中获取位置的方法
      myAmapFun.getRegeo({
        success: function(data) {
          // 成功回调
          console.log(data);
        },
        fail: function(info) {
          // 失败的回调
          console.log(info);
          _this.cityName = '北京'
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style";
</style>
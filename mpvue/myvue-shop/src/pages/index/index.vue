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
    <div class="swiper">
      <swiper class="swiper-container" indicator-dots="true" autoplay="true" interval="3000" circular="true" duration="500">
        <block v-for="(item, index) in banner" :key="index">
          <swiper-item class="swiper-item">
            <image class="slide-image" :src="item.image_url" />
          </swiper-item>
        </block>
      </swiper>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
import amapFile from '../../utils/amap-wx.js'
import { get,post } from '../../utils/index'
export default {
  data () {
    return {
      banner: []
    }
  },
  computed: {
    ...mapState(['cityName'])
  },
  methods: {
    ...mapMutations(['update']),
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
          console.log(err,'11111');
        },
        complete: ()=>{}
      });
    },
    getCityName() {
      let _this = this 
      var myAmapFun = new amapFile.AMapWX({key:'ebb08a05686a32485ea94125321d4849'})
      // 搞得地图中获取位置的方法
      myAmapFun.getRegeo({
        success: function(data) {
          // 成功回调
          console.log(data);
        },
        fail: function(info) {
          // 失败的回调
          console.log(info);
          // _this.cityName = '北京'
          _this.update({ cityName: '北京' })
        }
      })
    },
    async getData() {
      const data = await get('/index/index') // http://localhost:5757/lm/index/index
      console.log(data);
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style";
</style>
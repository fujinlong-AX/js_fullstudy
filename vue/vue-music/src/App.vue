<template>
  <div id="app">
    <v-header>
      <i class="iconfont" slot="left-icon">&#xe600;</i>
      <span slot="content">我的音乐</span>
      <i class="iconfont" slot="right-icon">&#xe605;</i>
    </v-header>
    <!-- <router-view/> -->

    <!-- menu -->
    <v-sidebar></v-sidebar>
  </div>
</template>

<script>
import header from '@/components/header'
import sidebar from '@/components/sidebar'
export default {
    components: {
    "v-header": header,
    "v-sidebar": sidebar
  }
}
</script>


<style lang="stylus">
  @font-face 
    font-family: 'iconfont';  /* project id 2052938 */
    src: url('//at.alicdn.com/t/font_2052938_olq0uw82gh9.eot');
    src: url('//at.alicdn.com/t/font_2052938_olq0uw82gh9.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_2052938_olq0uw82gh9.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_2052938_olq0uw82gh9.woff') format('woff'),
    url('//at.alicdn.com/t/font_2052938_olq0uw82gh9.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_2052938_olq0uw82gh9.svg#iconfont') format('svg');
  .iconfont
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  html,
  body 
    line-height: 1;
    font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    background: rgba(8, 5, 58, 0.9);
    color: #fff;
  
</style>

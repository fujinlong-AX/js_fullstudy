<template>
  <div class="search">
    <div class="head">
      <div>
        <img src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/search2-2fb94833aa.png" alt="">
        <!-- confirm-type="search"这个是input type="text"的时候才能用，这个是键盘点击enter的键的文字，confirm是点击enter时会触发的函数 -->
        <input type="text" confirm-type="search" focus="true" v-model="words" @focus="inputFocus" @input="tipsearch" @confirm="searchWords" placeholder="商品搜索">
        <img @click="clearInput" class="del" src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/clearIpt-f71b83e3c2.png" alt="">   
      </div>
      <div @click="cancel">取消</div>
    </div>
    <div class="searchtips" v-if="words">
      <div>
        牙刷
      </div>
      <div class="nogoods">数据库暂无此类商品</div>
    </div>

    <div class="history">
      <div class="t">
        <div>历史记录</div>
        <div @click="clearHistory"></div>
      </div>
      <div class="cont">
        <div>日式</div>
      </div>
    </div>

    <div class="history hotsearch">
      <div class="t">
        <div>热门搜索</div>
      </div>
      <div class="cont">
        <div class="active">日式</div>
        <div>123</div>
        <div>456</div>
        <div>789</div>
      </div>
    </div>
  </div>
</template>

<script>
import { get,post } from '../../utils/index'
export default {
  data() {
    return {
      words: '',
      openId: '',
      hotData: [],
      historyData: []
    }
  },
  methods: {
    clearInput() {
      this.words = ''
    },
    cancel() {

    },
    clearHistory() {

    },
    inputFoucs() {

    },
    tipsearch() {

    },
    async searchWords(e) {
      let value = e.currentTarget.dataset.value
      this.words = value || this.words
      const data = await post('/search/addhistoryaction', {
        openId: this.words,
        keyword: value || this.words
      })
      console.log(data);
      // 获取历史数据
      this.getHotData() 
    },
    async getHotData (first) {
      const data = await get('/search/indexaction?openId=' + this.openId)
      this.historyData = data.historyData
      this.hotData = data.hotData
      console.log(data);
    }
  }
}
</script>

<style lang="less" scoped>
  @import './style.less';
</style>
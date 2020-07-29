// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { //打开页面生命周期就会自动执行
    this.getCity((city) => {
      this.loadData(0, {
        city: city,
        apikey:'0df993c66c0c636e29ecbb5344252a4a'
      })
    })
  },

  loadData(idx, params) {
    console.log(params)
    let url = wx.db.url('/v2/movie/in_theaters')
    wx.request({
      url: url,
      data: params,
      header: {'content-type': 'json'},
      success: (res) => {
        console.log(res)
      }
    })
  },

  getCity(succeed) {
    // 拿到当前所在的城市名称
    // 先拿到当前所在区域的经纬度(小程序自带的api)
    wx.getLocation({
      success: function (res) {
        wx.request({ // 往百度地图发起请求
          url: 'https://api.map.baidu.com/reverse_geocoding/v3',
          data: {
            ak: 'uXDG6lrpKFg36aUkGnzzcrizuPfTdcVH',
            output: 'json',
            coordtype: 'wgs84ll',
            location: `${res.latitude},${res.longitude}`
          },
          success: (res) => {
            console.log(res);
            let city = res.data.result.addressComponent.city
            succeed && succeed(city) //这是啥？
          },
          fail: () => {
            console.log('获取城市失败');
          }
        })
      },
      fail: () => {},
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
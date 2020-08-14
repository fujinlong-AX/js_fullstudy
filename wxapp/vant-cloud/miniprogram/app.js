//app.js
App({
  onLaunch: function (option) {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'wx-db-3pr8v',
        traceUser: true,
      })
    }

    this.globalData.shareParam = option.query
    // 查看是否授权
    wx.getSetting({
      success: (settingRes)=>{
        // 已经授权
        if (settingRes.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(infoRes) {
              self.globalData.userInfo = infoRes.userInfo
            },
          })
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });

    wx.cloud.callFunction({
      name: 'createUser',
      data: {
        
      }
    })

    this.globalData = {}
  }
})

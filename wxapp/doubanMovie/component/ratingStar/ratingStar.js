// component/ratingStar/ratingStar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {
      type:Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    arrayUrl: []
  },


  lifetimes:{
      attached: function () {
      let score = this.data.score
      console.log(score)
      let scoreInt = parseInt(score)
      let arrayUrl = this.data.arrayUrl
      for(let i = 0; i < scoreInt; i++){
        arrayUrl.push('../../assets/img/rating_star_small_on.png')
      } 
      if(score === scoreInt){
        for(let i = 0; i < (5-scoreInt);i++){
          arrayUrl.push('../../assets/img/rating_star_small_off.png')
        }
      }else{
        arrayUrl.push('../../assets/img/rating_star_small_half.png')
        for(let i = 0; i < (4 - scoreInt);i++){
          arrayUrl.push('../../assets/img/rating_star_small_off.png')
        }
      }
      this.setData({
        arrayUrl
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})

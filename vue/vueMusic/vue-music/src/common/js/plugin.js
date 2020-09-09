let Toast = {}
Toast.install = function(Vue, options) { // 安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法
  let opt = {
    defaultType: 'center', // 默认显示位置
    duration: '1500' // 持续的时间
  }

  console.log(options)
  for (let property in options) {
    opt[property] = options[property] // 使用 options 配置
  }

  Vue.prototype.$toast = (tips, type) => {
    if (type) {  // ？？
      opt.defaultType = type // 如果传了type，那么就使用该type作为位置展示
    }

    if(document.querySelector('.vue-toast')) {
      clearTimeout(timer)
      timer = null
      timer = setTimeout(() => {
        document.body.removeChild(tpl)
      }, opt.duration)
      return
    }

    let toastTpl = Vue.extend({  // ？？
      template: '<div class="vue-toast toast-'+ opt.defaultType +'">'+ tips +'</div>'
    })
    let tpl = new toastTpl().$mount().$el; // ？？
    document.body.appendChild(tpl)
    let timer = setTimeout(() => {
      document.body.removeChild(tpl)
    }, opt.duration)
  }

  ['bottom', 'center', 'top'].forEach(type => { // ?? 
    Vue.prototype.$toast[type] = (tips) => {
      return Vue.prototype.$toast(tips, type)
    }
  })
}

export {
  Toast
}
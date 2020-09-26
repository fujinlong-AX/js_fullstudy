// 能独立监听某个数据的变化
// 提供可执行函数的场所

class wacther {
  constructor (opts) {
    this.$data = this.getBaseType(opts.data) === 'Object' ? opts.data : {}
    this.$watch = this.getBaseType(opts.watch) === 'Object' ? opts.watch : {}
    for (let key in opts.data) {  // Object.keys(opts.data).
      this.setData(key)
    }
  }

  getBaseType(target) {
    const typeStr = Object.toString.call(target)
    return typeStr.slice(8, -1)
  }  
  setData(_key) {
    Object.defineProperty(this, _key, { // Object.defineProperty(this)把上下文指向当前的对象
      get: function () {
        return this.$data[_key]
      },
      set: function (val) {
        const oldVal = this.$data[_key]
        if (oldVal === val) return val
        this.$data[_key] = val
        this.$watch[_key] && this.getBaseType(this.$watch[_key]) === 'Function' && (
          this.$watch[_key].call(this, val, oldVal)
        )
        return val
      }
    })
  }
}


let vm = new wacther({
  data: {
    a: 0,
    b: 'hello'
  },
  watch: {
    a(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  }
})


setTimeout(() => {
  vm.a = 1
}, 1000)
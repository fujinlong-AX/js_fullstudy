import add from './add.js'
import min from './min.js'

// 1. es-module 在代码静态分析的时候， 就能知道你引入了哪些模块
// 2. webpack production 会开启tree-sharking
// 3. 每个模块假如存在（副作用），想剔除它sideEffects:false,
// 基本上只要不是pollyFill（垫片）形式的（副作用）都能加上sideEffects：
// const Promise = Promise || function Promise() {// 自己实现}
// 4. 第三方模块（loash/element-ui），小心 他们不是 es-module
console.log(add(4,5));
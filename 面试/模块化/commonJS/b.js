const mod = require('./a')
console.log(mod.c);
mod.inc()
// 1.导入的值就是 把导出的值 复制(拷贝)一份过来
// 2.如果一个模块被require了两次，他会把上一次的结果缓存起来
console.log(mod.c);
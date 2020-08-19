const Koa = require('koa');

const app = new Koa() // 定义一个新的koa实例

const one = ctx => {
  console.log('<<one');
  next()
  console.log('one>>');
}
const two = ctx => {
  console.log('<<two');
  next()
  console.log('two>>');
}
const three = ctx => {
  console.log('<<three');
  next()
  console.log('three>>');
}


app.use(one)
app.use(two)
app.use(three)
app.listen(3000)
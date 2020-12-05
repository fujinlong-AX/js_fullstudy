const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const that = this
  that.state = PENDING
  that.value = null             // 存resolve和reject中传入的值
  that.resolvedCallbacks = [] // .then(() => {})  第一个成功回调
  that.rejectedCallbacks = [] // .then(() => {})  第二个失败回调

  function resolve(value) {
    if (that.state === PENDING) {
      that.state = RESOLVED
      that.value = value
      that.resolvedCallbacks.map(cb => {
        return cb(taht.value)
      })
    }
  }

  function reject(value) {
    if (that.state === PENDING) {
      that.state = REJECTED
      that.value = value
      that.rejectedCallbacks.map(cb => {
        return cb(taht.value)
      })
    }
  }
  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }

MyPromise.prototype.then = function(onFulfilled, onRejected) {
  const that = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => {throw r}
}
  if (this.state === PENDING) {
    that.resolvedCallbacks.push(onFulfilled)
    that.rejectedCallbacks.push(onRejected)
  }
  if (that.state === RESOLVED) {
    onFulfilled(that.value)
  }
  if (that.state === REJECTED) {
    onRejected(that.value)
  }
}
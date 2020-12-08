Array.prototype.myReduce = function (cb, defaultVal) {
  let totalNum = defaultVal || this[0]
  for (let i = defaultVal ? 0 : 1; i < this.length; i ++) {
    let num  = this[i]
    totalNum = cb(totalNum, num)
  }
  return totalNum
}
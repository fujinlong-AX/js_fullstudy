// ['1', '2', '3'].map(parseInt)

// 站在radix进制的基础上来看第一个参数，把它转化成10进制
parseInt(100, 2)


[1, 2, 3].map((item, index) => {
  return parseInt(item, index)
})

// parseInt(1, 0)
// parseInt(2, 1)
// parseInt(3, 2)
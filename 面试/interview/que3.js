let arr = [[1, 2, 2], [3, 4, 5, 5],[6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]

// 拍平， 去重

function flat() {
  let stack = [...a], res = []    
  while (stack.length) {
      let item = stack.pop()
      if(Array.isArray(item)) {
          stack.push(...item)
      } else {
          res.unshift(item)
      }
  }
  return res
}

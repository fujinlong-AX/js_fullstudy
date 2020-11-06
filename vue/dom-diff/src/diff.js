// 类型相同的话，看属性
// 产生出来一个{ type: '', attrs: {class: 'list-group'}}
// 新的dom节点不存在 { type: 'remove', index: xxx}
// 类型不同的话，直接替换整个dom
// 文本不一样 {type: 'text', text: '1'}
function diff(oldTree, newTree) {
  let patches = {}
  let index = 0
  walk(oldTree, newTree, patches, index)
  return patches
}

function diffAttr(oldTree, newTree) {
  let patches = {}
  for (let key in oldAttrs) {
    if (oldAttrs[key] !== newAttrs[key]) {
      patch[key] = newAttrs[key]   // 有可能undefined
    }
  }
  // 新节点新增属性
  for (let key in newAttrs) {
    if (!oldAttrs.hasOwnProperty(key)) {
      // 比较属性是否一致
      let attrs = diffAttr(oldTree.props, newTree.props)
      if (Object.keys(attrs).length > 0) {
        
      }
    }
  }

  return patches
}

function walk(oldTree, newTree, patches, index) {
  let currentPath = []
  if (oldTree.type === newTree.type) {
    let attrs = diffAttr(oldTree.props, newTree.props)
  }
}

export default diff
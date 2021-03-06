class Node {
  constructor(v, next) {
    this.value = v
    this.next = next
  }
}

class LinkList {
  constructor() {
    // 链表长度
    this.size = 0
    // 头部
    this.dummyNode = new Node(null, null)
  }
  find(header, index, currentIndex) {
    if (index === currentIndex) return header

    return this.find(header.next, index, currentIndex + 1)
  }
  addNode(v, index) {
    // 查找当前添加的元素的索引
    this.checkIndex(index)
    // 当往链表的末尾插入时，prev.next 为空
    // 其他情况，需要设置prev.next为插入的节点
    let prev = this.find(this.dummyNode, index, 0)
    prev.next = new Node(v, prev.next)
  }
  checkIndex(index) {
    if (index < 0 || index > this.size) {
      throw Error('index error')
    }
  }
}
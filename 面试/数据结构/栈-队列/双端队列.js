// 双端队列 就是允许在队列的两端进行插入和删除的队列

// 即允许使用pop，push同时又允许使用shift、 unshift的数组

const queue = [1, 2, 3, 4]
queue.push(1) // 双端队列尾部入队
queue.pop() // 双端队列尾部出队
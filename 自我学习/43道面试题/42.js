42. setInterval方法的返回值什么?
setInterval(() => console.log("Hi"), 1000);
复制代码
A：一个唯一的id
B：指定的毫秒数
C：传递的函数
D：undefined

// 答案

// 答案: A
// 它返回一个唯一的id。 此id可用于使用clearInterval()函数清除该定时器。

38. 下面代码的输出是什么?
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
复制代码
A: 1 undefined 2
B: undefined undefined undefined
C: 1 1 2
D: 1 undefined undefined

// 答案

// 答案: A
// catch块接收参数x。当我们传递参数时，这与变量的x不同。这个变量x是属于catch作用域的。
// 之后，我们将这个块级作用域的变量设置为1，并设置变量y的值。 现在，我们打印块级作用域的变量x，它等于1。
// 在catch块之外，x仍然是undefined，而y是2。 当我们想在catch块之外的console.log(x)时，它返回undefined，而y返回2。

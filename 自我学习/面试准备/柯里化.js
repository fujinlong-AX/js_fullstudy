function sum(a, b, c, d) {
  return a + b + c + d;
}
function curry(fn) {
  let args = [], len = fn.length;
  function f(arg) {
    args.push(arg);
    if (args.length < len) {
      return f
    } else {
      return fn.apply(this, args);
    }
  }
  return f;
}
let c = curry(sum);
c(1)(2)(3)(4);
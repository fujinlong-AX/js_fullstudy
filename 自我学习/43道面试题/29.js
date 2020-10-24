const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
复制代码
A: 123
B: 456
C: undefined
D: ReferenceError

答案

// 答案: B
// 对象键自动转换为字符串。我们试图将一个对象设置为对象a的键，其值为123。
// 但是，当对象自动转换为字符串化时，它变成了[Object object]。 所以我们在这里说的是a["Object object"] = 123。 然后，我们可以尝试再次做同样的事情。 c对象同样会发生隐式类型转换。那么，a["Object object"] = 456。
// 然后，我们打印a[b]，它实际上是a["Object object"]。 我们将其设置为456，因此返回456。

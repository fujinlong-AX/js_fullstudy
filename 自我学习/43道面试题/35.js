35. 下面这些值哪些是假值?
0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;
复制代码
A: 0, '', undefined
B: 0, new Number(0), '', new Boolean(false), undefined
C: 0, '', new Boolean(false), undefined
D: 所有都是假值

答案

// 答案: A
// JavaScript中只有6个假值：

// undefined
// null
// NaN
// 0
// '' (empty string)
// false
// 函数构造函数，如new Number和new Boolean都是真值。


var a = new Number(122);
var b = a + 33; // 155
typeof b; // number
// 但是要注意 new Boolean 的用法，只有当 new Boolean 的参数值为 null 或者 undefined 时，求值转换的原始资料的值才是false，其他情况都是true；

// !!(new Boolean(false)) // true
// 所以尽量不要使用 new Boolean 这个包装对象进行赋值，否则会产生一些误会。
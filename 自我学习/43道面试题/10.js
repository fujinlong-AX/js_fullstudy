function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
复制代码
A: Nothing, this is totally fine!
B: SyntaxError. You cannot add properties to a function this way.
C: undefined
D: ReferenceError

// 答案: A

// 这在JavaScript中是可能的，因为函数也是对象！（原始类型之外的所有东西都是对象）

// 函数是一种特殊类型的对象。您自己编写的代码并不是实际的函数。 该函数是具有属性的对象，此属性是可调用的
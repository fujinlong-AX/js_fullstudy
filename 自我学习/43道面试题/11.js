function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = () => this.firstName + this.lastName;

console.log(member.getFullName());
复制代码
A: TypeError
B: SyntaxError
C: Lydia Hallie
D: undefined undefined

答案

// 答案: A
// 您不能像使用常规对象那样向构造函数添加属性。 如果要一次向所有对象添加功能，则必须使用原型。 所以在这种情况下应该这样写：
// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// }
// 复制代码这样会使member.getFullName()是可用的，为什么样做是对的？ 假设我们将此方法添加到构造函数本身。 也许不是每个Person实例都需要这种方法。这会浪费大量内存空间，因为它们仍然具有该属性，这占用了每个实例的内存空间。 相反，如果我们只将它添加到原型中，我们只需将它放在内存中的一个位置，但它们都可以访问它！




// Person.prototype.lastName = 'Fu'
// function Person(name) {
//   this.name = name
// }
// var person = new Person('jinlong')

// console.log(person.lastName);



function Bus() {
  
}

Car.prototype.name = 'abc'
function Car() {
  
}
var car = new Car()
console.log(car.constructor);   //car.constructor就是function Car(){}
console.log(Car.prototype);
// constructor 为了让Car()构造出的所有的对象都能找到它的自己的构造器

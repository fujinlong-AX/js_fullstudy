function SuperType() {
  this.property = true
}

SuperType.prototype.getSuperValue = function() {
  return this.property
}

function SubType(name) {
  this.subproperty = false
  this.name = name
}

// 继承, 用SuperType的实例来重写SubType的原型对象
SubType.prototype = new SuperType()
SubType.prototype.getSubValue = function() {
  return this.subproperty
}
let instance = new SubType('蜗牛')
console.log(instance.getSuperValue());

// instance -> SubType.prototype -> SuperType.prototype -> Object.prototype

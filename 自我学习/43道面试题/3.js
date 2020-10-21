const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

shape.diameter();
shape.perimeter();

// A: 20 and 62.83185307179586
// B: 20 and NaN
// C: 20 and 63
// D: NaN and 63

// 答案: B
// 请注意， diameter是普通函数， 而perimeter是箭头函数。
// 对于箭头函数， this关键字指向是它所在上下文（ 定义时的位置） 的环境， 
// 与普通函数不同！ 
// 这意味着当我们调用perimeter时， 它不是指向shape对象， 
// 而是指其定义时的环境（ window）。 没有值radius属性， 返回undefined。
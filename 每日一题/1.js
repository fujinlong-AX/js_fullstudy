// 今日题目：
// // 实现对a这个实例对象用for-of遍历  
//   class A {
//     items = 'ABCD';
//   }
//   const a = new A();

//   for (const item of a) { 
//     console.log(item);
    
//   }
// 依次输出：
// [0, "A"]
// [1, "B"]
// [2, "C"]
// [3, "D"]

// for of 循环的时候，依次输出4个数组：
// [0, "A"]
// [1, "B"]
// [2, "C"]
// [3, "D"]

  class A {
    items = 'ABCD';
  }
  const a = new A();
  b = a.items
  for (const item of b) { 
    console.log([b.indexOf(item), item]);
  }
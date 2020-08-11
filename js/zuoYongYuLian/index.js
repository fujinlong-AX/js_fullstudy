function test() {

}

// 函数也是对象，也能拥有属性
// test.name  test.prototype
// test.[[scope]]   // 隐式属性， 不可能被拿出来用

// test()  ---> AO: {}  //回收
// test()  ---> AO: {}  

function a() {
  function b() {
    var b = 222
  }
  var a = 111
  b()
  console.log(a);
}
var glob = 100
a()
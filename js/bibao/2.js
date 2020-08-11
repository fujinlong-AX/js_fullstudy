function a() {
  function b() {
    var bbb = 234
    console.log(aaa);  //  看上去应该报错，实际上有值，这就是闭包
  }
  var aaa = 123
  return b
}
var glob = 100
var demo = a()
demo()
// a()()
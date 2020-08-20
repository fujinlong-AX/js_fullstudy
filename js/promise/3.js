let xq = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('蜗牛相亲了！');
    resolve('相亲成功！嘿嘿')
  }, 2000);
})

xq
.then((res) =>{
  return marry()
})
.then((res) => {
  console.log(res);
  return baby1()
})
.then((res) => {
  console.log(res);
  baby2()
})


function marry() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('蜗牛结婚了');
      resolve('蜗牛结婚顺利')
    }, 1000);
  })
}

function baby1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('小蜗牛1出生');
      resolve('小蜗牛1顺利出生')
    },  500);
  })
}

function baby2() {
  setTimeout(() => {
    console.log('小蜗牛2出生'); 
  }, 400);
}
// xq
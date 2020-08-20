function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaa');
      resolve('aaaaaaa')
    }, 1000);
  })
}
function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bbb');
      reject('bbbbbb')
    }, 1000);
  })
}
function c() {
  setTimeout(() => {
    console.log('ccc');
  }, 500);
}
function d() {
  setTimeout(() => {
    console.log('ddd');
  }, 700);
}

a().then(() => {
  console.log('aaaaaaa');
})

// all
Promise.all([a(),b()]).then(d)
console.log(p);
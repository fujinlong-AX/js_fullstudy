//  js 是单线程的
function a() {
  let name = '蜗牛'
  console.log(name);
}

function b() {
  setTimeout(() => {
    console.log('金龙');
  }, 1000)
}

function a() {
  let name = '子城'
  console.log(name);
}



b()
a()
c()
// const yihan = {
//   name:'逸涵',
//   age: 18,
//   career: 'coder'
// }

// const hufei = {
//   name: '胡飞',
//   age: 19,
//   career: 'manager'
// }

// function User(name, age, career) {
//   this.name = name
//   this.age = age
//   this.career = career
// }

// const user = new User(name, age , career)



function Coder(name, age) {
  this.name = name
  this.age = age
  this.career = 'coder'
  this.work = ['写代码', '写系统', '改bug']
}

function ProductManager(name, age) {
  this.name = name
  this.age = age
  this.career = 'product manager'
  this.work = ['订会议室', '写ppt', '催更']
}

function Factory(name, age, career) {
  switch(career) {
    case 'coder':
      return new Coder(name, age)
    case 'product manager':
      return new ProductManager(name, age)
  }
}
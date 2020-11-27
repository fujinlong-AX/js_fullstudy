// Boolean 类型
let isDone: boolean = false

// isDone = 123

let count: number = 10

let nikename: string = 'jinlong'

let people: symbol = Symbol('pipi')

const sym = Symbol()
let obj = {
  [sym]: 'jinlong'
}
console.log(obj[sym]);

// array
// let list: number[] = [1, 2, 3]
let list: Array<number> = [1, 2, 3]


// Enum
// 数字枚举

// enum Direction {
//   EAST,
//   SOUTH,
//   WEST,
//   NORTH
// }
// let dir: Direction = Direction.NORTH  // 3

// 字符串枚举
// enum Direction {
//   EAST = 'EAST',
//   SOUTH = 'SOUTH',
//   WEST = 'WEST',
//   NORTH = 'NORTH'
// }

// 异构枚举

enum Enum {
  A,
  B,
  C = 'c',
  D = 'd',
  E = 8,
  F
}


let u:undefined = undefined
let n:null = null

let num: number = u
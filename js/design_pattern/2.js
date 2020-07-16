//JSON 对象
//策略模式
//对象字面量
//工资发放策略
var strategies = {
    'D':function mutiply(salary) {
        return 12 * salary
    },
    'C':function mutiply(salary) {
        return 16 * salary
    },
    'B':function mutiply(salary) {
        return 18 * salary
    },
    'A':function mutiply(salary) {
        return 20 * salary  
    },
    'S':function mutiply(salary) {
        return 100 * salary
    }
}
function calculateBonus(salary, level = "C"){
    return strategies[level](salary)
}
console.log(calculateBonus(20000,'S'))


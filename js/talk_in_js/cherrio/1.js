//  对象是由方法和属性构成   语法
// 1. 构建一只鸭子
// 2. 招募1000只鸭子
// 3. 告诉国王你完成了任务



// JSON Object 对象字面量 literal object
var duck = {
    type:'煌上煌',
    yz:99,
    duckSing: function() {
        console.log('嘎嘎嘎');
    }
}
var jiajun = {
    name:'佳骏',
    duckSing: function() {
        console.log('嘎嘎嘎');
}
}

var xyl ={
    name:'元隆',
}
var cherrio = "123";   // 关键字 标识符
// console.log(cherrio);
// 变量的类型由值决定
cherrio = [];
const xgg = [jiajun,xyl];

for(var j = 0;j<xgg.length;j++){
    if(typeof xgg[j].duckSing == 'function'){
        cherrio.push(xgg[j]);
    }
}

// JS 里有array类型？
// 数据类型  数值类型Number 字符串string 布尔值bool null undefined 

// 基础类型里不包括array ，它只是object的子类型
for(var i =0;i<1000;i++){
    // Ducks[i] = duck;
    cherrio.push(duck);
}

cherrio.push()

if(cherrio.length == 1000){
    console.log('已招募完成，报告国王');
}
duck.duckSing();


for(let singer of cherrio){    //es6
    singer.duckSing();
}
var famliy = {}
famliy.me = '小明'
famliy.wife = '小花'
famliy.setBaby = function (sex){
    if(sex == 'male'){
        this.baby = '牛牛';
    }else if(sex == 'female'){
        this.baby = '妞妞';
    }
}
famliy.setBaby('male')
console.log(famliy.baby)
var data = {
  name: 'yuanlong',
  age: 18
}
observe(data)
let name = data.name // get value
data.name = 'jinlong' 

function observe(obj) {
  Object.keys(obj).forEach(key => {
      defineReactive(obj,key,obj[key])
  })
}
function defineReactive(obj,key,val) {
  if (typeof val === 'object' && val!== null) {
      observe(val)
  }
  Object.defineProperty(obj,key,{
      get:function() {
          return val
      },
      set: function(newVal) {
          val = newVal
      }
  })
}

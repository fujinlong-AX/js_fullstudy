# for in循环
```
     for(var i in arr){}
```
1. for in这种循环i是string类型的
2. 作用于数组的for-in循环体除了遍历数组元素外，还会自身可枚举属性
3. 如果给对象的原型加上方法，forin这种循环会把数组原型链上的属性都能被访问到。
4. 在某些情况下，这段代码可能按照随机顺序遍历数组元素。
5. 简而言之，for-in是为普通对象设计的，你可以遍历得到字符串类型的键，因此不适用于数组遍历。
# foreach循环
forEach方法对数组的每个元素执行一次提供的函数。
#### 缺点：无法中途跳出forEach循环，continue、break命令或return命令都不能奏效
# for-of循环
for…of允许遍历获得键值。

for…of循环内部调用的是数据结构的Symbol.iterator方法。
#### 优点：

 - 有着同for...in一样的简洁语法，只返回具有数字索引的属性,没有for...in那些缺点。
 - 不同用于forEach方法，它可以与break、continue和return配合使用。
 - 提供了遍历所有数据结构的统一操作接口。
 - for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如arguments对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串。
 - for...of中不可以使用return，但是for...of方法是在函数中则可以使用
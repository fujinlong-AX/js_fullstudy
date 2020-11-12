// 介绍重绘和回流，以及如何优化

const { transform } = require("lodash")

// 节点的几何属性或样式发生变化会引发重绘

// 回流: 布局或者几何属性发生变化


// 回流必将引起重绘，重绘不一定会引起回流


优化:
1. 避免使用 clientWidth...  offsetWidth... getBoundingClientRect
因为会强制刷新浏览器的任务队列

2. 使用 transform 代替 top
  使用visibility 代替 display：none
  避免使用table布局
  避免设置多层内连样式

3. 避免频繁操作样式
    避免频繁操作DOM
    对具有复杂动画的元素使用绝对定位
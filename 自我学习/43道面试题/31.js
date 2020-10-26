31. 单击按钮时event.target是什么?
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
复制代码
A: div外部
B: div内部
C: button
D: 所有嵌套元素的数组.

// 答案

// 答案: C
// 导致事件的最深嵌套元素是事件的目标。 你可以通过event.stopPropagation停止冒泡

js赋值可以不使用var吗？
答案是可以的。
没有特别声明的值，我们称之为隐式声明。
JS中变量声明分显式声明和隐式声明。
     var name = 'muzidigbig';//显示声明 
     name = 'muzidigbig';//隐式声明（为全局变量的一个属性）
复制代码在函数中使用var关键字进行显式声明的变量是做为局部变量，在全局范围内声明的变量为全局变量；而没有用var关键字，使用直接赋值方式声明的是全局变量（全局对象属性）。
     // name = 'muzidigbig';//隐式声明（为全局变量的一个属性）
     console.log(name);
     function person(){
     name = '木子大大';
     console.log(name);
     }
     person();
复制代码当我们使用访问一个没有声明的变量时，JS会报错；而当我们给一个没有声明的变量赋值时，JS不会报错，相反它会认为我们是要隐式声明一个全局变量，这一点一定要注意。
     name = 'muzidigbig';//隐式声明（为全局变量的一个属性）
     console.log(name);
     function person(){
     name = '木子大大';
      console.log(name);//木子大大
     }
     person();
复制代码js中连等赋值出现的问题
       var a = {n:1};     //a指向了一块地址{n:1};
     var b = a;  //持有a,以回查  //b对a的引用，也指向那块地址{n:1};
     a.x = a = {n:2}; 
     alert(a.x); // --> undefined 
     alert(b.x); // --> {n:2}
复制代码js赋值是右结合的，从右边开始向左边赋值。但由于.运算符优先于=赋值运算，所有


先声明a对象的x属性（a指向{n:1}）


对a赋值，指向{n:2}


再对a.x赋值（原来的a，也就是b）


声明变量所用的var所带来的一些问题
除了在函数中，在其他局部里声明的var变量将会变成全局变量，在全局的任意地方都可以被调用，所有尽量的少用var，在要声明局部变量时，可以用let来代替var即可解决问题。
浮动 float
浮动会让元素脱离文档流，间接导致父元素高度坍塌
清楚浮动带来的负面影响
清楚浮动的方法

在浮动元素最后面添加一个空容器

     <div style="clear:left;"></div>
复制代码
给浮动元素最后面添加一个伪类

     .clearfix::after{
            content: '';
            clear: both;
            display: block;
        }
复制代码
BFC -- Block Formatting Context
解决元素脱离文档流带来的负面影响，margin重叠问题
如:

     overflow: hidden;
     display:inline-block/flex;
     positon:absolute/fixed
     float:left
复制代码BFC的创建方法(Block Formatting Context)
根元素或其它包含它的元素；
浮动 (元素的float不为none)；
绝对定位元素 (元素的position为absolute或fixed)；
行内块inline-blocks(元素的 display: inline-block)；
表格单元格(元素的display: table-cell，HTML表格单元格默认属性)；
overflow的值不为visible的元素；
弹性盒 flex boxes (元素的display: flex或inline-flex)；

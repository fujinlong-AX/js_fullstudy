22. cool_secret可以访问多长时间?
sessionStorage.setItem("cool_secret", 123);
复制代码
A：永远，数据不会丢失。
B：用户关闭选项卡时。
C：当用户关闭整个浏览器时，不仅是选项卡。
D：用户关闭计算机时。

答案

// 答案: B
// 关闭选项卡后，将删除存储在sessionStorage中的数据。
// 如果使用localStorage，数据将永远存在，除非例如调用localStorage.clear()。

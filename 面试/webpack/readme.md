- compile 开始编译
- make 从入口分析依赖以及间接依赖模块
- build-module 把不同的模板打包在一起
- emit 输出到dist目录
- done 完成

// plugin: 就是在某个hook 插入一段代码
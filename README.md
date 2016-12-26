# blog
    nodejs+express+mongodb 搭建具有多人注册、登录、发表文章、登出功能的博客。 
    （开发中...前端将模仿简书）
当前样式参照~~[我的博客](https://toyuanx.github.io/)~~。
> 系统：windows 7
> 工具：nodejs, express, mongodb
    
###关键名词 : 路由控制，模板引擎(ejs)，session-cookies

###基本流程：

* 功能分析
* 原型界面
* 路由规划
* 使用数据库
    
### 命令：
安装express命令行工具，并用其初始化一个express项目，输入：

    npm install -g express-generator

新建工程，输入：

    express -e blog
    cd blog && npm install

下载安装MongoDB数据库。设置blog文件夹作为工程数据库，在mongodb文件夹新建blog文件夹并进入bin目录，输入：

    ./mongod --dbpath ../blog/
注：mongod闪退是由于没有安装vcredist_xXX.exe应用程序。

在node.js中使用MongoDB, 在package.json的dependencies中添加依赖模块`"mongodb": "你想要的版本号"`, 输入：
    
    npm install
注：以后其他`依赖模块`都如此处理。


    



# frontSolution

Model View Controller

FreeMarker(FreeMarker Template Language) 一个java类库  view层完全独立 显示逻辑和业务逻辑分离 轻量级框架 不需要Servlet环境
HTML静态化
Template + DataModel = HTML
Java代码决定读取哪一个Template
FreeMarker模板不编译成类，不能写任何java代码，严格的MVC分离
性能优于JSP 支持JSP标签

宏定义是什么？

前端框架主要为了解决什么问题？如何解决？
1.资源定位
  工程路径 --> 部署路径，
  相对路径 --> 绝对路径 + md5戳 + 域名 --> 解决版本迭代后静态资源缓存在客户端的问题, 实现模块独立，任务文件间都可以进行内嵌
2.模块化开发
  核心问题：依赖管理和加载
  构建工具只负责生成依赖关系表 框架自己绝对什么时候加载哪些资源
  
  
  
  * 规范
    + 开发规范

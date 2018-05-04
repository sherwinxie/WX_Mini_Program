# 快速入门微信小程序（总结）
闲暇学的微信小程序，[根据THU学堂在线课程启发。](http://www.xuetangx.com/courses/course-v1:TsinghuaX+2018032801X+2018_T1/about)

## 什么是微信小程序（What？）
微信小程序依赖于微信环境，微信中搜索即用，并且不用像安装（当然也就没有卸载一说），在IOS、Andorid以及WindowsPhone系统中都可以跨平台使用。

## 为什么玩微信小程序（Why？）
作为后端开发者，对前端的知识有个基本的了解和掌握也是至关重要的，前后端本是一张纸，两面一体，全栈是后端进阶的必然。

另外是对新事物的好奇以及探索精神，作为个人也可以很方便的开发以及上线一个属于自己的小程序，既学既用能够快速的看到所学效果。
- 最好已经入门Html+CSS+JS+Json等前端基础知识。
- 最好通过做一个简单的小项目掌握。


## 怎么开发自己的微信小程序（How？）

### 微信开发的IDE和资料
-  [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html?t=2018428)
-  [微信开发者社区及API文档](https://developers.weixin.qq.com/miniprogram/dev/)
-  [资源【THU学堂在线课程】](http://www.xuetangx.com/courses/course-v1:TsinghuaX+2018032801X+2018_T1/about)

### 微信小程序的文件类型：
- wxml（类似html 页面布局文件）
- wxss（类似css 样式文件）
- js  （页面交互）
- wxs （微信新开发的语言 类似js）
- json（Json配置）

### JS Pages()生命周期
onLoad -> onShow -> onReady -> onHide -> onUnload
- [官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html)

## WXSS 样式
- 传统布局 vs 弹性盒子布局（灵活在容器统一控制）
- px和rpx 相对像素 默认750rpx最大


## 条件渲染wx:if和hidden的选择
当wx:if 判断为true时会动态加入元素（时间复杂大，空间复杂小）
而hidden属性来判断为true时只需要显示（开销小，相当于用空间换时间）

## 事件绑定bindtap catchtap 区别
- 冒泡事件bindtap
子事件响应后响应父事件
- 非冒泡事件catchtap
只捕捉子事件

## CurrenTraget 和Target 区别
target在事件流的目标阶段；

currentTarget在事件流的捕获，目标及冒泡阶段；

但事件流处于目标阶段，target与currentTarget指向一样；

而当处于捕获和冒泡阶段的时候，target指向被单击的对象而currentTarget指向当前事件活动的对象。

在微信小程序中也可总结为：target指向发生事件的组件，currentTarget指向绑定事件的组件。

## wx.request 异步调用（类似JS Ajax）
- url API接口地址
- nginx 代理转发
- success res 响应


## web server 
微信小程序腾讯云服务器支持notejs和php
- express (note.js)
- middleware 中间件 是一个函数 req resp next
- Login登录API

# 常规状态码
- 200 成功
- 3xx 请求成功，但需要改变请求资源的方式
- 4xx 请求错误 eg.404 not found
- 5xx 服务器内部错误 与客户端无关

# RESTful 常规返回结果 
- GET:返回资源对象列表或单个资源对象
- POST:返回新生成的资源对象
- PUT:返回修改后的完整资源对象
- PATCH:返回被修改后的属性（局部更新）
- DELETE: 返回空 （状态码204 表示成功删除）

# 心得总结
1. 入门可以参考优质的视频项目，如THU学堂在线的调用豆瓣API的电影推荐小程序 和 基于C/S的todo小程序。
2. 入门基本使用后没有相关进阶的视频资源，应多查微信官方文档，和git clone开源项目运行和学习。
3. 提交审核，上线一个自己的小程序，命令规范为姓名+xxx，家人朋友通过微信搜索你的名字时会将你的小程序一同搜出来。:）
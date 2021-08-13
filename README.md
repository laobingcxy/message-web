## 前面的话

继上次发布纯前端vue版本聊天框开发后，在许多同行的期盼下特肝了此前后端分离的全栈版本
这里再附上之前的纯前端聊天框项目地址：
github:[https://gitee.com/laobingcxy/chat1.0](https://gitee.com/laobingcxy/chat1.0)
gitee:[https://github.com/laobingcxy/chat1.0](https://github.com/laobingcxy/chat1.0)

## 项目简介


轻量权限控制的企业微信后台管理系统


### 项目地址

#### 前端

github:[https://github.com/laobingcxy/message-web](https://github.com/laobingcxy/message-web)
gitee:[https://gitee.com/laobingcxy/message-web](https://gitee.com/laobingcxy/message-web)

#### 后端

github:[https://github.com/laobingcxy/message](https://github.com/laobingcxy/message)
gitee:[https://gitee.com/laobingcxy/message](https://gitee.com/laobingcxy/message)


## 技术选型

#### 前端

Vue3.0
...

#### 后端

Springboot2.5.2
Websocket
Mybatis
...

#### 数据库

mysql5.7+

## 特色

体量更轻、系统复杂度更低-无引入其它外部组件


## 交互流

![image.png](https://cdn.nlark.com/yuque/0/2021/png/2442600/1628666152785-7bdeb723-a3d2-4538-8f6a-80a432346ad5.png#align=left&display=inline&height=345&margin=%5Bobject%20Object%5D&name=image.png&originHeight=689&originWidth=1158&size=101959&status=done&style=none&width=579)

## 功能说明




## 演示图


![image.png](https://cdn.nlark.com/yuque/0/2021/png/2442600/1628667133015-cc82f1f6-8e39-4c0b-bfa4-f1ba6349eff0.png#align=left&display=inline&height=323&margin=%5Bobject%20Object%5D&name=image.png&originHeight=809&originWidth=1828&size=48610&status=done&style=shadow&width=729)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/2442600/1628667277665-077ef290-8e72-4715-b343-5ee29e1db78a.png#align=left&display=inline&height=344&margin=%5Bobject%20Object%5D&name=image.png&originHeight=883&originWidth=1889&size=259988&status=done&style=shadow&width=736)


![image.png](https://cdn.nlark.com/yuque/0/2021/png/2442600/1628667453883-74ed55d0-ed0e-4d01-952a-d122cfdd78fc.png#align=left&display=inline&height=368&margin=%5Bobject%20Object%5D&name=image.png&originHeight=790&originWidth=1587&size=68589&status=done&style=shadow&width=739)

## 启动说明


### 前端

项目地址：


安装依赖：

```
npm install
```


启动项目：

```
npm run serve
```


### 后端


导入doc下的sql脚本，将数据库账号密码修改成你自己的，点击启动即可

resources下sendMessage.json文件为模拟别人发送请求的json，直接复制到postman里，另外添加token请请求后端10000001接口即可模拟




## 结尾的话

这个版本是个人脱敏后，将对接企业微信的api剔除后的简易前后台交互版本，供大家学习交流。后续代码不再单独维护，但会输出近百万级的消息处理交互设计实战经验，这里也有更详细的文档，比如数据库设计，技术总结等等~
如果感兴趣请访问我的个人主页查看：[https://www.yuque.com/yingwenerjie](https://www.yuque.com/yingwenerjie)


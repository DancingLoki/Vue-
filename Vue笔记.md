![image-20210928155238608](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210928155238608.png)

原型和原型链可参考：https://zhuanlan.zhihu.com/p/63940964

和：https://www.jianshu.com/p/ddaa5179cda6进行理解（挺简单的和继承差不多）

# 初识Vue

![image-20210929105944517](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210929105944517.png)

![image-20210929110008348](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210929110008348.png)

![image-20210929111601214](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210929111601214.png)

# 模板语法

![image-20210930145147746](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210930145147746.png)

![image-20210930145943313](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210930145943313.png)

# 数据绑定

![image-20211001141208099](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211001141208099.png)

![image-20211001141225744](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211001141225744.png)

# el和data 的两种写法

![image-20211001142226407](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211001142226407.png)

![image-20211001142258261](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211001142258261.png)

# 理解MVVM

![image-20211001143355974](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211001143355974.png)

# 数据代理

## 1.回顾对象添加属性方法

![image-20211001143823505](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211001143823505.png)

![image-20211001144520271](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211001144520271.png)

## 2.数据代理

![image-20211001144751508](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211001144751508.png)

![image-20211001144816194](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211001144816194.png)

## 3.Vue中的数据代理

![image-20211001150316405](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211001150316405.png)

![image-20211001150435822](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211001150435822.png)

# 事件处理

## 1.事件的基本使用

![image-20211001153429975](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211001153429975.png)

![image-20211001153453934](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211001153453934.png)

## 2.事件修饰符

![image-20211001154800604](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211001154800604.png)

## 键盘事件

![image-20211002144600942](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211002144600942.png)

注意tab比较特殊，必须配合keydown去使用

![image-20211002145244043](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211002145244043.png)

![image-20211002145306957](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211002145306957.png)

效果如下：

![image-20211002145332296](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211002145332296.png)

# 计算属性

![image-20211003102236526](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211003102236526.png)

案例如下：

![image-20211003102843075](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211003102843075.png)

## 计算属性简写形式

只考虑读取不考虑修改才可使用

![image-20211003103251137](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211003103251137.png)

# 监视属性

## 天气案例

![image-20211003111124728](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211003111124728.png)

案例如下：

![image-20211003111147808](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211003111147808.png)

![image-20211003111208906](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211003111208906.png)

## 监视属性

![image-20211003165527174](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211003165527174.png)

案例如下：

![image-20211003165633422](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211003165633422.png)

## 深度监视

![image-20211003171349789](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211003171349789.png)

![image-20211003171426172](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211003171426172.png)

![image-20211003171442323](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211003171442323.png)

## computed和watch

![image-20211003173128709](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211003173128709.png)

# 绑定样式

## 绑定class样式

![image-20211003174651835](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211003174651835.png)

## 绑定style样式

![image-20211003175244497](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211003175244497.png)

# 条件渲染

![image-20211004140553539](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211004140553539.png)

![image-20211004140702271](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211004140702271.png)

# 列表渲染

![image-20211004143639308](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211004143639308.png)

![image-20211004143659848](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211004143659848.png)

![image-20211004143714177](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211004143714177.png)

## key的作用和原理

![image-20211004145239508](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211004145239508.png)

![image-20211004145609920](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211004145609920.png)

## 列表过滤

用watch实现：

![image-20211004154533651](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211004154533651.png)

![image-20211004154548085](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211004154548085.png)

用computed实现：

![image-20211004154936401](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211004154936401.png)

## Vue监测数据改变的原理

![image-20211004173325103](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211004173325103.png)

可以看https://www.bilibili.com/video/BV1Zy4y1K7SH?p=37的p34-p37进行印象加深理解

# 收集表单数据

![image-20211004181946945](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211004181946945.png)

可参考 F:\Code\Vue\13.收集表单数据\收集表单数据.html

# 过滤器

![image-20211005010318747](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211005010318747.png)

![image-20211005010408191](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211005010408191.png)

![image-20211005010427439](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211005010427439.png)

# 内置指令

## v-text

![image-20211005010847765](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211005010847765.png)

## v-html

![image-20211006161156496](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211006161156496.png)

![image-20211006161212224](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211006161212224.png)

![image-20211006161227167](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211006161227167.png)

## v-cloak指令

![image-20211006162254318](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211006162254318.png)

## v-once指令

![image-20211006162828414](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211006162828414.png)

![image-20211006162842851](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211006162842851.png)

![image-20211006162852842](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211006162852842.png)

## v-pre指令

![image-20211006163139172](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211006163139172.png)

![image-20211006163157953](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211006163157953.png)

# 自定义指令

![image-20211006172816207](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211006172816207.png)

![image-20211006172709395](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211006172709395.png)

# 生命周期

![image-20211006214533520](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211006214533520.png)

![image-20211006214556015](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211006214556015.png)

## 挂载流程

生命周期总结：

![image-20211007003937865](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211007003937865.png)

# 组件

组件的定义：实现应用中**局部功能**代码和资源的集合

## 非单文件组件

![image-20211007144254493](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211007144254493.png)

![image-20211007150909333](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211007150909333.png)

![image-20211007150934685](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211007150934685.png)

![image-20211007150953385](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211007150953385.png)

![image-20211007151010131](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211007151010131.png)

### 组件的几个注意点

![image-20211007152419371](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211007152419371.png)

### 组件的嵌套

![image-20211007154956977](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211007154956977.png)

![image-20211007155023912](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211007155023912.png)

![image-20211007155036660](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211007155036660.png)

![image-20211007155054939](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211007155054939.png)

### VueComponent

![image-20211007155656467](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211007155656467.png)

### 一个重要的内置关系

![image-20211007164807678](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211007164807678.png)

## 单文件组件

# 创建脚手架

脚手架文档：https://cli.vuejs.org/

## 分析脚手架结构

## render函数

![image-20211008101334705](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211008101334705.png)

## 修改默认值

![image-20211008102619050](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211008102619050.png)

![image-20211008102644654](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211008102644654.png)

![image-20211008102706081](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211008102706081.png)

## ref属性

![image-20211008110047358](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211008110047358.png)

可在

F:\Code\Vue\vue_test\02_src_ref属性查看

## props配置项

![image-20211008133211276](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211008133211276.png)

可在

F:\Code\Vue\vue_test\03_src_props配置查看



## mixin混入

![image-20211008135133554](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211008135133554.png)

可在

F:\Code\Vue\vue_test\04_src_mixin混入查看

## 插件

![image-20211008141534910](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211008141534910.png)

可在

**认真看F:\Code\Vue\vue_test\05_src_插件，很重要**

**回顾了很多老知识**

## scoped样式

作用：让样式在局部生效，防止冲突

写法：<style scoped>

# TodoList案例

![image-20211009202125978](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211009202125978.png)

# 本地存储

![image-20211009210230694](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211009210230694.png)

# 组件的自定义事件

![image-20211010134736050](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211010134736050.png)

# 全局事件总线

可实现任意组件间的通信

![image-20211010150433722](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211010150433722.png)

# 消息订阅与发布

> 1.订阅消息：消息名
>
> 2.发布消息：消息内容

可用pubsub-js

![image-20211010154019856](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211010154019856.png)

# 动画效果

![image-20211011134931063](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211011134931063.png)

![image-20211011135105979](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211011135105979.png)

# AJAX 知识补习

## 什么是 AJAX？

AJAX = *A*synchronous *J*avaScript *A*nd *X*ML.

AJAX 并非编程语言。

AJAX 仅仅组合了：

- 浏览器内建的 XMLHttpRequest 对象（从 web 服务器请求数据）
- JavaScript 和 HTML DOM（显示或使用数据）

Ajax 是一个令人误导的名称。Ajax 应用程序可能使用 XML 来传输数据，但将数据作为纯文本或 JSON 文本传输也同样常见。

Ajax 允许通过与场景后面的 Web 服务器交换数据来异步更新网页。这意味着可以更新网页的部分，而不需要重新加载整个页面。

## AJAX工作原理

![image-20211011141325064](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211011141325064.png)

## AJAX-XMLHttpRequest对象

XMLHttpRequest 对象用于同幕后服务器交换数据。这意味着可以更新网页的部分，而不需要重新加载整个页面。

创建 XMLHttpRequest 的语法是：

```html
variable = new XMLHttpRequest();
```

## 跨域访问

出于安全原因，现代浏览器不允许跨域访问。

这意味着尝试加载的网页和 XML 文件都必须位于相同服务器上。

W3School 上的实例都会打开位于 W3School 域上的 XML 文件。

如果您希望在自己的页面上使用以上实例，那么您所加载的 XML 文件必须位于您自己的服务器上。

## XMLHttpRequest 对象方法

![image-20211011141701720](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211011141701720.png)

## XMLHttpRequest 对象属性

![image-20211011141727843](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211011141727843.png)

## AJAX-XMLHttpRequest

### 向服务器发送请求

如需向服务器发送请求，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法：

```
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();
```

![image-20211011141911088](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211011141911088.png)

### GET还是POST？

GET 比 POST 更简单更快，可用于大多数情况下。

不过，请在以下情况始终使用 POST：

- 缓存文件不是选项（更新服务器上的文件或数据库）
- 向服务器发送大量数据（POST 无大小限制）
- 发送用户输入（可包含未知字符），POST 比 GET 更强大更安全

![image-20211011142250297](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211011142250297.png)

### onreadystatechange属性

通过 XMLHttpRequest 对象，您可以定义当请求接收到应答时所执行的函数。

这个函数是在 XMLHttpResponse 对象的 onreadystatechange 属性中定义的：

```
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML = this.responseText;
  }
};
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();
```

## AJAX-服务器响应

![image-20211011143324581](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211011143324581.png)

![image-20211011143714656](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211011143714656.png)

### responseText 属性

responseText 属性以 JavaScript 字符串的形式返回服务器响应，因此您可以这样使用它：

```
document.getElementById("demo").innerHTML = xhttp.responseText;
```

### getAllResponseHeaders() 方法

getAllResponseHeaders() 方法返回所有来自服务器响应的头部信息。

```
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML = this.getAllResponseHeaders();
  }
};
```

![image-20211011144014183](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211011144014183.png)

## AJAX XML实例

# 插槽

![image-20211012110036568](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211012110036568.png)

![image-20211012110107016](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211012110107016.png)

# Vuex

![vuex](F:\Code\Vue\资料（含课件）\资料（含课件）\02_原理图\vuex.png)

## getters

![image-20211012191708172](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211012191708172.png)

## 四个map方法的使用

![image-20211012221404476](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211012221404476.png)

![image-20211013111850128](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211013111850128.png)

mapActions与mapMutations使用时，若需要传递参数，需要在模板中绑定事件时传递参数否则参数是事件对象

## 模块化加命名空间（重点）

![image-20211013172505799](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211013172505799.png)

![image-20211013172546523](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211013172546523.png)

# 路由（重要）

路由就是一组key：value的对应关系

![image-20211013200354254](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211013200354254.png)

![image-20211013200449794](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211013200449794.png)

![image-20211013204035760](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211013204035760.png)

![image-20211013205254441](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211013205254441.png)

## 嵌套路由

![image-20211013225518194](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211013225518194.png)

## 路由传参

![image-20211014105651779](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211014105651779.png)

## 路由的params参数

![image-20211014125048046](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211014125048046.png)

![image-20211014125122244](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211014125122244.png)

## 路由的props配置

![image-20211014130816173](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211014130816173.png)

## 编程式路由导航

![image-20211014145209403](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211014145209403.png)

`this.$router.forward()` 前进

`this.$router.back()` 后退

`this.$router.go()` 可前进可后退

## 缓存路由组件

作用：让不显示的路由组件保持挂载，不被销毁

具体代码：

![image-20211014150604701](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211014150604701.png)

## 两个新的生命周期钩子

![image-20211014152039683](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211014152039683.png)

## 路由守卫

![image-20211014172135469](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211014172135469.png)

## 独享路由守卫

![image-20211014194056832](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211014194056832.png)

## 组件内守卫

![image-20211014195215362](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211014195215362.png)

## 路由器的两种工作模式

![image-20211014200739650](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211014200739650.png)

# Vue UI 组件库

略

# Vue3

## 常用Composition API

![image-20211015134918025](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211015134918025.png)

### ref函数

![image-20211015141053066](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211015141053066.png)

### reactive函数

![image-20211015142909725](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211015142909725.png)

### Vue3中的响应式原理

![image-20211015154836606](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211015154836606.png)

### ref和reactive对比

![image-20211015155012445](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211015155012445.png)

### setup注意事项

![image-20211015161458024](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211015161458024.png)

### 计算属性和监听属性

![image-20211016102923942](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211016102923942.png)

![image-20211016133719875](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211016133719875.png)

### watchEffect函数

![image-20211016135353719](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211016135353719.png)

### 生命周期

### 自定义hook

![image-20211016144828979](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211016144828979.png)

### toRef

![image-20211016152612068](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211016152612068.png)

## 其他Composition API

### shallowReactive和shallowRef

![image-20211016153358738](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211016153358738.png)

### readonly和shallowReadonly

![image-20211016154338528](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211016154338528.png)

### toRaw与markRaw

![image-20211016191103041](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211016191103041.png)

### customRef



### provide和inject

![image-20211016194810129](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20211016194810129.png)

## Teleport组件



# Vue暂时完结！！！


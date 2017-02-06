## html规范

* #### 基本语法

    * 在属性上，使用双引号，不要使用单引号。
  
* #### 使用HTML5标准的文档模式

       <!DOCTYPE html>

* #### 文档字符编码

    使用UTF-8编码来渲染网页
    
      <meta charset="UTF-8">
    
* #### 兼容模式设置

    为了确保页面显示的一致性，一般将兼容模式设置为最新版本的IE 和 Chrome 内核
    
    ```<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">```
    
* #### 基本的SEO

      ```<meta name="keywords" content="your keywords">```
      ```<meta name="description" content="your description">```

* #### 移动端页面viewport 设置
    
        viewport: 一般指的是浏览器窗口内容区的大小，不包含工具条、选项卡等内容；
        width: 浏览器宽度，输出设备中的页面可见区域宽度；
        device-width: 设备分辨率宽度，输出设备的屏幕可见宽度；
        initial-scale: 初始缩放比例；
        minimum-scale: 最小缩放比例；
        maximum-scale: 最大缩放比例；
        user-scalable: 时候可以允许用户对页面进行缩放
        minimal-ui，不支持（去除导航栏） 为移动端设备优化，设置可见区域的宽度和初始缩放比例。
    
    
* #### 完整的移动端页头配置

        <meta charset="UTF-8">
        <title>title</title>    
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=640,user-scalable=no" />
        <!--<meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no,minimal-ui">-->
        <meta http-equiv="cleartype" content="on">
        <meta name="apple-mobile-web-app-title" content="...">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="format-detection" content="telephone=no">
        <meta http-equiv="x-rim-auto-match" content="none">
        <meta name="apple-touch-fullscreen" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <!-- uc强制竖屏 -->
        <meta name="screen-orientation" content="portrait">
        <!-- QQ强制竖屏 -->
        <meta name="x5-orientation" content="portrait"> 
        <!-- UC强制全屏 -->
        <meta name="full-screen" content="yes">
        <!-- QQ强制全屏 -->
        <meta name="x5-fullscreen" content="true">

* #### favicon设置

    * 在 Web Server 根目录放置 favicon.ico 文件
    * ```<link rel="shortcut icon" href="path/to/favicon.ico">```

* #### 结构、样式与行为分离

    * 尽量保证HTML文件只包含DOM结构，样式放到单独的CSS文件中，JS放到单独的JS脚本文件中
    * 除非特别必要，不要直接在dom结构中绑定事件，（onclick等等），也不要使用行内样式
    * CSS至少分为两个文件，reset和具体的业务CSS，提前考虑样式的复用性
    * 根据项目复杂度，JS尽量使用模块化开发的方式，提高代码的可复用性，降低代码耦合度
    * 切勿将标记 CSS 样式的 class 用作 JavaScript 钩子。把 JS 行为与样式混在一起将无法对其分别处理。JS钩子使用单独的标记，如.js-toggle

* #### 其他

    * 保持最精简的DOM结构和DOM深度
    * 避免使用b标签，用css来加粗文本
    * script标签的type属性已经是默认值，可以省略
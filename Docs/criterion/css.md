## CSS 规范

    创建单独的CSS文件，在页面的head中通过link标签引入，避免使用内联样式。
    创建reset.css，保证页面在不同浏览器中默认样式的一致性
    避免使用CSS表达式（Expression）
    不要用@import
    避免使用ID选择器
    使用语义化、通用的命名方式；
    使用连字符 - 作为 Class 名称界定符，不要驼峰命名法和下划线；
    选择器嵌套层级尽量小于三级，原则上保持1到2几
    当需要设置同一属性的多个值时，使用CSS简写属性。
    遵循渐进增强和优雅降级的原则，合理使用css3属性

#### 可简写的css属性
    
    CSS浏览器兼容性：IE8以上、chrome、firefox、safari、opera...

#### 可简写的css属性

    padding
    margin
    font
    background
    border
    border-radius

#### 书写格式  
    CSS属性分多行书写或一行书写可根据个人习惯，推荐分多行书写，增加可读性。换行和注释也是非常必要的。
    最终发布的CSS版本需要经过压缩和编译。



define(['./add'], function(Add) {
    var rightContextMenu = '<div id="right-context-menu" class="right-context-menu J-right-context-menu"><ul>'
                        +  '<li>'
                        +       '<a>编辑</a>'
                        +  '</li>'
                        +  '<li>'
                        +       '<a>删除</a>'
                        +  '</li>'
                        +  '<li class="J-add">'
                        +       '<a>添加</a>'
                        +  '</li>'
                    +  '</div>';


    $(function(){
        $('body').append(rightContextMenu);
        var container = document.getElementById('inner-content');  
        var menu = document.getElementById('right-context-menu');
        
        function showMenu() {
     
            var evt = window.event || arguments[0];

            if(window.event){
                evt.returnValue=false;         //对IE 中断 默认点击右键事件处理函数
            }else{
                evt.preventDefault();          //对标准DOM 中断 默认点击右键事件处理函数
    　　　　 };
             
            /*获取当前鼠标右键按下后的位置，据此定义菜单显示的位置*/
            var rightedge = container.clientWidth-evt.clientX;
            var bottomedge = container.clientHeight-evt.clientY;
     
            /*如果从鼠标位置到容器右边的空间小于菜单的宽度，就定位菜单的左坐标（Left）为当前鼠标位置向左一个菜单宽度*/
            if (rightedge < menu.offsetWidth)               
                menu.style.left = container.scrollLeft + evt.clientX - menu.offsetWidth + "px";            
            else
            /*否则，就定位菜单的左坐标为当前鼠标位置*/
                menu.style.left = container.scrollLeft + evt.clientX + "px";
             
            /*如果从鼠标位置到容器下边的空间小于菜单的高度，就定位菜单的上坐标（Top）为当前鼠标位置向上一个菜单高度*/
            if (bottomedge < menu.offsetHeight)
                menu.style.top = container.scrollTop + evt.clientY - menu.offsetHeight + "px";
            else
            /*否则，就定位菜单的上坐标为当前鼠标位置*/
                menu.style.top = container.scrollTop + evt.clientY + "px";
                 
            /*设置菜单可见*/
            menu.style.display = 'block';             
            menu.addEventListener('contextmenu',false);
        }
        /*隐藏菜单*/
        function hideMenu() {
            menu.style.display = 'none';
        }                              
        container.addEventListener("contextmenu", showMenu, false);
        container.addEventListener("click", hideMenu);     

        Add.Init();               
    })
})
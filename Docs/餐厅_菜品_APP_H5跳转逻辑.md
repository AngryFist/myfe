### 页面代码部署

    1. 在页面设置三个隐藏input

        <input type="hidden" id="cityid" value="$_COOKIE['cityid']">
        <input type="hidden" id="areaid" value="$_COOKIE['areaid']">
        <input type="version" id="areaid" value="$_COOKIE['version']">

    2. 通过js判断是否在app内打开页面

        var isAPP = function(){
            var version = $('#version').val();
            if(version){
                var arr = version.split(".");
                if(arr[0] < 5){
                    alert("更新到最新版App就可以直接跳转啦");
                    return false;
                }
                return true;
            }else{
                return false;
            }
        }


### 跳转协议

    APP跳商店:
            daojia://showshopbyid?cityid=" + cityid + "&areaid=" + areaid + "&shopid=" + shopid
    APP跳菜品高亮:
            daojia://highlightedfood?cityid=1&areaid=1&shopid=356&foodid=546
    APP跳购物车:
            daojia://addshopcart?cityid=" + cityid + "&areaid=" + areaid + "&shopid=" + shopid + "&foodid=" + foodid + "&count=" + count


    H5跳商店:
            http://m.daojia.com.cn/index/dishesList/cid/" + cityid + "/aid/" + areaid + "/rid/" + shopid

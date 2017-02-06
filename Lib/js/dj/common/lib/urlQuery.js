/*
    *   获取地址栏参数
    *   author : box
    *   lastupdate : 2016-05-13
    *   version : 1.0.0
 */
var DJs_urlQuery = {
    Init : function(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
        var r = window.location.search.substr(1).match(reg);  
        if (r != null) return unescape(r[2]);
        return '';  
    }
}
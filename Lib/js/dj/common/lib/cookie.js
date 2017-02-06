/*
    *   cookie操作
    *   author : box
    *   lastupdate : 2016-05-13
    *   version : 1.0.0
 */
var DJs_cookie = {
    read : function(name){
        if (document.cookie.length > 0){
            var cookieStart = document.cookie.indexOf(name + '=')
            if (cookieStart != -1){ 
                cookieStart = cookieStart + name.length + 1;
                cookieEnd = document.cookie.indexOf(';', cookieStart);
                if (cookieEnd == -1) cookieEnd = document.cookie.length;
                return unescape(document.cookie.substring(cookieStart, cookieEnd));
            } 
        }
        return '';
    },
    set : function(name, value, expireStamp, path, domain){
        var d  = new Date();
        //如果没有设定失效时间,则当天有效
        if(!expireStamp){
            d.setHours(23,59,59);
        }else{
            d.setTime(d.getTime() + expireStamp);
        }
        var path = path || '/';
        var domain = domain ? ';domain=' + domain : '';

        document.cookie = name + '=' + escape(value) + ';expires=' + d.toUTCString() + ";path=" + path + domain;
    },
    del : function(name){
        var d = new Date(); 
        d.setTime(d.getTime() - 1); 
        document.cookie = name + '=;expires=' + d.toUTCString() + ';path=/'; 
    }
}
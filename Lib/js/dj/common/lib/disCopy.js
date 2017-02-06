/*
    *   禁用复制  粘贴  剪切
    *   author : box
    *   lastupdate : 2016-05-31
    *   version : 1.0.0
 */
var DJs_disCopy = { 
    Init : function(eleIDs){
        for(var i =  0; i < eleIDs.length; i++){
            var item = document.getElementById(eleIDs[i]);
            item.setAttribute('onpaste','return false;');
            item.setAttribute('oncopy','return false;');
            item.setAttribute('oncut','return false;');
        }
    }
}
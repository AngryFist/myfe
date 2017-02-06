/*
    *   输入框默认日期
    *   author : box
    *   lastupdate : 2016-05-13
    *   version : 1.0.0
    *   DJs_dateInput.Init('datePicker',-5);   //5天前日期
 */
var DJs_dateInput = {
    beforeN : function(n){
        var myDate = new Date();
        var year = myDate.getFullYear();
        var month = myDate.getMonth() + 1;
        var day = myDate.getDate();
        myDate.setDate(myDate.getDate() + n);
        year = myDate.getFullYear();
        month = myDate.getMonth() + 1;
        day = myDate.getDate();
        return year + "-" + (month < 10 ? ('0' + month) : month) + "-" + (day < 10 ? ('0' + day) : day);
    },

    Init : function(inputID, n){
        var beforeN = this.beforeN;
        document.getElementById(inputID).value = beforeN(n);
    }

}

/*
    *   分页插件
    *   author : box
    *   lastupdate : 2016-05-13
    *   version : 1.0.0
 */
var DJs_pager = {
    Init : function(totalNum, curPage, pageSize){
        var pagerObj = '';

        var pageNum = Math.ceil(totalNum/pageSize);
        if(pageNum == 1 || totalNum == 0) return pagerObj;
        pagerObj = '<div class="pager cf">';
        pagerObj += '<a href="#" class="prev' + (curPage == 1 ? ' disable' : '') + '">上一页</a>';
        pagerObj += '<select name="pageSelect">';
        for(var i = 1; i <= pageNum; i++){
            pagerObj += '<option value="' + i + '" ' + (curPage == i ? 'selected="selected"' : '') +'>' + i + '/' + pageNum + '页</option>'
        }
        pagerObj += '</select>';
        pagerObj += '<a href="#" class="next' + (curPage == pageNum ? ' disable' : '') + '">下一页</a>';
        pagerObj += '</div>'
        return pagerObj;
    }
}
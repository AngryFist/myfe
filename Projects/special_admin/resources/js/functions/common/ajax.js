define([], function() {
    var Init = function(url, cb, cbArg){
        $.ajax({
            url : url,
            dataType : 'html',
            success : function(html){
                if({}.toString.call(cb) == "[object Function]")
                    cb(html, cbArg);
            }
        })
    }
    return {
        Init : Init
    }
})
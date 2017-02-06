define([], function() {

    var Init = function(){
        $.ajax({
            url : 'resources/js/widgets/rest-list/index.html',
            dataType : 'html',
            success : function(html){
                console.log(html);
            }
        })
    }

    return {
        Init : Init
    }
})
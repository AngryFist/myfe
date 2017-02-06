define([], function(){

    var Init = function(){
        var rightContextMenu  = $('.J-right-context-menu');

        $('body').on('click', '.J-right-context-menu .J-add', function(){
            alert('天天家')
        }) 
    }


    return {
        Init : Init
    }
    

})
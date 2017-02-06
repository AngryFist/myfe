define([], function() {
    var innerContent = $('.J-inner-content');
    var Init = function(){
        var data = arguments[0];
        innerContent.append(data);

        innerContent.gridly({
            base: 60,
            gutter: 20,
            columns: 1
        });
    }
    return {
        Init : Init
    }
})
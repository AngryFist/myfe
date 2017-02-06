define(['functions/common/ajax', './append'], function(Ajax, Append) {


    $('body').on('dblclick', '.J-modules-content li', function(){
        var widgetClass = $(this).data('widget-class');
        var widgetUrl = $(this).data('widget-url');
        console.log('a')
        Ajax.Init(widgetUrl, Append.Init , false);

    })
})
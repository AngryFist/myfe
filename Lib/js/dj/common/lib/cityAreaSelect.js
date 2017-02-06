/*

    *   cookie操作
    *   author : box
    *   lastupdate : 2016-05-23
    *   version : 1.0.0
 */
/*
    var options {
        url : '../json/cityAreaList.json',
        cityID : 'cityID',
        areaID : 'areaID',
        defaulCityID : 0,
        defaulAreaID : 0,
        hasAll : false,
        cityChangeCallBack : function(){},
        areaChangeCallBack : function(){}
    }
*/
var DJs_cityAreaSelect = {
    
    Init : function(options){

        if(!options || !options.cityID || !options.url) {
            console.log('缺少必要的参数');
            return;
        }

        var me = this;
        var defaultCityID = options.defaulCityID || 0;
        var hasAll = options.hasAll || false;

        $.ajax({
            url : options.url,
            type : 'GET',
            dataType : 'json',
            success : function(json){
                var list = json.result;
                if({}.toString.call(list) != "[object Array]"){
                    console.log('list不是数组!');
                    return false;
                }
                var cityArr = [];
                for(var i = 0 ; i < list.length; i++){
                    var cityItem = {};
                    cityItem.optionID = list[i].CityID;
                    cityItem.title = list[i].Name;
                    cityArr.push(cityItem);
                }
                var selectOptions = '';
                selectOptions += hasAll ? '<option value="0">全部</option>' : '';
                for(var i = 0; i < cityArr.length; i++){
                    selectOptions += '<option value="' + cityArr[i].optionID + '" ' + (cityArr[i].optionID == defaultCityID ? 'selected="selected"' : '') +'>' + cityArr[i].title + '</option>'
                }
                $('#' + options.cityID).html(selectOptions);

                if(options.areaID){
                    var current_city_id = $('#' + options.cityID).find('option:selected').val();
                    me.getArea(options, current_city_id, list);
                }

                me.bindEvent(options, list);
            },
            error : function(XMLHttpRequest, textStatus, errorThrown){
                // 通常 textStatus 和 errorThrown 之中 只有一个会包含信息
                console.log(textStatus);
            }
        })

    },
    getArea : function(options, current_city_id, list){
        var defaultAreaID = options.defaultAreaID || 0;
        var areaOption = '<option value="0">全部</option>';

        var areaList = [];

        for(var i = 0 ; i < list.length; i++){
            if(list[i].CityID == current_city_id) areaList = list[i].AreaList
        }

        if(current_city_id != 0 && areaList.length > 0){
            for(var i = 0 ; i < areaList.length; i++){
                areaOption +=  '<option value="' + areaList[i].AreaID + '" ' + (areaList[i].AreaID == defaultAreaID ? 'selected="selected"' : '') +'>' + areaList[i].Name + '</option>';
            }
        }
        $('#' + options.areaID).html(areaOption);
    },
    bindEvent : function(options, list){
        var me = this;
        $('#' + options.cityID).on('change', function(){
            var current_city_id = $(this).val();
            me.getArea(options, current_city_id, list);
            options.cityChangeCallBack();
        })
        $('#' + options.areaID).on('change', function(){
            options.areaChangeCallBack();
        })
    }
}
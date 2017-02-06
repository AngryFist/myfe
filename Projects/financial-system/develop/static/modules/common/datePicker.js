define(['datetimepicker','mousewheel'], function() {

    var Init = function(inputsIDArr,minDate, maxDate){
      var dataPickerOption = {};

      if(minDate != undefined && minDate !== ''){
        var minDate = getBeforeDate(minDate).split('-');
        dataPickerOption.minDate = new Date(Number(minDate[0]), Number(minDate[1])-1, Number(minDate[2]));
      }

      if(maxDate != undefined && maxDate !== ''){
        var maxDate = getBeforeDate(maxDate).split('-');
        dataPickerOption.maxDate = new Date(Number(maxDate[0]), Number(maxDate[1])-1, Number(maxDate[2]));
      }
      $.datetimepicker.setLocale('ch');

      for(var i = 0; i < inputsIDArr.length; i++){
          // $( "#" + inputsIDArr[i] ).prop('readonly', true);
          // $( "#" + inputsIDArr[i] ).datepicker(dataPickerOption);
          $( "#" + inputsIDArr[i] ).datetimepicker({});
          
      }
    }

    // $("input").datetimepicker()

    // $("#end_date").datepicker();

    var getBeforeDate = function(n){
        var n = n;
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth()+1;
        var day = d.getDate();
        var ms;

       

        if(n != -1){
          // if(n=1){
          //   ms=" 00:00"
          // }else{
          //   ms=" 59:59"
          // }
            if(day <= n){
                    if(month>1) {
                       month=month-1;
                    }
                   else {
                     year = year-1;
                     month = 12;
                     }
                   }
                  d.setDate(d.getDate()-n);
                  year = d.getFullYear();
                  month=d.getMonth()+1;
                  day=d.getDate();
             s = year + "-" + (month < 10 ? ('0'+month):month)+"-"+(day<10?('0'+day):day)+(n==1? " 59:59" : " 00:00");
             return s;
         }else{// -1 获取上个月
            var lastMon = month-1
            var   firstdate = year + '-' + (lastMon<10?('0'+lastMon):lastMon) + '-01';  
            var  day = new Date(year,lastMon,0);   
            var lastdate = year + '-' + (lastMon<10?('0'+lastMon):lastMon) + '-' + day.getDate();//获取当月最后一天日期    

            return [firstdate,lastdate];  
         }
    }

    //checkDateType 0 - 无 1-当月查询 2-最近7天 3-最近15天 4- 上个月
    var dateInput = function(startInput, endInput, checkDateType){
        if(!checkDateType) var checkDateType = 0;
        var startDate,endDate;
        switch (checkDateType){
            case 2://一周
                startDate = getBeforeDate(7);
                endDate = getBeforeDate(1);
                break;
            case 3://15天
                startDate = getBeforeDate(15);
                endDate = getBeforeDate(1);
                break;
            case 1://上个月
                startDate = getBeforeDate(-1)[0];
                endDate = getBeforeDate(-1)[1];
                break;
            default:
                break;
        }
        $("#" + startInput).val(startDate);
        $("#" + endInput).val(endDate);
    }
    //checkDateType 0 - 无 1-当月查询 2-最近7天 3-最近15天 4- 上个月
    var dateInputV2 = function(startInput, endInput, startBefore, endBefore){
        var startDate, endDate;
        var startBefore = startBefore || 0;
        var endBefore = endBefore || 0;

        startDate = getBeforeDate(startBefore);
        
        endDate = getBeforeDate(endBefore);

        $("#" + startInput).val(startDate);
        $("#" + endInput).val(endDate);
    }


    var dateInputSingle = function(inputName, n){
        var inputDate = getBeforeDate(n);
        $("#" + inputName).val(inputDate);
    }

    var getDateTime = function(dateTamp){
        var myDate = new Date(dateTamp);
        return myDate.getTime();
    }

    return {
        Init : Init,
        dateInput : dateInput,
        dateInputV2 : dateInputV2,
        dateInputSingle : dateInputSingle,
        getDateTime : getDateTime
    }
})
require(["./common/a",'./common/tab','./common/dateTable/a','./common/datePicker'],function(a,tab,renderDate,datePicker){
	var minDate = '', maxDate = 1;
	tab.Init(".js-tabbtn-group",".js-view",1);
	datePicker.Init(['start_date', 'end_date'], minDate, maxDate);
	datePicker.dateInput('start_date','end_date',2);
	var downLoadE=$("#downLoad");
	var downLoadDateE=$("#downLoadDate")
	
	var today = new Date();
	var defaultCollectType="date";
	renderDate.renderDate("#dateRender",today.getFullYear(),today.getMonth());
	downLoadDateE.html(today.getFullYear()+'年<span class="js-showmonth">'+(today.getMonth()+1)+'月</span>');


	function renderDateTable(){
		var nowYears = today.getFullYear();
		var nowMonth = today.getMonth();

		var currtYears = today.getFullYear();
		var currtMonth = today.getMonth();
		/*汇总类型切换*/
		downLoadE.on("click",".js-collect",function(){
			var type = $(this).data("type");
			var parent=$(this).parents("#downLoad");
			$(".js-next").removeClass("active");
			if(type=="date"){

				nowYears = today.getFullYear();
				nowMonth = today.getMonth();
				renderDate.renderDate("#dateRender",nowYears,nowMonth);
				downLoadDateE.html(nowYears+'年<span class="js-showmonth">'+(nowMonth+1)+'月</span>');
				defaultCollectType="date";
			}else{
				nowYears = today.getFullYear();
				renderDate.renderMonth("#dateRender",nowYears);
				downLoadDateE.html(nowYears+'年');
				defaultCollectType="month";
			}
		})

		/*上一步 下一步*/
		downLoadE.on("click",".js-prev",function(){
			if($(this).hasClass("active")){
				if(defaultCollectType=="date"){
					$(this).siblings().addClass("active")
					if(nowMonth>0){
						nowMonth--
					}else{
						nowMonth=11;
						nowYears--;
					}
					renderDate.renderDate("#dateRender",nowYears,nowMonth);
					downLoadDateE.html(nowYears+'年<span class="js-showmonth">'+(nowMonth+1)+'月</span>');
					defaultCollectType="date";
				}else{
					nowYears--;
					$(this).siblings().addClass("active");
					renderDate.renderMonth("#dateRender",nowYears);
					downLoadDateE.html(nowYears+'年');
				}
			}
		})
		downLoadE.on("click",".js-next",function(){
			if($(this).hasClass("active")){
				var me = $(this);
				if(defaultCollectType=="date"){
					function timelear(){
						if(nowYears==currtYears&&nowMonth==currtMonth){
							nowMonth=currtMonth;
							me.removeClass("active");
							return;
						}
					}
					if(nowMonth>=11){
						nowMonth=0;
						nowYears++;
					}else{
						nowMonth++;
						timelear();
					}
					renderDate.renderDate("#dateRender",nowYears,nowMonth);
					downLoadDateE.html(nowYears+'年<span class="js-showmonth">'+(nowMonth+1)+'月</span>');
					defaultCollectType="date";
				}else{

					function timeyears(){
						if(nowYears==currtYears){
							nowMonth=currtMonth;
							me.removeClass("active");
							return;
						}
					}
					if(nowYears<=currtYears){
						nowYears++;
						timeyears();
					}else{
						nowYears==currtYears;
					}
					$(this).siblings().addClass("active");
					renderDate.renderMonth("#dateRender",nowYears);
					downLoadDateE.html(nowYears+'年');
				}
			}
		})

	}

	renderDateTable();




	








	/*暂做区分，具体根据接口情况而定*/

	$(".js-tabcollect").on("click","div",function(){
		$(this).addClass("active").siblings().removeClass("active")
		var meType=$(this).data("type");
		if(meType=="date"){
			$(".js-monthtext").html("日");
			$(".js-showmonth").show();

		}else{
			$(".js-monthtext").html("月");
			$(".js-showmonth").hide();
		}
	})
})
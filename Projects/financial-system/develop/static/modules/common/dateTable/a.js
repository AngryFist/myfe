define([],function(){
	/*
		判断平年闰年
	*/
	var isLeap = function(year){
		return year % 4 == 0 ? (year % 100 != 0 ? 1 : (year % 400 == 0 ? 1 : 0)) : 0;
	}
	/*
		渲染日历头
	*/
	var renderDateHeader = function(){
		var weekArray = ['日','一','二','三','四','五','六'];
		var HTMLString = "<table cellspacing='0' class='datetable' align='center'>"
			HTMLString += "\n\t<thead>\n\t\t<tr>"
			for(var i = 0;i<weekArray.length;i++){
				HTMLString+="\n\t\t\t<td>"+weekArray[i]+"</td>";
			}
			HTMLString += "\n\t\t</tr>\n\t</thead>\n";
			return HTMLString
	}

	/*
		渲染日历
	*/
	var renderDate = function(ele,y,m){
		var dateE = renderDateHeader();//渲染头
		var today = new Date();//获取当前日期
		var d=today.getDate();
		var fristDay = new Date(y,m);//传递新时间
		var mm=today.getMonth();
		var yy=today.getFullYear();

		var dayOfWeek = fristDay.getDay();  //判断第一天是星期几(返回[0-6]
		var daysPerMonth = new Array(31, 28 + isLeap(y), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);//创建月份数组
		var strNums = Math.ceil((dayOfWeek + daysPerMonth[m]) / 7);//确定日期表格所需的行数

		dateE+="\t<tbody>\n";

		for (var i = 0; i < strNums; i += 1) {        //二维数组创建日期表格
			dateE+="\t\t<tr>\n";
			for (var k = 0; k < 7; k++) {
				var idx = 7 * i + k;                //为每个表格创建索引,从0开始
				var date = idx - dayOfWeek + 1;          //将当月的1号与星期进行匹配
				var isDownLoad = "cantdownload";


				if(y==yy){

					if(m==mm){
						isDownLoad="candonwload";
						if(date<d && y>=yy){
							isDownLoad="candonwload"
						}else{
							isDownLoad = "cantdownload";
						}
					}else if(m<mm){

						isDownLoad="candonwload"
					}

				}else if(y<yy){
					isDownLoad="candonwload"
				}
				

				// if(y>yy){
				// 	isDownLoad = "cantdownload";
				// }
				
				
				
				/*索引小于等于0或者大于月份最大值就用空表格代替*/
				if(date <= 0 || date > daysPerMonth[m]){
					date = ''
				}else{
					date = idx - dayOfWeek + 1
				}
				//判断今天之前能下载，今天之后不能下载

				if(date <= 0 || date > daysPerMonth[m]){
					dateE+='\t\t\t<td>' + date + '</td>\n'
				}else{
					if(y==yy&&m==mm&&date==(d-1)){
						dateE+='\t\t\t<td class="candonwload yesterday" data-date="'+y+'-'+(m+1)+'-'+date+'">' + date + ' (昨天)<i class="downico"></i></td>\n'
					}else{
						dateE+='\t\t\t<td class="'+isDownLoad+'" data-date="'+y+'-'+(m+1)+'-'+date+'">' + date + '<i class="downico"></i></td>\n'
					}
				}
				
				
			}
			dateE+='\t\t</tr>\n';
		}
		dateE+="\t</tbody>\n";
		$(ele).html(dateE);
	}


	var renderMonth = function(ele,y){
		var today = new Date();//获取当前日期
		var monthArray = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
		var monthRows = Math.ceil(monthArray.length/6);
		// console.log(monthRows)
		y=y||today.getFullYear();//传递参数 
		var yy = today.getFullYear();
		m=today.getMonth();//传递参数
		var monthE ='<table cellspacing="0" class="datetable" align="center">\n';
		monthE+='\t<tbody>\n'
		for(var i=0;i<monthRows;i+=1){
			monthE +='\t\t<tr>\n';
			for(var k=0;k<6;k++){
				var v = 6*i+k;
				if(y==yy&&v<m){
					if(v==m-1){
						monthE+='\t\t\t<td class="candonwload last_month" data-date="'+y+'-'+(v+1)+'">'+(monthArray[v])+'（上个月）<i class="downico"></i></td>\n';
					}else{
						monthE+='\t\t\t<td class="candonwload" data-date="'+y+'-'+(v+1)+'">'+(monthArray[v])+'<i class="downico"></i></td>\n';
					}
				}else{
					if(y<yy){
						monthE+='\t\t\t<td class="candonwload" data-date="'+y+'-'+(v+1)+'">'+(monthArray[v])+'<i class="downico"></i></td>\n';
						
					}else{
						monthE+='\t\t\t<td class="cantdownload" data-date="'+y+'-'+(v+1)+'">'+(monthArray[v])+'</td>\n';
					}
					
				}
			}
			monthE+='\t\t</tr>\n';
			// monthE += monthArray[i]+" ";
		}
		monthE+='\t</tbody>\n';
		monthE+='</table>\n';
		$(ele).html(monthE);


	}
	return {
		renderDate:renderDate,
		renderMonth:renderMonth
	}

})
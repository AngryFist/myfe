var mainNav=$(".js-main-nav");

define([],function(){
	var createHtml = function(obj){
		var html = '<div class="left_title">'+obj.title+'</div>';
		if(obj.btn.length>0){
			html += '<div class="right_btn_group">'
			for(var i=0;i<obj.btn.length;i++){
				html += '<a href="PurviewManagementAddUser.html" id="addUser" class="btn btn-primary">'+obj.btn[i].text+'</a>'
			}
			html += '</div>'
		}
		return html;
	}
	var Init = function(obj){
		var html = createHtml(obj);
		mainNav.html(html);
		bindEvent();
	}
	var bindEvent = function(){
		//待续
	}

	return {
		Init:Init
	}




})
    

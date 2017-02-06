define([],function(){
	var renderHeader = $(".js-render-header");
	var createHTMLString=function(useMsg){
		var html = "";
		html+='<div class="hleft">';
		html+='<a href="index.html" class="logo">财务系统</a>';
		html+='</div>';
		html+='<div class="hright">';
		html+='<ul>';
		html+=userMsg;
		html+='</ul>';
		html+='</div>';
		return html;
	}
	var userMsg='<li>韩铁臣 <a href="#">（退出）</a></li> <li><a href="help">帮助中心</a></li><li><a href="set">设置</a></li>'

	var Init=function(){
		renderHeader.html(createHTMLString(userMsg));
		bindEvent(renderHeader);
	}
	function bindEvent(ele){
	}
	return {
		Init:Init
	}
})
define([],function(){
	var renderAsider = $(".js-rander-asider");
	var createHTMLString=function(opt){
		var html = "<ul>";
		for(var i=0;i<opt.length;i++){
			var activeAng=opt[i].active==true ? "<i class='left_anger'></i>" :"";
			var active=opt[i].active==true ? "active" :"";
			html+='<li class="'+opt[i].className+' '+active+'" id="'+opt[i].tagID+'"><a href="'+opt[i].href+'"><i class="ico"></i>'+opt[i].inner+'</a> '+activeAng+' </li>'
		}
		html+="</ul>";
		return html;
	}
	var Init = function(opt){
		renderAsider.html(createHTMLString(opt))
		
	}
	return {
		Init:Init
	}
})
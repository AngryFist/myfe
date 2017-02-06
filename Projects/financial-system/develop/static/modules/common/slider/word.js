define([],function(){

	var Init = function(obj){
		

		bindEvent(obj)
		
	}

	function bindEvent(obj){
		var page=0;
		var pageHeight = 53;
		$(obj).unbind();
		$(obj).on("click",".down",function(){
			
			var len = $(this).parents(obj).find("p").length;
			// alert(len)
			page++;
			if(page>=len){
				page=0;	
			}
			var scrollbox = $(this).parents(obj).find(".warp");
			scrollbox.animate({"top":0-page*pageHeight},200)
		})

		$(obj).on("click",".up",function(){
			
			var len = $(this).parents(obj).find("p").length;
			// alert(len)
			page--;
			if(page<1){
				page=len-1;	
			}
			var scrollbox = $(this).parents(obj).find(".warp");
			scrollbox.animate({"top":0-page*pageHeight},200)
		})
	}

	return {
		Init:Init
	}


})
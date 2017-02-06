define([],function(){
	var Init=function(obj){
		$(obj).each(function(i){
			if(i%2!=0){
				$(this).addClass("oddColor")
			}

		})
	}
	return {
		Init:Init
	}
})
define([],function(){

	var Init = function(){
		function setWidth(){
			var Cbox = $(".financial");
			var CrightBox = Cbox.find(".right_aside");
			var Ccontent=Cbox.find(".left_content");
			var Cwidth = Math.floor(Cbox.width()-CrightBox.width()-1);
			Ccontent.css({"width":Cwidth+"px"})
		}
		setWidth();
		$(window).resize(function(){
			setWidth();
		})

	}

	return {
		Init:Init
	}

	

})
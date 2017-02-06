define([],function(){
	var Init = function(tabBtn,tabview,def){
		$(tabview).hide();
		
		$(tabview).eq(0).show();
		$(tabBtn).on("click","a",function(){
			var parent = $(this).parent().parent();
			var parentlv1=$(this).parent();
			var index = $(this).index();
			var mWidth = $(this).width();
			var lv1Pdl=parseInt(parentlv1.css("paddingLeft"));
			var meMgr=parseInt($(this).css("marginRight"));

			var postion = parseInt(mWidth/2-9);
			var me = $(this)
			if(def==1){
				me.addClass("active").siblings("a").removeClass("active");
				
			}else{

				parent.find(".uptag").animate({"left":index*mWidth+postion+"px"},200,function(){
					me.addClass("active").siblings("a").removeClass("active");
					parent.find(tabview).eq(index).show();
					parent.find(tabview).eq(index).siblings(tabview).hide();
				});

			}
		})


		$(tabBtn).each(function(){
			$(this).parent().parent().find(tabview).eq(0).show();
			$(this).find(".active").click();
		})
	}
	return {
		Init:Init
	}
})
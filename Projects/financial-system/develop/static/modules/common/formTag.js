define([],function(){
	var SelectInit = function(){
		// if($("select").length != 0){
			$("select").each(function(){
				var selectWarp = $(this).parent();
				$(this).css("opacity",0);
				selectWarp.css({"position":"relative"});
				var width=$(this).parent().width();

				var defaultTxt=$(this).find("option:selected").text();


				selectWarp.append('<input type="text" class="selectinput"  readonly="readonly" value="'+defaultTxt+'" style="text-indent:0px;width:'+(width-30)+'px;text-align:center" >')
				// console.log($(this).parent().innerWidth())
				bindEventSelect($(this));
			})
		// }
	}
	var CheckboxInit=function(){
		$("input[type='checkbox']").each(function(){
			var parent = $(this).parent();
			// alert(parent.html())
			if($(this).is(":checked")){
				// alert(1)
				parent.find(".icoinput").addClass("checkbox_checked");

			}else{
				parent.find(".icoinput").removeClass("checkbox_checked")
			}
			$(this).on("change",function(){
				CheckboxInit();
			})
		})
	}
	var bindEventSelect=function(obj){
		obj.unbind();
		obj.on("change",function(){
			var selectWarp = $(this).parent();
			var defaultTxt=$(this).find("option:selected").text();
			selectWarp.find("input").val(defaultTxt);
		})
		obj.parent().on("click",function(){
		// $(this).find("select").change();
			// alert(1)
		})
	}
	return {
		SelectInit:SelectInit,
		CheckboxInit:CheckboxInit
	}

})
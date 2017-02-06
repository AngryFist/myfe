define(["../popup/a"],function(popup){

	var copy=function(ele){
		var Url2=ele;
		Url2.select();
		document.execCommand("Copy"); 
		// alert("已复制好，可贴粘。");
		popup.Open({
			close:true,
			// title:"test",
			content:"已经复制到剪贴板,可粘贴",
			btnList:[
				{
					'class':"comfbox",
					text:"确定",
					callback:function(){
						popup.Close(".popup")
					}
				}
			]
		})
	}
	var allSelect=function(ele){
		// var Url2=ele;
		Url2.focus();
		Url2.select();

	}
	return {
		allSelect:allSelect
	}
})
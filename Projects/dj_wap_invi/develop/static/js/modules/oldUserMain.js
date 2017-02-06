require(["popup/a","copy/a"],function(popup,copy){
	var activeRuleE=$(".active_rule");
	activeRuleE.on("click",function(){
		popup.Open({
			close:false,
			// title:"test",
			content:activeRuleInnerHTML,
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
	})

	var inviteTextE = $("#inviteText")[0];

	inviteTextE.onclick=function(){
		this.setSelectionRange(0,this.value.length);
        this.focus();
  //       document.execCommand("Copy"); 
		// alert("已复制好，可贴粘。");
		
	}

})
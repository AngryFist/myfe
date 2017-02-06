require(["popup/a"],function(popup){
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
	var getRewardE=$("#getReward");
	var phoneNumberE=$("#phoneNumber");
	var telAlertE=$("#telAlert");

	getRewardE.on("click",function(){
		if(!(/^1[3|4|5|8][0-9]\d{8}$/.test(phoneNumberE.val()))){
	        telAlertE.css({"opacity":1})
	        phoneNumberE.focus();
	        return false; 
	    }else{
	    	telAlertE.css({"opacity":0})
	    	window.location.href="/getSuccess.html"
	    }
	})



})
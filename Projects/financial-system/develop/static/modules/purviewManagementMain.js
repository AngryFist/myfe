

require(["./common/a","./purviewmanagement/a",'./common/tab'],function(a,purview,tab){
	var pageNavConfig={
		title:"用户权限",
		btn:[
			{text:"添加用户",id:"addUser"}
		]
	}
	tab.Init(".js-tabbtn-group",".js-view",1);
	purview.Init(pageNavConfig);	

})
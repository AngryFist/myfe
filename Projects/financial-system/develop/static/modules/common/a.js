//公用业务模块  提供一些初始化操作  不对外提供接口
var asiderJson = [
	{
		className:"my_financial",
		tagID:"myFinancial",
		id:"",
		inner:"我的财务中心",
		active:false,
		href:'Financial.html'

	},
	{
		className:"accounts",
		tagID:"accounts",
		id:"",
		inner:"对账中心",
		active:false,
		href:'Accounts.html'

	},
	{
		className:"income",
		tagID:"income",
		id:"",
		inner:"收入中心",
		active:false,
		href:'Income.html'

	},
	{
		className:"services_settlement",
		tagID:"servicesSettlement",
		id:"",
		inner:"服务站结算",
		active:false,
		href:'ServicesSettlement.html'

	},
	{
		className:"business_settlement",
		tagID:"businessSettlement",
		id:"",
		inner:"商家结算",
		active:false,
		href:'BusinessSettlement.html'

	},
	{
		className:"erp_settlement",
		tagID:"erpSettlement",
		id:"",
		inner:"ERP结算",
		active:false,
		href:'ErpSettlement.html'
	},
	{
		className:"check_order",
		tagID:"checkOrder",
		id:"",
		inner:"核算订单",
		active:false,
		href:'CheckOrder.html'

	},
	{
		className:"purview_management",
		tagID:"purviewManagement",
		id:"",
		inner:"权限管理",
		active:false,
		href:'PurviewManagement.html'

	},
	{
		className:"more",
		tagID:"more",
		id:"",
		inner:"更多",
		active:false,
		href:'More.html'

	}
];
function resetJson(opt){
	for(var i=0;i<opt.length;i++){
		var RegExps = new RegExp(opt[i].href.split(".")[0]);

		if(RegExps.test(window.location.href)){
			opt[i].active=true
		}
	}
	return opt;
}

define(['./header/a', './asider/a','./formTag'], function(header, aside,formTag) {
	
	formTag.SelectInit();

	if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0"){
		formTag.CheckboxInit();
	// alert("您的浏览器版本过低，请下载IE9以上版本");
	}
    header.Init();
    aside.Init(resetJson(asiderJson));

});
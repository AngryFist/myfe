function resetJson(e){for(var n=0;n<e.length;n++)window.location.href.indexOf(e[n].href)>-1&&(e[n].active=!0);return e}define("common/header/a",[],function(){function e(e){}var n=$(".js-render-header"),t=function(e){var n="";return n+='<div class="hleft">',n+='<a href="index.html" class="logo">财务系统</a>',n+="</div>",n+='<div class="hright">',n+="<ul>",n+=i,n+="</ul>",n+="</div>"},i='<li>韩铁臣 <a href="#">（退出）</a></li> <li><a href="help">帮助中心</a></li><li><a href="set">设置</a></li>',a=function(){n.html(t(i)),e(n)};return{Init:a}}),define("common/asider/a",[],function(){var e=$(".js-rander-asider"),n=function(e){for(var n="<ul>",t=0;t<e.length;t++){var i=1==e[t].active?"<i class='left_anger'></i>":"",a=1==e[t].active?"active":"";n+='<li class="'+e[t].className+" "+a+'" id="'+e[t].tagID+'"><a href="'+e[t].href+'"><i class="ico"></i>'+e[t].inner+"</a> "+i+" </li>"}return n+="</ul>"},t=function(t){e.html(n(t))};return{Init:t}}),define("common/formTag",[],function(){var e=function(){$("select").each(function(){var e=$(this).parent();$(this).css("opacity",0),e.css({position:"relative"});var n=$(this).parent().width(),i=$(this).find("option:selected").text();e.append('<span><input type="text"  readonly="readonly" value="'+i+'" style="text-indent:0px;width:'+(n-30)+'px;text-align:center" ><div class="select_angu"></div></span>'),console.log($(this).parent().innerWidth()),t($(this))})},n=function(){$("input[type='checkbox']").each(function(){var e=$(this).parent();$(this).is(":checked")?e.find(".icoinput").addClass("checkbox_checked"):e.find(".icoinput").removeClass("checkbox_checked"),$(this).on("change",function(){n()})})},t=function(e){e.unbind(),e.on("change",function(){var e=$(this).parent(),n=$(this).find("option:selected").text();e.find("input").val(n)}),e.parent().on("click",function(){})};return{SelectInit:e,CheckboxInit:n}});var asiderJson=[{className:"my_financial",tagID:"myFinancial",id:"",inner:"我的财务中心",active:!1,href:"Financial.html"},{className:"accounts",tagID:"accounts",id:"",inner:"对账中心",active:!1,href:"Accounts.html"},{className:"income",tagID:"income",id:"",inner:"收入中心",active:!1,href:"Income.html"},{className:"services_settlement",tagID:"servicesSettlement",id:"",inner:"服务站结算",active:!1,href:"ServicesSettlement.html"},{className:"business_settlement",tagID:"businessSettlement",id:"",inner:"商家结算",active:!1,href:"BusinessSettlement.html"},{className:"erp_settlement",tagID:"erpSettlement",id:"",inner:"ERP结算",active:!1,href:"ErpSettlement.html"},{className:"check_order",tagID:"checkOrder",id:"",inner:"核算订单",active:!1,href:"CheckOrder.html"},{className:"purview_management",tagID:"purviewManagement",id:"",inner:"权限管理",active:!1,href:"PurviewManagement.html"},{className:"more",tagID:"more",id:"",inner:"更多",active:!1,href:"More.html"}];define("common/a",["./header/a","./asider/a","./formTag"],function(e,n,t){t.SelectInit(),("Microsoft Internet Explorer"==navigator.appName&&"MSIE6.0"==navigator.appVersion.split(";")[1].replace(/[ ]/g,"")||"Microsoft Internet Explorer"==navigator.appName&&"MSIE7.0"==navigator.appVersion.split(";")[1].replace(/[ ]/g,"")||"Microsoft Internet Explorer"==navigator.appName&&"MSIE8.0"==navigator.appVersion.split(";")[1].replace(/[ ]/g,"")||"Microsoft Internet Explorer"==navigator.appName&&"MSIE9.0"==navigator.appVersion.split(";")[1].replace(/[ ]/g,""))&&t.CheckboxInit(),e.Init(),n.Init(resetJson(asiderJson))}),require(["./common/a"],function(){}),define("checkOrderMain",function(){});
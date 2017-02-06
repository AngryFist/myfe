define([], function() {
    var scalestring = "";//展开效果
    /*默认参数*/
    var docuemntW=$(document).width();
    var documentH=$(document).height();
    var dialogW,dialogH;
	var extend = function (p, c) { 
　　　　var c = c || {}; 
　　　　for (var i in p) { 
　　　　　　if (typeof p[i] === 'object') { 
　　　　　　　　c[i] = (p[i].constructor === Array) ? [] : {}; 
				extend(p[i], c[i]); 
　　　　　　} else { 
　　　　　　　　　c[i] = p[i]; 
　　　　　　} 
　　　　} 
　　　　return c; 
　　}
	var closePopup = function(element, callback) {

        var timeout = null;
        clearTimeout(timeout);
        $(element).find(".dialog").css({
            "-webkit-transform": "scale" + scalestring + "(0)"
        });
        var transitionE=$(element).find(".dialog")[0]
        transitionE.addEventListener("webkitTransitionEnd",function(){
        	$(element).attr("style", "");
            $(".popup").remove();
        });  // Safari 3.1 到 6.0 代码
		transitionE.addEventListener("transitionend",function(){
			$(element).attr("style", "");
            $(".popup").remove();
		});   
        callback && callback();
    };

    var openPopup = function(object) {
            var timeout = null;
            clearTimeout(timeout);
            $(object).css({
                "display": "-webkit-box",
                "-webkit-box-pack": "center",
                "-webkit-box-align": "center"
            });
            timeout = setTimeout(function() {
                $(object).find(".dialog").css({
                    "-webkit-transform": "scale" + scalestring + "(1)"
                });
            }, 300);
    }

    var Default = {
            transfrom: "", //效果
            title: "", //标题
            content: "", //内容
            close: true, //是否关闭
            closeCallback:null,
            Dwidth: "",
            popupPosition:"fixed",
            btnList: [
                {
                    "class": "",
                    "text": "确认",
                    "callback": null
                },
                {
                    "class": "comfbox",
                    "text": "取消",
                    "callback": null
                }
            ]
    };

    var Init = function(opts){
    		/*默认参数*/

    	var closeHTML = "";//关闭按钮HTML
	    var btnShowHTML = "";//功能按钮HTML
	    var btnsHTML = "";//按钮
    	
        var objParams = extend(opts,Default);

        if (objParams.transfrom === "x") {
            scalestring = "X";
        } else if (objParams.transfrom === "y") {
            scalestring = "Y";
        } else if (objParams.transfrom === "z") {
            scalestring = "Z";
        }

         /*是否关闭*/
        objParams.close ? closeHTML = "<a class='close'><i class='djico djm-close'></i></a>" : closeHTML = "";
         if (objParams.btnList.length > 0) {
            for (var i = 0; i < objParams.btnList.length; i++) {
                btnsHTML += "<span class='popupbtn " + objParams.btnList[i]['class'] + "'>" + objParams.btnList[i]['text'] + "</span>";
            }
            btnShowHTML = "<div class='popupbtnbox'>" + btnsHTML + "</div>";

        }else{
            btnShowHTML = "";
        }
        objParams.Dwidth = "" ? "" : objParams.Dwidth;//弹出层样式

         if (typeof objParams.content === "staring") {
            objParams.content;
        } else if (typeof objParams.content === "function") {
            objParams.content = (objParams.content)();
        }
         var popupHTML = "<div class='popup'>"
                + "<div class='dialog " + objParams.popupStyle + "' style='width:"+objParams.Dwidth+";-webkit-transform:scale" + scalestring + "(0)'>"
                + "<section class='dialog-content'>"
                + "<div class='dialog-title'><span>" + objParams.title + "</span>" + closeHTML + "</div>"
                + "<div class='warp'>"
                + objParams.content
                + "</div>"
                + btnShowHTML
                + "</div>"
                + "</section>"
                + "</div>"
                + "</div>";
        /*是否有按钮*/
        $("body").append(popupHTML);

          if ($(".popup .popupbtn").length > 0) {
            $(".popup .popupbtn").bind("click", function() {
                var i = $(this).index();
                (objParams.btnList[i]['callback'])&&(objParams.btnList[i]['callback'])();
            });
        }
        $(".popup a.close").on("click", function () {
            closePopup(".popup");
            (objParams.closeCallback) && (objParams.closeCallback)();
            window.ontouchmove = function(e) {
                e.preventDefault && e.preventDefault();
                e.returnValue = true;
                e.stopPropagation && e.stopPropagation();
                return true;
            };
        });
        openPopup(".popup");
         //在弹框时关闭Loading效果
        $('.loading').remove();
    }
    return {
        Open : Init,
        Close:closePopup
    }
})

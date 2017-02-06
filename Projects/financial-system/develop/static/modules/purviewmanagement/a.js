define(["../common/placeHolder","../common/tableColorLine","./mainNav"],function(placeHolder,tableColorLine,mainNav){
	var tabletr = $("table.default tbody tr");
	
	var Init = function(obj){
		placeHolder.Init();
		tableColorLine.Init(tabletr);
		mainNav.Init(obj);
	}
	return {
		Init:Init
	}
})
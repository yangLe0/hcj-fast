/* $(document).ready (function(){
	$("#aid").button();
}); */

/* //交互（draggable,droppable）
$(document).ready(function(){
	// $("#div").draggable();
	$("#Rect1").draggable();
	$("#Rect2").droppable();
	
	$("#Rect2").on("drop",function (event, ui) {
		// alert(event)
		$("#Rect2").text("drop事件");
	});

}); */

/* //resizable
$(document).ready(function(){
	$("#div").resizable();
}); */

/* //selectable
$(document).ready(function(){
	$("#btn").button();
	$("#selector").selectable();
	$("#btn").on("click",function(){
		// alert("Hello")
		if($("#right").hasClass("ui-selected")){
			alert("正确")
		}
	});
});

// sortable可以拖动<li>
$(document).ready(function(){
	$("#sortable").sortable();
}); */

//accordion逐个展开类似手风琴
$(document).ready(function(){
	$("#accordion").accordion();
});

//autocomplete自动补全
$(document).ready(function(){
	var autoTags = ["Ann","Ben","html","css","javascript","java"];
	$("#tags").autocomplete({
		source: autoTags
	});
});

//datepicker
$(document).ready(function(){
	$("#datepicker").datepicker();
	$("#btn1").button();
});





















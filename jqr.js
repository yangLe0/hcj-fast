/*
$(document).ready(function(){
//  alert("文档加载完毕");
	$("p").click(function(){
		$(this).hide();
	});
});
*/

/*
//selector
$(document).ready(function(){
	$("button").click(function(){
		$(".pclass").text("p元素被修改了");
	});
});
*/

//eventmethod
$(document).ready(function(){
//	$("button").click(function(){//点击隐藏按钮
//	$("button").dblclick(function(){//双击隐藏按钮
//	$("button").mouseenter(function(){//当鼠标移动到按钮上按钮隐藏
	$("button").mouseleave(function(){	//当鼠标移开按钮隐藏
	$(this).hide();
	});
});
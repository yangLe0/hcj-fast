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

/*
//eventmethod
$(document).ready(function(){
//	$("button").click(function(){//点击隐藏按钮
//	$("button").dblclick(function(){//双击隐藏按钮
//	$("button").mouseenter(function(){//当鼠标移动到按钮上按钮隐藏
	$("button").mouseleave(function(){	//当鼠标移开按钮隐藏
	$(this).hide();
	});
});
*/

/*
//bindevent
$(document).ready(function(){
//数据量大时这样写非常消耗内存
//	$("#clickMeBtn").click(function(){
//		alert("hello");
//	});
//
	$("#clickMeBtn").bind("click",clickHandler1);
	$("#clickMeBtn").bind("click",clickHandler2);
	$("#clickMeBtn").unbind("click",clickHandler1);//解除绑定
	
	$("#clickMeBtn").on("click",clickHandler1);
	$("#clickMeBtn").on("click",clickHandler2);
	$("#clickMeBtn").off("click",clickHandler1);//解除绑定
});

function clickHandler1(e){
	console.log("clickHandler1");
}
function clickHandler2(e){
	console.log("clickHandler2");
}
*/

/*
//eventtarget
$(document).ready(function(){
	$("body").bind("click",bodyHandler);
	$("div").bind("click",divHandler1);
	$("div").bind("click",divHandler2);
});

function bodyHandler(event){
//	console.log("body" );
	conLog(event);
}

function divHandler1(event){
//	console.log("div1" + event);
	conLog(event);
//	event.stopPropagation();//阻止父级冒泡事件
	event.stopImmediatePropagation();//全部阻止
}

function divHandler2(event){
//	console.log("div2" + event);
	conLog(event);
}

function conLog(event){
	console.log(event);
}
*/

/*
//currentevent

var clickMeBtn;
$(document).ready(function(){
	clickMeBtn = $("#clickMeBtn");
//	$("#clickMeBtn").click(function(){
	clickMeBtn.click(function(){
		var e = jQuery.Event("MyEvent");//创建自己的事件
		clickMeBtn.trigger(e);//指定我创建的事件名称为clickMeBtn
	});
	
	clickMeBtn.bind("MyEvent",function(event){
		console.log(event);
	})
});
*/

/*
//dom
$(document).ready(function(){
//	$("#clickMeBtn").click(function(){
//		alert("text:" + $("#pid").text());//text获取内容
//	});
	
//	$("#clickMeBtn").click(function(){
//		alert("text:" + $("#pid").html());//html可以获取到子标签
//	});
	
	$("#clickMeBtn").click(function(){
		alert("text:" + $("#it").val());//val可以获取到值
	});
	
	$("#clickMeBtn").click(function(){
		alert("text:" + $("#aid").attr("id"));//attr可以获取到属性
	});
});
*/

/*
//setting
$(document).ready(function(){
	$("#clickMeBtn").click(function(){
		//更改元素属性的值
		$("#pid").text("night");
	});
	$("#clickMeBtn").click(function(){
		$("#pid1").html("<a href='http://www.baidu.com'>百度</a>");
	});
	$("#clickMeBtn").click(function(){
		$("#it").val("更改后的值");
	});
	$("#clickMeBtn").click(function(){
		$("#aid1").attr({
			"href":"http://www.bilibili.com",
			"title":"hello"
			});
	});
	$("#btn").click(function(){
		$("#pid2").text(function(i,ot){//回调方法，i是当前元素下标，ot是最初原始内容
			return "old:"+ot+" new:新添加内容|"+(i);
		});
	});
});
*/

/*
//add content(添加内容append,prepend,before,after)
$(document).ready(function(){
	$("#btn").click(function(){
		$("#pid2").append("|this is append add content|");
		$("#pid2").prepend("|this is prepend add content|");
		$("#pid2").before("|this is before add content|");
		$("#pid2").after("|this is after add content|");
	});
});
//添加元素html,jQuery,DOM
function appendText(){
	var text1 = "<p>p元素0</p>";
	var text2 = $("<p></p>").text("p元素1");
	var text3 = document.createElement("p");
	text3.innerHTML = "p元素2";
	$("body").append(text1,text2,text3);
}
*/

/*
//delete(remove,empty)
$(document).ready(function(){
	$("#clickMeBtn").click(function(){
//		$("#div").remove();//全部删除
		$("#div").empty();//删除子元素
	});
});
*/

/*
//Animation
$(document).ready(function(){
	$("#clickMeBtn").click(function(){
		$("p").hide(1000);//隐藏
	});
	$("#clickMeBtn").click(function(){
		$("p").show(1000);//显示
	});
	$("#btn").click(function(){
		$("p").toggle(1000);//隐藏/显示
	});
	for(var i = 0;i<5;i++){
		$("<div>").appendTo(document.body);
	}
	$("div").click(function(){
		$(this).hide(2000,function(){
			$(this).remove();
		});
	});
});
*/

//fade
$(document).ready(function(){
	$("#in").on("click",function(){
		$("#div1").fadeIn(1000);
		$("#div2").fadeIn(1000);
		$("#div3").fadeIn(1000);
	});
	$("#out").on("click",function(){
		$("#div1").fadeOut(1000);
		$("#div2").fadeOut(1000);
		$("#div3").fadeOut(1000);
	});
	$("#toggle").on("click",function(){
		$("#div1").fadeToggle(1000);
		$("#div2").fadeToggle(1000);
		$("#div3").fadeToggle(1000);
	});
	$("#to").on("click",function(){//透明度0-1
		$("#div1").fadeTo(1000,0);
		$("#div2").fadeTo(1000,0.5);
		$("#div3").fadeTo(1000,1);
	});
});

/* $.myjq = function(){
	alert("Hello myjQuery");
}

$.fn.myjq = function(){
	$(this).text("Hello");
} */

/* //noConflict
$.noConflict();//消除掉$符号对于jQuery的缩写
jQuery(document).ready(function(){
	jQuery("#btn").on("click",function(){
		jQuery("div").text("new Hello");
	});
});
 */
 
//jQuery-css
// $(document).ready(function(){
/* 	$("div").css("width","100px");
	$("div").css("height","100px");
	$("div").css("background","red");
 */
/*  $("div").css({
	 width: "100px",height:"100px",backgroundColor:"green"
 }); */
 // $("div").addClass("style1");
 // $("div").click(function(){
//	 $(this).addClass("style2");
//	 $(this).removeClass("style1");
	// $(this).toggleClass("style2");
 // });
 // });
 
 // box
/*  $(document).ready(function(){
	 alert($("#div").outerHeight(true));
	 alert($("#div").innerHeight(true));
	 alert($("#div").height(true));
 });  */
 
/*  //traversingDown(children,find)
 $(document).ready(function(){
//	 $("#div1").children("#div2").css({border:"3px solid red"})//只向下遍历一级，可选参数
//	 $("#div1").find("a").css({border:"3px solid blue"})//指定谁就修改谁，必选参数
	 $("#div1").children("p").css({border:"3px solid green"})
}); */

/* //traversingUp(parent(),parents(),parentsUntil())
$(document).ready(function(){
// $("p").parent().css({border:"3px solid red"})//只遍历一层，他的直接父类
$("p").parents("#div2").css({border:"3px solid blue"})//全部向上执行遍历，可指定参数
// $("a").parentsUntil("#div1").css({border:"3px solid red"})//区间的选择
});
 */

/* //traversingCurrent(siblings(),next(),nextAll(),nextUntil(),prev(),prevAll(),preUntil())
$(document).ready(function(){
//	$("h4").siblings().css({border: "3px solid red"});//除了h4其他所有同级元素全部修改
//	$("h4").next().css({border: "3px solid red"});//h4的下一个同级的h5被修改了
//	$("h3").nextAll().css({border: "3px solid red"});//h4下面的所有同级元素被修改了
//	$("h3").nextUntil("h5").css({border: "3px solid red"});//h4下面元素的区间修改
	$("h4").prevAll().css({border: "3px solid red"});//h4下面元素的区间修改
}); */

/* 
//filter过滤(first(),last(),eq(),filter(),not())
$(document).ready(function(){
//	$("div p").first().css("background-color","red");//寻找同样元素当中的第一个
//	$("div p").last().css("background-color","red");//寻找同样元素当中的最后一个
//	$("div p").eq(2).css("background-color","red");//当前元素索引ID
//	$("div p").filter(".pclass").css("background-color","red");//指定一个标准，这个标准会创建一个集合，满足这个集合，返回当前元素，如果不满足，当前的集合中删除，就不会再包含这个效果了
	$("div p").not(".pclass").css("background-color","red");//与filter相反	
});
 */

/* //menu(show hide)
$(document).ready(function(){
	$(".main>a").click(function(){
		//alert("点击了")
		 var ulNode = $(this).next("ul");
		// if(ulNode.css("display") == "none") {
			// ulNode.css("display","block");	
		// } else {
			// ulNode.css("display","none");
		// }
		// ulNode.show();
		// ulNode.hide();
		// ulNode.toggle("normal");//参数：数字（时间），slow、normal、fast
		// ulNode.slideDown();
		// ulNode.slideUp();
		ulNode.slideToggle("fast");
	});
	
	$(".hmain").hover(function(){
		$(this).children("ul").slideDown();
	}, function(){
		$(this).children("ul").slideUp();
	});
});
//改图片
function changeIncon (mainNode) {
	if(mainNode) {
		if(mainNode.css("background-image").indexOf("collapse.gif") >= 0){
			mainNode.css("background-image","url('')");
	} else {
		mainNode.css("background-image","url('')");
	}
} */





































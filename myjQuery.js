/* $.myjq = function(){
	alert("Hello myjQuery");
}

$.fn.myjq = function(){
	$(this).text("Hello");
} */

//noConflict
$.noConflict();//消除掉$符号对于jQuery的缩写
jQuery(document).ready(function(){
	jQuery("#btn").on("click",function(){
		jQuery("div").text("new Hello");
	});
});
//图片瀑布流效果
window.onload = function(){

	imgLocation("container","box")
	
}

function imgLocation(parent,content){
	//获得全部图片，计算div个数，将parent下多有的content全部取出
	var cparent = document.getElementById(parent);//得到父级文件
	var ccontent = getChildElement(cparent,content);
	//console.log(ccontent.length);
	var imgWidth = ccontent[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth / imgWidth);
	cparent.style.cssText = "width:"+imgWidth * cols + "px;margin:0 auto";//固定图片显示个数
}

function getChildElement(parent,content){
	var contentArr = [];
	var allcontent = parent.getElementsByTagName("*");
	for(var i = 0;i<allcontent.length;i++){
		if(allcontent[i].className==content){
			contentArr.push(allcontent[i]);
		}
	}
	return contentArr;
}


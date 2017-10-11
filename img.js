//图片瀑布流效果
window.onload = function(){
	imgLocation("container","box")
	
}

function imgLocation(parent.content){
	//将parent下多有的content全部取出
	var cparent = document.getElementById(parent);
	var ccontent = getChildElement(cparent,content);
	console.log(ccontent);
}

function getChildElement(parent,content){
	var contentArr = [];
	var allcontent = parent.getElementByTagName("*");
	for(var i = 0;i<allcontent.length;i++){
		if(allcontent[i].className==content){
			contentArr.push(allcontent[i]);
		}
	}
	return contentArr;
}


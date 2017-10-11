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
	var num = Math.floor(document.documentElement.clientWidth / imgWidth);
	cparent.style.cssText = "width:"+imgWidth * num + "px;margin:0 auto";//固定图片显示个数
	
	//下一行第一个图片接上行最短的图片下面，所以先找图片高度
	var BoxHeightArr = [];
	for(var i = 0;i<ccontent.length;i++){

		if(i<num){
			BoxHeightArr[i] = ccontent[i].offsetHeight;
			console.log(BoxHeightArr[i]);//打印第一行图片高度
		}else{
			var minHeight = Math.min.apply(null,BoxHeightArr);
			var minIndex = getminheightLocation(BoxHeightArr,minHeight);
			
			console.log(minHeight);//最小图片高度
			ccontent[i].style.position = "absolute";
			ccontent[i].style.top = minHeight + "px";
			ccontent[i].style.left = ccontent[minIndex].offsetLeft + "px";
			BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight;
		}
	}
}
//得到下一行图片摆放位置
function getminheightLocation(BoxHeightArr,minHeight){
	for(var i in BoxHeightArr){
		if(BoxHeightArr[i] == minHeight){
			return i;
		}
	}
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


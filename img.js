//图片瀑布流效果
window.onload = function(){

	imgLocation("container","box")
	//没有服务器数据，定义模拟数据
	var imgData = {"data":[{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"}]}
	//监听滚动条
	window.onscroll = function(){
		if(checkFlag()){
			var cparent = document.getElementById("container");
			for(var i = 0;i<imgData.data.length;i++){
				var ccontent = document.createElement("div");
				ccontent.className = "box";
				cparent.appendChild(ccontent);
				var box_img = document.createElement("div");
				box_img.className = "box_img";
				ccontent.appendChild(box_img);
				var img = document.createElement("img");
				img.src = imgData.data[i].src;
				box_img.appendChild(img);
			}
			imgLocation("container","box")
		}
	}
	
}
//当滚动到最后一张图片时进行图片加载(也可以选当前距底部最近的)
function checkFlag(){
	var cparent = document.getElementById("container");
	var ccontent = getChildElement(cparent,"box");
	var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
	//console.log(lastContentHeight);//最后一张图片距顶部高度
	var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
	//console.log(scrollTop);
	var pageHeight = document.documentElement.clientHeight||document.body.clientHeight;//当前页面高度
	//console.log(pageHeight);
	//console.log(lastContentHeight+":"+scrollTop+":"+pageHeight);
	if(lastContentHeight < scrollTop + pageHeight){
		return true;
	}
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
			//console.log(BoxHeightArr[i]);//打印第一行图片高度
		}else{
			var minHeight = Math.min.apply(null,BoxHeightArr);
			var minIndex = getminheightLocation(BoxHeightArr,minHeight);
			
			//console.log(minHeight);//最小图片高度
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


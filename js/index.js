/*触发滚动条时间到一定的高度的时候隐藏head的head-a部分*/
 window.onload = function() {
   var head = document.getElementById('m-hidden');
   var h = 36;
   //console.log(h);
   window.onscroll = function() {
    // 获取当前页面的滚动条纵坐标位置 （依次为火狐谷歌、safari、IE678）
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollT > h) {
//   if (window.navigator.userAgent.indexOf('MSIE 6.0') != -1) {
//    // 兼容IE6代码
//    head.style.position = 'absolute';
//    head.style.top = scrollT + 'px';
//    head.style.left = 0 + 'px';
//   } else { 
      // 正常浏览器代码
      head.style.position = 'fixed';
      head.style.top = 0;
//   }
    } else
     head.style.position = 'static';
   }
  }

/*运动框架*/
//获取CSS样式
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
}
//完美运动
function startMove(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var stop = true; //检测停止的开关
		for(var attr in json){
			//获取初值
			var cur = 0;
			if(attr == "opacity"){
				cur = parseInt(parseFloat(getStyle(obj,attr)) * 100);
			}else{
				cur = parseInt(getStyle(obj,attr));
			}
			//设置速度
			var speed = (json[attr] - cur) / 8;
			speed = speed > 0? Math.ceil(speed) : Math.floor(speed);
			//检测停止
			if(json[attr] != cur){
				stop = false;
			}
			//运动
			if(attr == "opacity"){
				obj.style.opacity = (cur + speed ) / 100;
				obj.style.filter = "alpha(opacity=" + (cur + speed) + ")";
			}else{
				obj.style[attr] = cur + speed + "px";
			}
		}
		if(stop){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},30);
}

function $id(id){
	return document.getElementById(id);
}


/*根据id获取元素*/
var btnL = document.getElementById("toLeft");
var btnR = document.getElementById("toRight");
var oimg=document.getElementById( "img-list" );
var obtn=document.getElementById( "banner-nav-list" );
var banner = document.getElementById("banner");
var arr = document.getElementById("arr");
var imgList=oimg.children;
var btnList=obtn.children;
var index = 0;
var timer = null;
timer = setInterval(autoPlay,4000);

function autoPlay(){
	index++;
	for(var i = 0;i < btnList.length;i++){
		btnList[i].className = "";
	}
	if(index==3){
		oimg.style.left = 0;
		index = 1;
	}
	startMove(oimg,{"left":-index * 1263});
	btnList[index==2 ? 0 : index].className = 'active';
}

banner.onmouseover=function(){
	clearInterval( timer );
	startMove( btnL, { "left":0 } );
	startMove( btnR, { "right":0 } );
	startMove( obtn, { "opacity":100 } );
}

banner.onmouseout=function(){
	timer=setInterval( autoPlay, 4000 );
	startMove( btnL, { "left":-38 } );
	startMove( btnR, { "right":-38 } );
	startMove( obtn, { "opacity":0 } );
}

for( let i=0; i<btnList.length ;i++){
	btnList[i].onmouseover=function(){
		index=i-1;
		autoPlay();
	}
}


$id( "toRight" ).onclick=function(){
	for( var i=0; i<btnList.length; i++ ){
		btnList[i].className="";
	}
	if( index==btnList.length ){
		oimg.style.left=0;
		index=0;
	}
	index++;
	if( index==btnList.length  ){
		index=btnList.length-1;
	}
	
	btnList[index].className="active";
	startMove( oimg, { "left": -index*1263 } );
}
$id( "toLeft" ).onclick=function(){
	for( var i=0; i<btnList.length; i++ ){
		btnList[i].className="";
	}
	index--;
	if( index<0 ){
		index=0;
	}
	btnList[index].className="active";
	startMove( oimg, { "left": -index*1263 } );
}




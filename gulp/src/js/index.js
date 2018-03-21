$(function(){
	
	//吸顶效果
	$(window).scroll(function(){
//		alert();
		if($(document).scrollTop() > 36){
			$('.headTop').css({'position':"fixed","top":"-47px"})
		}else{
			$('.headTop').css({"top":0,"position":"relative"});
		}
	})
	
	// 二级菜单(类似版)	
	$(".nav-left li").mouseenter(function(){
		$(this).children('div').css("display","block");
	}).mouseleave(function(){
		$(this).children('div').css("display","none");
	})
	
	
		
	/*head-b   鼠标移入出现  微信   和    phone*/
	$(".a-phone").mouseenter(function(){
//		alert();
		$(this).children().children().eq(1).css("display","block");
	}).mouseleave(function(){
		$(this).children().children().eq(1).css("display","none");
	})
	$(".a-wxin").mouseenter(function(){
//		alert();
		$(this).children().children().eq(1).css("display","block");
	}).mouseleave(function(){
		$(this).children().children().eq(1).css("display","none");
	})
	
	
	/*鼠标移入出现透明层(今日热点)*/
	$divs = $(".over");
	$divs.each(function(i,v){
		$(v).hover(function(){
			$(this).find("span").stop().animate({'top':265},400);
		},function(){
			$(this).find("span").stop().animate({'top':295},400);
		})
	})
	 
//	/*鼠标移入出现透明层(本周热卖)*/	
	$(".enter").mouseenter(function(){
		//$(this).find("span").css("top","265px")
		$(this).find("span").stop().animate({'top':265},400);
	}).mouseleave(function(){
		$(this).find("span").stop().animate({'top':295},400);
		
	})
	
	/*轮播图*/
	//定义计时器
	var timer = setInterval(autoPlay,2000);
	// 定义当前下标
	var index = 0;
	function autoPlay(){
		index++;
		if(index == 4){
			$(".img-list").css({"left":0});
			index = 1;
		}
		// 下标

		$(".banner-nav-list li").eq(index == 3 ? 0 : index).addClass("avtive").siblings().removeClass('avtive');
		$(".img-list").animate({"left": -index*1263},1000)
	}
	// 移入移出
	$(".banner").mouseenter(function(){ 
//		alert("移入");	
		$(".banner-nav-list").animate({"opacity":1},200);
//		$("#arr .btn_l").css({"left":0});
//		$("#arr .btn_r").css({"right":0});
		$("#arr .btn_l").animate({"left":0},200);
		$("#arr .btn_r").animate({"right":0},200);
		
		clearInterval(timer);
	})
	$(".banner").mouseleave(function(){
//		alert("移出");
		$(".banner-nav-list").animate({"opacity":0},200);
		timer = setInterval(autoPlay,2000);
//		$("#arr .btn_l").css({"left":"-60px"});
//		$("#arr .btn_r").css({"right":"-60px"});
		$("#arr .btn_l").animate({"left":"-60px"},200);
		$("#arr .btn_r").animate({"right":"-60px"},200);
		
	})
	
	var btnList = $(".img-list li");
//	console.log(btnList.length);
	//  按钮添加点击事件
	$("#arr .btn_l").click(function(){
		for( var i=0; i < btnList.length; i++ ){
   			$(".banner-nav-list li")[i].className="";
   		}
		
		index--;
		if(index < 0){
			index = 0;
		}
		$(".banner-nav-list li")[index].className = 'active';
		$(".img-list").css({"left":-index * 1263});
		
	})
	
	$("#arr .btn_r").click(function(){
//		for( var i=0; i < btnList.length; i++ ){
// 			$(".banner-nav-list")[i].className="";
// 		}
		index++;
		if(index == btnList.length){
			index = btnList.length - 1 ;
		}
		$(".img-list").css({"left":-index * 1263});
		
//		$('.img-list').css("left":-index * 1263);
//		$(".banner-nav-list")[index].className = 'active';'
	})
	
	
	
	
	
//	for( let i=0; i < btnList.length ;i++){
// 		btnList[i].onmouseover=function(){
// 			index=i-1;
// 			autoPlay();
// 		}
// 	}
	
	
	
	
	/*foot底部   鼠标移入出现微信的标志*/
	$('.wx').mouseenter(function(){
		$(this).next().css("display","block");
	}).mouseleave(function(){
		$(this).next().css("display","none");
	})
	
	/*回到顶部*/
	$(".to-top").click(function(){
		$('html,body').animate({scrollTop: '0px'}, 800);
	})
	
})






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
	
	


	/*鼠标移入出现透明层(本周热卖)*/	
	$(".enter").mouseenter(function(){
		//$(this).find("span").css("top","265px")
		$(this).find("span").stop().animate({'top':265},400);
	}).mouseleave(function(){
		$(this).find("span").stop().animate({'top':295},400);
		
	})
	
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




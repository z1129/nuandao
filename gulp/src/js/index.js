$(function(){
	
		
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
	
	/*foot底部   鼠标移入出现微信的标志*/
	$('.wx').mouseenter(function(){
		$(this).next().css("display","block");
	}).mouseleave(function(){
		$(this).next().css("display","none");
	})
	
	
	
	
})



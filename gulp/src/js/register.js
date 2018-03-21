$(function(){  
    $('.a-more').click(function(){//点击a标签  
        if($('.more').is(':hidden')){//如果当前隐藏  
        $('.more').show();//那么就显示div  
        }else{//否则  
        $('.more').hide();//就隐藏div  
        }  
    });
    
    $(".m-right>.tabs>li>a").click(function(){
    	var id = $(this).data("id");
    	$(".m-right>.tabs>li>a").css("color","#ababab");
    	$(this).css("color","#303030");
    	if(id == "dl"){
    		$(".right-2>.zhuce").val("登录暖岛");
    	}else if(id == "zc"){
    		$(".right-2>.zhuce").val("注册暖岛");
    	}
	});
})
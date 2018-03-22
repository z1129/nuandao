$(function(){  
    $('.a-more').click(function(){//点击a标签  
        if($('.more').is(':hidden')){//如果当前隐藏  
        $('.more').show();//那么就显示div  
        }else{//否则  
        $('.more').hide();//就隐藏div  
        }  
    });
//  
//  $(".m-right>.tabs>li>a").click(function(){
//  	var id = $(this).data("id");
//  	$(".m-right>.tabs>li>a").css("color","#ababab");
//  	$(this).css("color","#303030");
//  	if(id == "dl"){
//  		$(".right-2>.zhuce").val("登录暖岛");
//  	}else if(id == "zc"){
//  		$(".right-2>.zhuce").val("注册暖岛");
//  	}
//	});


	$("#zc").click(function(){
		window.location = "register.html";
	})
	
	$("#dl").click(function(){
		window.location = "login.html";
	})
	
	$(".zhuce").click(function(){
//		alert();
		// 获取用户名和密码
		var usn = $(".em").val();
		var pwd = $(".pwd").val();
//		console.log(usn);
//		console.log(pwd);
		// 获取cookie，判断是不是和cookie中的一致\n
		var users = $.cookie("registerUsers") ? $.cookie("registerUsers") : "";
		// 将字符串cookie、转换为对象
		user = convertStrToObj(users);
//		{
//			"loginedUsers":{
//				"" : ""
//			}
//		}
		if(usn in user){
			if(user[usn] == pwd){
				$.cookie("loginedUsers",usn,{expires:7,path:"/"});
				window.location = "../index.html";
			}else{
				alert("账号和密码不匹配，请确认后重试！");
			}
		}else{
			alert("账号未注册");
		}
	})
	
	
	// 将字符串转换为对象
	function convertStrToObj(str){
		if(!str){
			return {};
		}else{
			return JSON.parse(str);
		}
	}
	
	
})
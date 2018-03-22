$(function(){  
    $('.a-more').click(function(){//点击a标签  
        if($('.more').is(':hidden')){//如果当前隐藏  
        $('.more').show();//那么就显示div  
        }else{//否则  
        $('.more').hide();//就隐藏div  
        }  
    });
    
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
	
	$("#dl").click(function(){
		window.location = "login.html";
	})
	
	$("#zc").click(function(){
		window.location = "register.html";
	})
	
	
	
		var arr = [false,false];
		var pwd = "";
		var usn = "";
		$(".em").blur(function(){
			var usn = $(".em").val();
//			alert();
			if(!usn){
			 	alert("输入不能为空！");
			 	return;
			 }else{
			 	var reg = /^[A-Za-z0-9]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
			 	if(!reg.test(usn)){
			 		alert("请输入正确的邮件地址");
			 		arr[0] = false;
			 	}else{
//			 		alert("输入正确");
			 		arr[0] = true;
			 	}
			 	console.log(arr[0]);
			}
		 })


		$(".pwd").blur(function(){

			var pwd = $(".pwd").val();
//			alert();
//			console.log(pwd);
			if(!pwd){
				//console.log(pwd);
			 	alert("输入不能为空！");
			 	return;
			 }else{
			 	var reg2 = /^\w{6,12}$/;
			 	if(!reg2.test(pwd)){
//			 		alert("请输入6-12位字母、数字、下划线");
			 		arr[1] = false;
			 	}else{
//			 		alert("输入正确");
			 		arr[1] = true;
			 	}
			 	console.log(arr[1]);
			}
		 })
		
		
		 
	$(".zhuce").click(function(){
//		console.log(arr);
		let pwd = $(".pwd").val();
		let usn = $(".em").val();
		console.log(pwd,usn);
		if($.inArray(false,arr) == -1){
			alert("注册成功！");
			// 获取cookie
			var users = $.cookie('registerUsers') ? $.cookie(".registerUsers") : "";
			users = convertStrToObj(users);
			if(usn in users){
				alert("用户名已注册！");
			}else{
				users[usn] = pwd;
				// 将对象转换成字符串
				userStr = JSON.stringify(users);
				// 将信息存入cookie
//				console.log(usn);
//				console.log(pwd);
				$.cookie("registerUsers",userStr,{expires:7,path:"/"});
			}
			
		}else{
			alert("注册失败！账号或密码错误！")
		}
		console.log($.cookie());
	})
	
	//将字符串转为对象
	function convertStrToObj(str){
		if(!str){
			return {};
		}
		return JSON.parse(str);
	}

})
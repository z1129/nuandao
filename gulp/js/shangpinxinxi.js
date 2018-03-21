///*商品列表*/
$(function(){
	
	$.getJSON("../gulp/src/js/goods.json",function(data){
		let div;
//		console.log(data);
		$(data).each(function(index,value){
			div = `<div class="thing no enter">
						<a href="#">
							<img src="${value.src}"/>
						</a>
						<ul>
							<li class="title">
								<a href="/product/174826" target="_blank" title="MiniCyber△黑色X戒指">MiniCyber△黑色X戒指
								</a>
							</li>
							<li class="price">
									<span class="price-new ">￥${value.oldprice}</span>
									<i class="price-diff"></i>
									<del class="price-old">￥${value.newprice}</del>
							</li>
							<li class="like like63" id="like174826" title="喜欢" pdid="174826" pdname="${value.depict}" pdstatus="1" likeloading="0">${value.like}
								<i></i>
							</li>
						</ul>
					</div>`;
			$(".many").append(div);
	
//			console.log(index.left);
//			if(index === 3 || index ===7){
//				$(this).addClass("no");
//				console.log($(this));
//				console.log($(this).className);
//			}
//			console.log();
			
		})
		
		
		
		
		
	})
})
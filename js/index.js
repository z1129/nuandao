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
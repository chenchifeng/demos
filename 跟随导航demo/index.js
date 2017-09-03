$(function(){
	var nav=$(".nav");    				//得到导航对象
	var win=$(window); 					//得到窗口对象
	var sc=$(document);					//得到document文档对象。
	win.scroll(function(){  			//窗口對象使用scroll方法
		if(sc.scrollTop()>=100){		//當滾動大於100時
	    	nav.addClass("fixednav"); 	//添加類
	  	}else{							//否則
	  		$(".fixednav").fadeOut();
			nav.removeClass("fixednav");//移除類
	  	}
	})  
})
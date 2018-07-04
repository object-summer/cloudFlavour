
//jubao();
$(document).ready(function(){
	/*点击显示登录注册*/
	$("#gd_userpic").click(function(){
		$("#gd_user_details").fadeToggle(400);
	});
	/*鼠标移动到nav上显示相对应的二级菜单*/
	$('.header_nav').on('click',function(){
		$('.second_menu').slideToggle(500);
	})
	/*鼠标经过谁，谁就展开*/
	/*sociall的草稿按钮，打开输入框*/
	$('.container_left_header_r').on('click',function(){
		$('.socialInput').toggle(400);
	});

	/*点击登录，弹出登录界面*/
	$('#user_login').on('click',function(){
		$('.gd_login_resige').css('display','block');
		$('.mask').css('display','block');
		$('.gd_register').css('display','none');
		$('.gd_login').css('display','block');
		
		
		$('.login').addClass('login_on');
		$('.resige').removeClass('login_on');
	})
	/*点击注册，弹出注册界面*/
	$('#user_resteige').on('click',function(){
		$('.gd_login_resige').css('display','block');
		$('.mask').css('display','block');
		$('.gd_register').css('display','block');
		$('.gd_login').css('display','none');
		
		
		$('.login').removeClass('login_on');
		$('.resige').addClass('login_on');
	})
	/*点击注册*/
	/*点击关闭按钮，登录注册按钮都关闭*/
	$('.login_close').on('click',function(){
		$('.gd_login_resige').css('display','none');
		$('.mask').css('display','none');
	})

 	/*切换注册登录内容*/
 	$('#login').on('click',function(){
 		$('.gd_login').css('display','block');
 		$('.gd_register').css('display','none')
 		
 		$('.login').addClass('login_on');
		$('.resige').removeClass('login_on');
 		
 	})
 	$('#resige').on('click',function(){
 		$('.gd_register').css('display','block');
 		$('.gd_login').css('display','none');
 		
 		$('.login').removeClass('login_on');
		$('.resige').addClass('login_on');
 	})
  /*返回顶部*/
	function scroll() {
	    if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
	    {
	        return {
	            left: window.pageXOffset,//设置或返回当前页面相对于窗口显示区左上角的 X 位置
	            top: window.pageYOffset
	        }
	    }
	    else if(document.compatMode == "CSS1Compat")  // 声明的了 DTD
	    // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
	    {
	        return {
	            left: document.documentElement.scrollLeft,
	            top: document.documentElement.scrollTop
	        }
	    }
	    return { //  剩下的肯定是怪异模式的
	        left: document.body.scrollLeft,
	        top: document.body.scrollTop
	    }
	}
	//scroll（）函数结束，准备被调用
	var backtop = $("#scroll_top");
	window.onscroll = function(){
		scroll().top > 0 ? $('#scroll_top').show() :$('#scroll_top').hide()/*show(backtop	):hide(backtop)*/;//大于0就显示，否则就不显示
		leader = scroll().top;//把卷去的头部赋给起始位置
	}
	var leader = 0,target = 0;//leader起始位置 ，target目标位置
	var timer = null;
	$('#scroll_top').on("click" , function(){
		clearInterval(timer);
		timer = setInterval(function(){
			/*缓冲器*/
			leader = leader + (target - leader)/10;
			window.scrollTo(0,leader);//返回网页的某个位置 window.scrollTo()
			if(leader == target){
				clearInterval(timer);
			}
		},30)
	})
	
	/*鼠标悬停在返回按钮2秒时，展开左侧的菜单*/
	var timeoutobj = null;
	$('#scroll_top').hover(function(){
  		timer = setTimeout(function(){
        //做你想做的事
        $("#scroll_top_nav").fadeIn(100)
    },1000);
	},function(){
   		//这里去clear
   		clearTimeout(timer);//如果没停留3秒,直接会被clear掉,如果停留超过3秒,也一样会被clear,但是你要做的方法已经被执行了
  		$("#scroll_top_nav").fadeOut(100);
	});
	/*活动和视频的tab展示卡*/
	/*jquery重写*/
	$('#gd_video_tab li').on('click',function(){
		var index=$(this).index();  //获取当前a标签的个数  
		$(this).parent().next().find(".box").hide().eq(index).show(); //返回上一层，在下面查找class名为box隐藏，然后选中的显示  
	  	$(this).addClass("orangecolor").siblings().removeClass("orangecolor"); //a标签显示，同辈元素隐藏  
	  	$('#gd_video_list > div').hide().eq($('#gd_video_tab > li').index(this)).show();
	})
	$('#gd_active_tab li').on('click',function(){
		var index=$(this).index();  //获取当前a标签的个数  
		$(this).parent().next().find(".box").hide().eq(index).show(); //返回上一层，在下面查找class名为box隐藏，然后选中的显示  
	  	$(this).addClass("orangecolor").siblings().removeClass("orangecolor"); //a标签显示，同辈元素隐藏  
	  	$('#gd_active_list >ul').hide().eq($('#gd_active_tab > li').index(this)).show();
	})
	/*  菜品展示（tab选项卡）*/
	$('#food_display_title >li').on('click',function(){
		$(this).addClass('tab_bgcblue').siblings().removeClass('tab_bgcblue');
//			$('#food_display_title >li').eq(this.index()).addClass('dis').siblings().addClass('dis');
		$('#food_display_conts >li ').hide().eq($('#food_display_title >li ').index(this)).show();
	})
	
	
	/*banner*/
		$(function(){ //页面加载完毕才执行

            //=========设置参数==========
            //图片统一高度：
            var images_height = '560px';
            //图片路径/链接(数组形式):
            var images_url = [
                'images/index/1.jpg',
                'images/index/2.jpg',
                'images/index/3.jpg'
            ];
            var images_count = images_url.length;
            //console.log(images_count);

            //创建节点
            //图片列表节点
            for(var j=0;j<images_count+1;j++){
                $('.banner ul').append('<li></li>')
            }
            //轮播圆点按钮节点
            for(var j=0;j<images_count;j++){
                if(j==0){
                    $('.banner ol').append('<li class="current"></li>')
                }else{
                    $('.banner ol').append('<li></li>')
                }
            }

            //载入图片
            $('.banner ul li').css('background-image','url('+images_url[0]+')');
            $.each(images_url,function(key,value){
                $('.banner ul li').eq(key).css('background-image','url('+value+')');
            });

            $('.banner').css('height',images_height);

            $('.banner ul').css('width',(images_count+1)*100+'%');

            $('.banner ol').css('width',images_count*20+'px');
            $('.banner ol').css('margin-left',-images_count*20*0.5-10+'px');

            //=========================

            var num = 0;
            //获取窗口宽度
            var window_width = $(window).width();
            $(window).resize(function(){
                window_width = $(window).width();
                $('.banner ul li').css({width:window_width});
                clearInterval(timer);
                nextPlay();
                timer = setInterval(nextPlay,4000);
            });
            //console.log(window_width);
            $('.banner ul li').width(window_width);
            //轮播圆点
            $('.banner ol li').mouseover(function(){//用hover的话会有两个事件(鼠标进入和离开)
                $(this).addClass('current').siblings().removeClass('current');
                //第一张图： 0 * window_width
                //第二张图： 1 * window_width
                //第三张图： 2 * window_width
                //获取当前编号
                var i = $(this).index();
                //console.log(i);
                $('.banner ul').stop().animate({left:-i*window_width},500);
                num = i;
            });
            //自动播放
            var timer = null;
            function prevPlay(){
                num--;
                if(num<0){
                    //悄悄把图片跳到最后一张图(复制页,与第一张图相同),然后做出图片播放动画，left参数是定位而不是移动的长度
                    $('.banner ul').css({left:-window_width*images_count}).stop().animate({left:-window_width*(images_count-1)},500);
                    num=images_count-1;
                }else{
                    //console.log(num);
                    $('.banner ul').stop().animate({left:-num*window_width},500);
                }
                if(num==images_count-1){
                    $('.banner ol li').eq(images_count-1).addClass('current').siblings().removeClass('current');
                }else{
                    $('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');

                }
            }
            function nextPlay(){
                num++;
                if(num>images_count){
                    //播放到最后一张(复制页)后,悄悄地把图片跳到第一张,因为和第一张相同,所以难以发觉,
                    $('.banner ul').css({left:0}).stop().animate({left:-window_width},500);
                    //css({left:0})是直接悄悄改变位置，animate({left:-window_width},500)是做出移动动画
                    //随后要把指针指向第二张图片,表示已经播放至第二张了。
                    num=1;
                }else{
                    //在最后面加入一张和第一张相同的图片，如果播放到最后一张，继续往下播，悄悄回到第一张(肉眼看不见)，从第一张播放到第二张
                    //console.log(num);
                    $('.banner ul').stop().animate({left:-num*window_width},500);
                }
                if(num==images_count){
                    $('.banner ol li').eq(0).addClass('current').siblings().removeClass('current');
                }else{
                    $('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');

                }
            }
            timer = setInterval(nextPlay,2000);
            //鼠标经过banner，停止定时器,离开则继续播放
            $('.banner').mouseenter(function(){
                clearInterval(timer);
                //左右箭头显示(淡入)
                $('.banner i').fadeIn();
            }).mouseleave(function(){
                timer = setInterval(nextPlay,2000);
                //左右箭头隐藏(淡出)
                $('.banner i').fadeOut();
            });
            //播放下一张
            $('.banner .right').click(function(){
                nextPlay();
            });
            //返回上一张
            $('.banner .left').click(function(){
                prevPlay();
            });
        });
	/*这是social.html的tab*/
	$('#zj_content_tab > li').on('click',function(){
		$(this).addClass('tab_bgcblue').siblings().removeClass('tab_bgcblue');
		$('#zj_tab_ul > li').hide().eq($('.zj_content_top >ul >li').index(this)).show();
	})
	/*zhanji.html的页面tab*/
	$('.zj_content_top > ul > li').on('click',function(){
		$(this).addClass('tab_bgcblue').siblings().removeClass('tab_bgcblue');
		$('#zj_tab_ul > li').hide().eq($('.zj_content_top > ul > li').index(this)).show();
	});
	/*这是food-datial.html*/
	/*点击相关推荐*/
	$('.left_dis').on('click',function(){
		$('.left_dis').hide();
		$('.left_close').show();
	})
	/*if($('.left_close').attr("display") == "block"){
		$('.left_close').on('click',function(){
			$('.left_dis').hide();
		})
	}*/
	
	/*这是搜索页面的评论展示*/
	$('.feed_action_info  .S_line1').on('click',function(){
		$('.Comments').toggle();
	})
/*ajax
 * 仿百度搜索
 * */
/*$('#gd_Search').keyup(function(){
	var search_cont = $('#gd_Search').val();
	var url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+search_cont;
	querySUG(url);
});
function querySUG(url){
	$('.search_info').text('');
	$.ajax({
		type:'get',
		url: url,
		asyns:true,
		dataType:'jsonp',
		jsonp: "cb",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
		jsonpCallback:"callback",//自定义的jsonp回调函数名称
		success:function(data){
			var tag = '<ul>';
				for(var i=0;i<data.s.length-4;i++){
					tag += '<li>'+data.s[i]+'</li>';
				}
				tag += '</ul>';
				$('.search_info').html(tag).show();
				$('.search_info').find('li').hover(function(){
					$(this).css('background','#555');
				},function(){
					$(this).css('background','#D89168');
				});
		},
		error:function(){
			console.log('错了')
		}
	})
}

*/

});/*这是结束标志，千万别删*/

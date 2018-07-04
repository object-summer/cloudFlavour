/*
 *美食情报局版块的轮播图
 * 
 * */
function ztlistMoveleft(){
	$("#ztlist_style1_item_ww").animate({"margin-left":"0px"},600,function(){
		$("#ztlist_style1_item_ww .ztlist_style1_item_w1").last().prependTo($("#ztlist_style1_item_ww"));
		$("#ztlist_style1_item_ww").css("margin-left","-988px");
		$("#index_cd_leftarrow_mask").hide();
		index_cd_cur = index_cd_cur - 1;
		if(index_cd_cur == -1){
			index_cd_cur = 2;
		}
		setztlistCur();
	});
}
function ztlistMoveright(){
	$("#ztlist_style1_item_ww").animate({"margin-left":"-1976px"},600,function(){
		$("#ztlist_style1_item_ww .ztlist_style1_item_w1").first().appendTo($("#ztlist_style1_item_ww"));
		$("#ztlist_style1_item_ww").css("margin-left","-988px");
		$("#index_cd_rightarrow_mask").hide();
		index_cd_cur = index_cd_cur + 1;
		if(index_cd_cur == 3){
			index_cd_cur = 0;
		}
		setztlistCur();
	});
	
}
function setztlistCur(){
	$("#ztlist_cur span").removeClass("current");
	$("#ztlist_cur span").eq(parseInt(index_cd_cur)).addClass("current");
}

var index_cd_move = "";
var index_cd_cur = 1;

$(function(){
	if($('#ztlist_style1_item_w').length > 0){
	index_cd_move = setInterval(function(){ztlistMoveright();},5000);
	$("#index_cd_leftarrow").click(function(){
		$("#index_cd_leftarrow_mask").show();
		ztlistMoveleft();
	});
	$("#index_cd_rightarrow").click(function(){
		$("#index_cd_rightarrow_mask").show();
		ztlistMoveright();
	});
	$("#index_cd_leftarrow").mouseenter(function(){
		clearInterval(index_cd_move);
	});
	$("#index_cd_leftarrow").mouseleave(function(){
		index_cd_move = setInterval(function(){ztlistMoveright();},5000);
	});
	$("#index_cd_rightarrow").mouseenter(function(){
		clearInterval(index_cd_move);
	});
	$("#index_cd_rightarrow").mouseleave(function(){
		index_cd_move = setInterval(function(){ztlistMoveright();},5000);
	});
	$("#ztlist_style1_item_w").mouseenter(function(){
		clearInterval(index_cd_move);
	});
	$("#ztlist_style1_item_w").mouseleave(function(){
		index_cd_move = setInterval(function(){ztlistMoveright();},5000);
	});
}
	/*城市的选择*/
	$('.select_city').on('click',function(){
		$('.all_city').toggle();
	});
//	$('#city370000').show()
	function changeCity(obj){
		/*首先做一个函数根据id号码来达到选中省和城市的目的
		 * obj就是id号码
		 * 获取省会的id号码，打开相应城市（id为加上cityxxxx）
		 * */
		$('#'+obj).on('click',function(){
			var cityId = parseInt(obj);
			var city = 'city';
			var h = city + cityId;
			$('#'+h).toggle();
		})
	}
	/*var arry = ['450000','350000']
	for(var i in arry){
//		changeCity(arry[this])
	var str =arry[this];
	changeCity(str)
	lis[i].onclick = fn
	}*/
//	changeCity('450000','350000');
	$('.pro_city3_data a').on('click',function(){
			var cityId = parseInt($(this).attr("id"));
			var city = 'city';
			var h = city + cityId;
			$(this).siblings('.limiter').find('#'+h).toggle().siblings().hide();
			
			
			var that = this;
			console.log(this)
			console.log(that)
			for(var j in $(that).siblings('.limiter').find('#'+h).find('.pro_body_bg > span')){
				$(that).siblings('.limiter').find('#'+h).find('.pro_body_bg > span').eq(j).on('click',function(){
					for(var i in $(that).siblings('.limiter').find('#'+h).find('.pro_body_bg > span')){
						var index=$(that).index();  //获取当前a标签的个数 
						console.log(index)
						var tip =  $(that).siblings('.limiter').find('#'+h).find('.pro_body_bg > span').eq(index).html();	
						$('.select_city > a').text(tip)
					}
				})
			}
			
			
		})
})

$(document).ready(function(){
	/*home.html的tab选项卡*/
		$('.tb_tab ul li').on('click',function(){
			var index = $(this).index();
			$(this).addClass('tab_link').siblings().removeClass('tab_link');
			$('.home_mian > div').hide().eq($('.tb_tab ul li').index(this)).show();
		})
})








window.onload = function(){
	zj_lunbotu('cont','btn','imm','jiao','left','right');
}
/*box:cont盒子（最外层盒子）
 * btn_nums：数字盒子12345
 * lis：每个主体的大盒子
 * btn_pn:两个左右按钮
 * btn_prev：左侧按钮
 * btn_next：右侧侧按钮
 * */
function  zj_lunbotu(box,btn_nums,lis,btn_pn,btn_prve,btn_next){
	var tt=null;
	var kkk;
	var n=0;
	var timer=0;
	var timer01=0;
	var jiao=document.getElementById(btn_pn);
	var left=document.getElementById(btn_prve);
	var right=document.getElementById(btn_next);
	var body=document.getElementById(box);
	var li=document.getElementById(btn_nums).getElementsByTagName("li");
	kkk=document.getElementById(lis).getElementsByTagName("a");
	
	
	/*获取img盒子的个数kkk.lenght*/
	for(var i=0;i<kkk.length;i++){
		if(i!=0){
			kkk[i].style.opacity=0;
		}
	}
	function autoplay(){
		n=n>=(kkk.length-1)?0:++n;
		var li=document.getElementById(btn_nums).getElementsByTagName("li");
		li[n].onmouseover()
	};
	function leftf(start,end,ele){ 
		var tt=setInterval(function (){
			start+=10;
			ele.style.left=start+"px";
			if(start==end){
				clearInterval(tt)
			}
		},10)
	}
	for(var j=0;j<li.length;j++){
			li[j].onmouseover=function(){
				var that=this;
				tt=setTimeout(function(){ 
					var index=that.innerHTML-1;
					n=index;
					if(index <kkk.length){
						for(var o=0;o<li.length;o++){
							li[o].className="";
							kkk[o].style.opacity=0;
							kkk[o].style.zIndex=9998;
						}
						that.className="ons";
						kkk[index].style.opacity=1;
						kkk[index].style.zIndex=9999;
						kkk[index].style.transition="opacity 0.8s";
						leftf(-300,0,kkk[index]);
					}
				},10);
			};
		li[j].onmouseout=function(){
			clearTimeout(tt)
			}
		}
//	timer = setInterval(autoplay(),3000);
	
	left.onclick=function(){
		if(n>0){
			n--
		}else if(n==0){
			n=kkk.length-1;
		}
//			alert("22")
		var li=document.getElementById(btn_nums).getElementsByTagName("li");
		li[n].onmouseover();
		
	};
	right.onclick=function(){
		n=n>=(kkk.length-1)?0:++n;
		var li=document.getElementById(btn_nums).getElementsByTagName("li");
		li[n].onmouseover();
		
	};
	 timer01=setInterval(function(){right.onclick()},3000);
	body.onmouseout=function(){
		 timer01=setInterval(function(){
            right.onclick()
        },3000);
	};
	body.onmouseover = function(){
		clearInterval(timer01);
		clearInterval(timer);
	};
	
	
}	
	

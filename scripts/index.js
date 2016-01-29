window.onload=function(){
// console.log(1);
var ruqi=document.getElementsByClassName('ruqi'),
 	hui=document.getElementsByClassName('hui'),
 	xiangz=document.getElementById('xiangz'),
 	xiangy=document.getElementById('xiangy');

var	kaiguan=true,
	timerId;
var currentRuqi=ruqi[0],
	currentHui=hui[0];
var fn=(function(){
	var i=1;
	return function(){
		currentRuqi.setAttribute('class','ruqi');
		ruqi[i].setAttribute('class','ruqi show');
		currentRuqi=ruqi[i];

		currentHui.setAttribute('class','hui');
		hui[i].setAttribute('class','hui kong');
		currentHui=hui[i];

		i++;
		if(i==5){i=0;}
	};
})();
	timerId=setInterval(fn,1000);
	for(var i=0;i<ruqi.length;i++){
		ruqi[i].onmouseover=function(){
			clearInterval(timerId);
		};
		ruqi[i].onmouseout=function(){
			if(kaiguan){
				clearInterval(timerId);
				timerId=setInterval(fn,1000);	
			}
		};
	}
	for(var i=0;i<hui.length;i++){
		hui[i].index=i;
		hui[i].onclick=function(){
			clearInterval(timerId);
			kaiguan=false;
			currentHui.setAttribute('class','hui');
			this.setAttribute('class','hui kong');
			currentHui=this;

			currentRuqi.setAttribute('class','ruqi');
			ruqi[this.index].setAttribute('class','ruqi show');
			currentRuqi=ruqi[this.index];
		};
	}
	xiangy.onclick=function(){
		clearInterval(timerId);
		kaiguan=false;
		currentRuqi.setAttribute('class','ruqi');
		var next=(currentRuqi.nextElementSibling)?currentRuqi.nextElementSibling:ruqi[0];
		next.setAttribute('class','ruqi show');
		currentRuqi=next;
		

		currentHui.setAttribute('class','hui');
		var nexth=(currentHui.nextElementSibling)?currentHui.nextElementSibling:hui[0];
		nexth.setAttribute('class','hui kong');
		currentHui=nexth;

	};
	xiangz.onclick=function(){
		clearInterval(timerId);
		kaiguan=false;
		currentRuqi.setAttribute('class','ruqi');
		var pr=(currentRuqi.previousElementSibling)?currentRuqi.previousElementSibling:ruqi[ruqi.length-1];
		pr.setAttribute('class','ruqi show');
		currentRuqi=pr;

		currentHui.setAttribute('class','hui');
		var prh=(currentHui.previousElementSibling)?currentHui.previousElementSibling:hui[hui.length-1];
		prh.setAttribute('class','hui kong');
		currentHui=prh;	

	};

var zhuzi=function(e){
	e.preventDefault();
};
xiangy.onmousedown=zhuzi;
xiangz.onmousedown=zhuzi;




//==============闭包的小练习
// xiangy.onclick=function(){
// 	var i=0;
// 	return function(){
// 		if(i==3)return;
// 		console.log(1);
// 		i++;
// 	}
// }();
//===================		
	



// for(var i=0;i<hui.length;i++){
// 	hui[i].onmouseover=function(){
// 		this.style.background='white';
// 	};
// 	hui[i].onmouseout=function(){
// 		this.style.background='#757575';
// 	};
// }
// var index=0;
// var el=ruqi[0];
// var dian=hui[0];
// dian.style.background='white';
// el.style.display='block';
// for(var i=0;i<ruqi.length;i++){
// 	ruqi[i].onmouseover=function(){
// 		clearInterval(timerId);
// 	};
// 	ruqi[i].onmouseout=function(){
// 		if(kg){clearInterval(timerId);}else{timerId=setInterval(fn,1000);}
		
// 	};
// }

// //轮播
// var fn=function(){
// 	dian.style.background='#757575';
// 	el.style.display='none';
// 	index+=1;
// 	if(index==5){index=0;}
// 	hui[index].style.background='white';
// 	dian=hui[index];
	
// 	ruqi[index].style.display='block';
// 	el=ruqi[index];
	
// };


// //小圆点
// var timerId=setInterval(fn,1000);
// for(var i=0;i<hui.length;i++){
// 	hui[i].index=i;
// 	hui[i].onclick=function(){
// 		dian.style.background='#757575';
// 		this.style.background='white';
// 		dian=this;
// 		el.style.display='none';
		
// 		ruqi[this.index].style.display='block';
// 		el=ruqi[this.index];

// 		clearInterval(timerId);
// 	};
// }



// xiangy.onclick=function(){
	
// 	kg=true;
	
// 	dian.style.background='#757575';
// 	el.style.display='none';
// 	index++;
// 	if(index==5){index=0;}
// 	hui[index].style.background='white';
// 	dian=hui[index];
	
// 	ruqi[index].style.display='block';
// 	el=ruqi[index];
	

// 	clearInterval(timerId);
	
// };



// xiangz.onclick=function(){
// 	kg=true;
// 	dian.style.background='#757575';
// 	el.style.display='none';
// 	index--;
// 	if(index==-1){index=4;}
// 	hui[index].style.background='white';
// 	dian=hui[index];
	
// 	ruqi[index].style.display='block';
// 	el=ruqi[index];
// 	clearInterval(timerId);

// };
// var zhuzi=function(e){
// 	e.preventDefault();
// };
// xiangy.onmousedown=zhuzi;
// xiangz.onmousedown=zhuzi;



// for(var i=0;i<1000;i++){
// 	console.log(i,String.fromCharCode(i));
// }


};//最后
function dex_SimpleAnimation(){
	dex_SimpleAnimation.AND="and";
	var instance=this;
	var orginalStyle;
	var time=-1;
	var t_enable=false,resetable=true;
	var ele;
	var t_id;
	var styles=[],lengths=[],durings=[],froms=[],begins=[],rates=[];
	var debug=document.getElementById("hd");
	var onfinish=new Function(),onrun=new Function(),onstop=new Function();
	var addPro=function(from,length,during,begin,rate){
		lengths.push(length);
		durings.push((begin===null?0:begin)+during);
		froms.push(from);
		if(begin=="and")
			begins.push(dex_Checker.checkForLog(durings[begins.length-1]));
		else begins.push(begin===null?0:begin);
		rates.push(rate===null?new dex_Rate(1):rate);
	};
	var finish_=function(func){
		t_enable=false;
		time=-1;
		instance.onFinish();
		if(resetable) ele.style.cssText=orginalStyle;
	}
	var reset_=function(){
		t_enable=false;
		if(resetable) ele.style.cssText=orginalStyle;
	}
	this.onFinish=function(func){
		onfinish=func;
	};
	this.onRun=function(func){
		onrun=func;
	};
	this.reset=function(){
		finish_();
		ele.style.cssText=orginalStyle;
	}
	this.restart=function(){
		if(time==-1) return;
		finish_();
		clearTimeout(t_id);
		instance.startAt(ele.getAttribute("id"));
	};
	this.finish=function(){
		finish_();
		ele=null;
	};
	var loop=function(){
		t_id=window.setTimeout(function(){
			if(t_enable)
				loop();
			else return;
		},1);
			time++;
			onrun(time);
			for(var i=0;i<styles.length;i++){
				debug.innerText=time+"ms"+"   ";
				if(time==begins[i]){
					if(froms[i]!==null)
						switch(styles[i]){
							case "opacity":
								eval("ele.style."+styles[i]+"=froms[i];")
								break;
							case "rotate":
								ele.style.transformOrigin="center";
								ele.style.transform='rotate('+froms[i]+'deg)';
								break;
							default:
								eval("ele.style."+styles[i]+"=froms[i]+\"px\";")
						}
					else
						switch(styles[i]){
							case "width":
								eval("ele.style."+styles[i]+"=ele.offsetWidth+\"px\";");
								break;
							case "height":
								eval("ele.style."+styles[i]+"=ele.offsetHeight+\"px\";");
								break;
							case "marginLeft":
								eval("ele.style."+styles[i]+"=ele.clientLeft+\"px\";");
								break;
							case "marginTop":
								eval("ele.style."+styles[i]+"=ele.clientTop+\"px\";");
								break;
						}
				}
				if(time<durings[i]&&time>=begins[i]){
					for(var j=0;j<rates[i].getCount();j++)
						if(time>durings[i]*(j/rates[i].getCount())&&time-begins[i]<=durings[i]*((j+1)/rates[i].getCount())){
							//console.log(rates[i].getTranslatedValues()[j]);
							switch(styles[i]){
								case "opacity":
									eval("ele.style."+styles[i]+"=(parseFloat(ele.style."+styles[i]+")+"+rates[i].getTranslatedValues()[j]*(lengths[i]/durings[i])+");");
									break;
								case "rotate":
									ele.style.transform='rotate('+(
										parseFloat((ele.style.transform).replace(/[^\d\.]/g,"")
										)+rates[i].getTranslatedValues()[j]*(lengths[i]/durings[i]))+'deg)';
									break;
								default:
									eval("ele.style."+styles[i]+"=(parseFloat(ele.style."+styles[i]+")+"+rates[i].getTranslatedValues()[j]*(lengths[i]/durings[i])+")+\"px\";");
							}
						}
				}
			};
			if(time>=(durings.length==1?durings[0]:Math.max.apply(null,durings))){
				onfinish();
				finish_();
			}
		
	};
	this.addMoveX=function(from,length,during,begin,rate){
		styles.push("marginLeft");
		addPro(from,length,during,begin,rate);
	};
	this.addMoveY=function(from,length,during,begin,rate){
		styles.push("marginTop");
		addPro(from,length,during,begin,rate);
	};
	this.addScaleX=function(from,length,during,begin,rate){
		styles.push("width");
		addPro(from,length,during,begin,rate);
	};
	this.addScaleY=function(from,length,during,begin,rate){
		styles.push("height");
		addPro(from,length,during,begin,rate);
	};
	this.addScale=function(from,length,during,begin,rate){
		instance.addScaleX(from,length,during,begin,rate);
		instance.addScaleY(from,length,during,begin,rate);
	};
	this.addFade=function(from,length,during,begin,rate){
		styles.push("opacity");
		addPro(from,length,during,begin,rate);
	};
	this.addRotate=function(from,length,during,begin,rate){
		styles.push("rotate");
		addPro(from,length,during,begin,rate);
	};
	this.setReducible=function(bool){
		resetable=bool;
	};
	this.getDuration=function(i){
		return durings[i]
	}
	this.startAt=function(id){
		t_enable=true;
		if(time!=-1) return;
		ele=document.getElementById(id);
		orginalStyle=ele.style.cssText;
		loop();
	};
}
function dex_AnimationList(anis){
	var ele;
	var list=anis;
	this.startAt=function(id){
		for (var i=0;i<list.length-1;i++){
			list[i].onFinish(function()
				list[i+1].startAt(id);
			});
		}
		list[0].startAt(id);
	};
	this.add=function(ani){
		list.push(ani);
	};
}
function dex_Effect(id){
	var ele=document.getElementById(id);
	var an=new dex_SimpleAnimation();
	this.makeGlow=function(during){
		var during_=during===null?200:during;
		//an.addFade(1,-1,50,0,null)
		//an.addFade(0,2,50,50,null)
		an.addMoveX(0,400,500,0,new dex_Rate(1))
		
	}
}
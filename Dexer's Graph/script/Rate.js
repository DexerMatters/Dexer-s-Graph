function dex_Rate(){
	var res=[],vals=[];
	var instance=this;
	var total=0,ave=0;
	for(var i=0;i<arguments.length;i++){
		total+=arguments[i];
		vals.push(arguments[i]);
	}
	ave=total/arguments.length;
	for(var i=0;i<arguments.length;i++)
		res.push(arguments[i]/ave);
	this.getCount=function(){
		return res.length;
	};
	this.getTranslatedValues=function(){
		return res;
	}
	this.getPrecent=function(){
		var res_=[];
		for (var i = 0; i < res.length; i++) {
			res_.push(vals[i]/total);
		}
		return res_;
	}
	this.getInceasePresent=function(){
		var val_=0
		var res_=[0];
		for (var i = 0; i < res.length; i++) {
			res_.push(val_+=vals[i]/total);
		}
		return res_;
	}
}
Array.prototype.addRate=function(rate){
	var res=[];
	for(var i=0;i<rate.getCount();i++)
		res.push(this[i]*rate.getTranslatedValues()[i]);
	return res;
}
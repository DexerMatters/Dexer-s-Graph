function dex_Checker(){};
dex_Checker.checkNull=function(object,returns){
	if(object===null)
		return returns;
	return object;
};
dex_Checker.checkForLog=function(object){
	console.log(object);
	return object;
};
dex_Checker.checkUndefinded=function(object,returns){
	if(object===undefined)
		return returns;
	return object;
};
dex_Checker.checkNaN=function(object,returns){
	if(object==NaN)
		return returns;
	return object;
};
dex_Checker.checkInfinity=function(object,returns){
	if(object==Infinity)
		return returns;
	return object;
};
dex_Checker.checkTrue=function(object,returns){
	if(object==true)
		return returns;
	return object;
};
dex_Checker.checkFalse=function(object,returns){
	if(object==false)
		return returns;
	return object;
};
dex_Checker.checkMinusOne=function(object,returns){
	if(object==-1)
		return returns;
	return object;
};
dex_Checker.checkClassForThrow=function(instance,type){
	if(instance instanceof type)
		return instance;
	else throw "Unknown type";
};

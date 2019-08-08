function dex_DelaySet(){
	var codes=[];
	this.add=function(code,delay){
		codes.push([code,delay]);
	}
	this.run=function(){
		var i=-1;
		var x=function(){
			i++;
			codes[i][0]();
			if(i<codes.length)
				setTimeout(x,codes[i][1]);
		}
		x();
	}
}
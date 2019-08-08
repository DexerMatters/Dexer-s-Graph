function dex_HashMap(keyType,contentType){
	var data=[];
	this.put=function(key,content){
		var iscreated=false;
		if(data.length!==0)
			for(var i=0;i<data.length;i++)
				if(data[i][0]==key)
					iscreated=true;
		if(!iscreated){
			if(typeof key==keyType&&typeof content==contentType)
				data.push([key,content]);
			else
				throw "the type of key is unsafe";
		}else throw "the key has been created";
	}
	this.get=function(key){
		for(var i=0;i<data.length;i++)
			if(data[i][0]==key)
				return data[i][1];
		return undefined;
	}
	this.containsKey=function(key){
		for(var i=0;i<data.length;i++)
			if(data[i][0]==key)
				return true;
		return false
	}
	this.containsValue=function(value){
		for(var i=0;i<data.length;i++)
			if(data[i][1]==value)
				return true;
		return false
	}
	this.clear=function(){
		data=[];
	}
	this.remove=function(key){
		for(var i=0;i<data.length;i++)
			if(data[i][0]==key)
				data.remove(data[i])
		return false
	}
	this.size=function(){
		return data.length;
	}
	this.keySet=function(){
		var res=[];
		for(var i=0;i<data.length;i++)
			res.push(data[i][0]);
		return res;
	}
	this.values=function(){
		var res=[];
		for(var i=0;i<data.length;i++)
			res.push(data[i][1]);
		return res;
	}
	this.isEmpty=function(){
		return data==[];
	}
}
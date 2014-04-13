Array.prototype.mapx=function(f,t){
	var b=this.length,a=new Array(b);
	for(var i=0;i<b;i++){
		a[i]=f.call(t,this[i],i,this);
	}
	return a;
}

JSMapx
======

For much more effective array mapping.

Usage
-----
###including
```html
<script src="Mapx.js">
</script>
<!-- or if you like -->
<script>
Array.prototype.mapx=function(f,t){
	var b=this.length,a=new Array(b);
	for(var i=0;i<b;i++){
		a[i]=f.call(t,this[i],i,this);
	}
	return a;
}
</script>
```
###using
```javascript
var a=[1,2,3];
var b=a.mapx(function(val,ind,arr){
  //whatever you like
});
//b should be an array,too
```
Performance
-----------
See performance compared with Array.map and [ES5 map shim](https://github.com/jleonard/ecma5-map-shim "github addr") at
jsPerf: [performance test](http://jsperf.com/custom-map-vs-original-map "test")

Issues
------
> I am waiting for issues.

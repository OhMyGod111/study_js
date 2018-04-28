function getPos(ev){
	// var oEvent = ev || event; // 浏览器兼容处理； 事件由外部传入。
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;  // 浏览器兼容处理、务必加上 scrollTop 防止出问题；
	var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;//加上 scrollLeft;

	return{x:ev.clientX+scrollLeft,y:ev.clientY+scrollTop}; // 返回鼠标在页面顶部的绝对定位（而不是可视区域的位置ev.clientX、ev.clientY）

}
function myAddEventListener(obg,ev, fn){
	
	if(obg.attachEvent){
		obg.attachEvent('on' +ev,fn); // ie onclick
	}else{
		obg.addEventListener(ev,fn, false); //ff chrome click
	} 
}

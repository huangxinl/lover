var oLi = Array.prototype.slice.call(document.getElementsByTagName('li'));
// console.log(oLi)
oLi.forEach(function(ele,index){
	ele.spec = getSpec(ele); 
      ele.addEventListener('mouseenter',function(e){
            addClass(this,e,'in');
      })
      ele.addEventListener('mouseleave',function(e){
      	    addClass(this,e,'out');
      })
})
function getSpec(ele){
	return{
	   w : 	ele.offsetWidth/2,
	   h :  ele.offsetHeight/2	
	}
}
function addClass(ele,e,state){
	var x = e.offsetX - ele.spec.w;
	var y = e.offsetY - ele.spec.h;
	var d = ((Math.round((Math.atan2(y,x)*(180/Math.PI)+ 180)/90))+3)%4;
	// console.log(d)
	var derection
	switch(d){
		case 0: 
	      		 derection = '-top';
				break;
		case 1: 
			     derection = '-right';
				break;
		case 2: 
			     derection = '-bottom';
				break;
		case 3: 
			     derection = '-left';
	}
	// console.log(derection)
	ele.className = state + derection;
}
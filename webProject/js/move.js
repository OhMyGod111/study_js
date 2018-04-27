	function startMove(obj, json,fnEnd){ //fnEnd 链式运动函数 当运动结束时调用；完美运动框架使用 将参数 (attr,iTarget) 合并json数据
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var bStop = true;

			for(var attr in json){

			var cur = 0;

			if (attr == 'opacity') {
					cur = Math.round(parseFloat(getStyle(obj,attr)) * 100);  //获取当前对象的 透明度 四舍五入取值；
				}else{
					cur = parseInt(getStyle(obj,attr));
				}

				var speed = (json[attr] - cur)/6;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

				// 当前的属性  不等于目标的属性
				if (cur != json[attr]) bStop =false;

				if (attr == 'opacity') {
						obj.style.filter = 'alpha(opacity:'+(cur + speed)+')';
						obj.style.opacity = (cur + speed)/100;
					}else{
						obj.style[attr] = cur + speed +'px';
				}
			}

			// 等所有的 属性都到达目标属性时  关闭定时器
			if (bStop) {
				clearInterval(obj.timer);
					if (fnEnd) fnEnd();
			}

			},30);	
	}

	function getStyle(obj, name){

		if (obj.currentStyle) {
			return obj.currentStyle[name];
		}else{
			return getComputedStyle(obj,false)[name];
		}

	}		
// 设置 cookie
function setCookie(name,value,iDay){
  var oDate = new Date();
  oDate.setDate(oDate.getDate() + iDay);
		document.cookie = name + '=' +value + '; expires = ' + oDate; //多次给cookie赋值并不会覆盖cookie的值，而是将值追加到cookie上 
	}

// 获取 cookie
function getCookie(name) {
                //在cookie里的存储格式是a=1; b=2; c=3;……别忘记空格
            var arr = document.cookie.split('; ');//切分的时候切分分号和空格
            for (var i = 0; i < arr.length; i++) {
                var arr2 = arr[i].split('=');//把=切去
                if (arr2[0] == name) {
                    return arr2[1];
                }
            }
               return '';//如果没找到，返回空的字符串
        }

//  移除cookie
function removeCookie(name) {
            setCookie(name, 1, -1);//将日期设为-1天，计算机会认为已经过期将其删除
        }        
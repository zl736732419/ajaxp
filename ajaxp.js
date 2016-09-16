(function($) {

	function createCORSRequest(method, url) {
		var xhr = new XMLHttpRequest();

		if ("withCredentials" in xhr) {
			 xhr.open(method, url, true);    
		}else if(typeof xhr != "undefined") {
			xhr = new XDomainRequest();  
    		xhr.open(method, url);  
		}else {
			xhr = null;
		}

		return xhr;

	}

	var url = "http://localhost:8081/ajaxp/AjaxPServlet"

	var xhr = createCORSRequest('GET', url);  

	if(!xhr) {
		throw new Error('浏览器不支持跨域功能，请更新浏览器');
	}

	xhr.onreadystatechange = function () { // 状态发生变化时，函数被回调
	    if (xhr.readyState === 4) { // 成功完成
	        // 判断响应结果:
	        if (xhr.status === 200) {
	            // 成功，通过responseText拿到响应的文本:
	            console.info(xhr.responseText);
	        } else {
	            // 失败，根据响应码判断失败原因:
	            console.info(xhr.status);
	        }
	    } else {
	        // HTTP请求还在继续...
	    }
	}
	xhr.send();
	
})(jQuery);

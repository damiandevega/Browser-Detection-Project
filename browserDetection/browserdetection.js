window.onload = function() {
	(function(){
		
		var browserName;
		var version;
		var ua = navigator.userAgent;
		var OSName="Unknown OS";
		var logo = document.createElement("img");
		logo.setAttribute("height", "70");
		logo.setAttribute("width", "70");

		
		//feature detections for browser types
		
		// Opera 8.0+
		if ((window.opr && opr.addons) || window.opera || (navigator.userAgent.indexOf(' OPR/') >= 0)) {
			browserName = "Opera";
			logo.src = "./logos/opera_logo.png";			
		}

	
		// Firefox 1.0+
		if (typeof InstallTrigger !== 'undefined') {
			browserName = "Mozilla Firefox";
			logo.src = "./logos/firefox_logo.png";			
		}

	
		// At least Safari 3+: "[object HTMLElementConstructor]"
		if (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || window.safari !== undefined) {
			browserName = "Safari";
			logo.src = "./logos/safari_logo.png";			
		}
	
		
		// Internet Explorer 6-11
		if ((/*@cc_on!@*/false) || (document.documentMode)) {
			browserName = "Internet Explorer";
			logo.src = "./logos/explorer_logo.png";			
		}

			
		// Edge 20+
		if (!(document.documentMode) && window.StyleMedia) {
			browserName = "Microsoft Edge";
			logo.src = "./logos/edge_logo.png";			
		}

			
		// Chrome 1+
		if (window.chrome && window.chrome.webstore) {
			browserName = "Google Chrome";
			logo.src = "./logos/chrome_logo.png";			
		}

		
		// browser specs via user agent for version number
		navigator.browserSpecs = (function(){
			
			var ua = navigator.userAgent, tem, 
			M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
			
			if (/trident/i.test(M[1])){
				tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
				return {name:'IE',version:(tem[1] || '')};
			}
			
			if (M[1] === 'Chrome'){
				tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
				if (tem != null) return {name:tem[1].replace('OPR', 'Opera'),version:tem[2]};
			}
			
			M = M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
			
			if ((tem = ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
			
			return {name:M[0],version:M[1]};
			
		})();
	
		// console.log(navigator.browserSpecs);
		
		// double check browser is correct	
		if (browserName == "Google Chrome" && navigator.browserSpecs.name == "Chrome") { version = navigator.browserSpecs.version };
		if (browserName == "Mozilla Firefox" && navigator.browserSpecs.name == "Firefox") { version = navigator.browserSpecs.version };
		if (browserName == "Internet Explorer" && navigator.browserSpecs.name == "IE") { version = navigator.browserSpecs.version };
		if (browserName == "Microsoft Edge" && navigator.browserSpecs.name == "Edge") { version = navigator.browserSpecs.version };
		if (browserName == "Safari" && navigator.browserSpecs.name == "Safari") { version = navigator.browserSpecs.version };
		if (browserName == "Opera" && navigator.browserSpecs.name == "Opera") { version = navigator.browserSpecs.version };
		
		
		// check for operating system
		if (navigator.appVersion.indexOf("Win") != -1) OSName="Windows";
		if (navigator.appVersion.indexOf("Mac") != -1) OSName="MacOS";
		if (navigator.appVersion.indexOf("X11") != -1) OSName="UNIX";
		if (navigator.appVersion.indexOf("Linux") != -1) OSName="Linux";

		// console.log(navigator.appVersion);
		
		// print result to page
		document.getElementById("logo").appendChild(logo);
		document.getElementById("message").innerText =  browserName + ' ' + version + ' Was Detected On ' + OSName;
		
	})();
}



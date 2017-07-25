document.addEventListener("DOMContentLoaded", function(event) {
		
		var browserName;
		var version;
		var ua = navigator.userAgent;
		var OSName="Unknown OS";
		var logo = document.createElement("img");
		logo.setAttribute("height", "70");
		logo.setAttribute("width", "70");

		
		// browser specs via user agent for version number
		navigator.browserSpecs = (function(){
			
			var ua = navigator.userAgent;
			var tem;
			var aM = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
			
			if (/trident/i.test(aM[1])){
				tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
				return {name:'IE',version:(tem[1] || '')};
			}
			
			if (aM[1] === 'Chrome'){
				tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
				if (tem != null) return {name:tem[1].replace('OPR', 'Opera'),version:tem[2]};
			}
			
			aM = aM[2]? [aM[1], aM[2]]: [navigator.appName, navigator.appVersion, '-?'];
			
			if ((tem = ua.match(/version\/(\d+)/i))!= null) aM.splice(1, 1, tem[1]);
			
			return {name:aM[0],version:aM[1]};
			
		})();
		
		
		// feature detections for browser types
		// ordered strategically based on usage ranking
		
		
		if (window.chrome && window.chrome.webstore) {  // Chrome 1+
			browserName = "Google Chrome";
			logo.src = "./logos/chrome_logo.png";
			
			// double check browser is correct
			if (browserName == "Google Chrome" && navigator.browserSpecs.name == "Chrome") { 
				version = navigator.browserSpecs.version;
			};
			
		} else if (typeof InstallTrigger !== 'undefined') {  // Firefox 1.0+
			browserName = "Mozilla Firefox";
			logo.src = "./logos/firefox_logo.png";

			// double check browser is correct
			if (browserName == "Mozilla Firefox" && navigator.browserSpecs.name == "Firefox") { 
				version = navigator.browserSpecs.version;
			};
			
		} else if (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || window.safari !== undefined) {  // At least Safari 3+: "[object HTMLElementConstructor]"
			browserName = "Safari";
			logo.src = "./logos/safari_logo.png";	

			// double check browser is correct
			if (browserName == "Safari" && navigator.browserSpecs.name == "Safari") { 
				version = navigator.browserSpecs.version;
			};
			
		} else if ((/*@cc_on!@*/false) || (document.documentMode)) {  // Internet Explorer 6-11
			browserName = "Internet Explorer";
			logo.src = "./logos/explorer_logo.png";

			// double check browser is correct
			if (browserName == "Internet Explorer" && navigator.browserSpecs.name == "IE") { 
				version = navigator.browserSpecs.version;
			};
				
		} else if ((window.opr && opr.addons) || window.opera || (navigator.userAgent.indexOf(' OPR/') >= 0)) {  // Opera 8.0+
			browserName = "Opera";
			logo.src = "./logos/opera_logo.png";	

			// double check browser is correct
			if (browserName == "Opera" && navigator.browserSpecs.name == "Opera") { 
				version = navigator.browserSpecs.version;
			};
				
		} else if (!(document.documentMode) && window.StyleMedia) {  // Edge 20+
			browserName = "Microsoft Edge";
			logo.src = "./logos/edge_logo.png";	

			// double check browser is correct
			if (browserName == "Microsoft Edge" && navigator.browserSpecs.name == "Edge") { 
				version = navigator.browserSpecs.version;
			};
			
		}					

		
		// check for operating system
		if (navigator.appVersion.indexOf("Win") != -1) {
			OSName="Windows";
		} else if (navigator.appVersion.indexOf("Mac") != -1) {
			OSName="MacOS";
		} else if (navigator.appVersion.indexOf("X11") != -1) {
			OSName="UNIX";
		} else if (navigator.appVersion.indexOf("Linux") != -1) {
			OSName="Linux";
		}
		
		// print result to page
		document.getElementById("logo").appendChild(logo);
		document.getElementById("message").innerText =  browserName + ' ' + version + ' Was Detected On ' + OSName;
		
});






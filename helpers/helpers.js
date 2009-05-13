function loadScript(scriptsrc, onload) {
	var head= document.getElementsByTagName('head')[0];
	var script= document.createElement('script');
	script.type= 'text/javascript';
	script.src= scriptsrc;
	if (onload) {
		script.onload = onload;
	}	
	head.appendChild(script);
	
}

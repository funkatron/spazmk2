var SpazView = function() {};

SpazView.prototype.init = function() {};

SpazView.prototype.loadPrimaryWindow = function() {
	
	var primarywin = window.open( APPROOT+'/app/html/primary.html', 'primaryWindow', 'innerWidth=300,innerHeight=600' );
	
	return primarywin;
	
};
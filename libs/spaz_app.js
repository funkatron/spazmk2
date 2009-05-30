/**
 * The SpazApp should serve as the root object for the entire application.
 * 
 * The constructor creates an array, this.windows, to contain the windows of the application
 * @class SpazApp 
 */
var SpazApp = function() {
	
	this.windows = [];
	
};

SpazApp.prototype.getWindow = function(index_or_id) {};

SpazApp.prototype.newWindow = function(id, args) {
	
	var newwin = new SpazWindow(id, args);
	this.windows.push(newwin);
	
};

SpazApp.prototype.focusWindow = function(index_or_id) {};

SpazApp.prototype.removeWindow = function(index_or_id) {};
/**
 * A window is (surprise) a window. It's parent is the application object. It contains Sections.
 * 
 * @param {String} id
 * @param {Object} args
 * @param {SpazApplication} app
 */
var SpazWindow = function(id, args, app) {
	
	this.sections = [];
	
	this.id   = id        || null;
	this.app  = app       || null;
	this.type = args.type || throw new Error('Cannot create a window without a type');
	
	this.htmlPath = APPROOT+'/app/window_html/'+this.type+'.html';
	
	/**
	 * Map the window object to this.DOMWin so we can access it a bit more clearly 
	 */
	this.DOMWin   = window;
};


SpazWindow.prototoype.show = function() {};
SpazWindow.prototoype.hide = function() {};
SpazWindow.prototoype.close = function() {};

SpazWindow.prototoype.addSection = function(id, type) {
	var opts = {
		'type':type
	};
	var newsec = new SpazSection(id, options, this);
};

SpazWindow.prototoype.getSection = function(index_or_id) {};

SpazWindow.prototoype.removeSection = function(index_or_id) {};

SpazWindow.prototoype.focusSection = function(index_or_id) {};
/**
 * Each section is sort of a mini-app that runs in the content section of a tab. A section has three
 * JavaScript files and one HTML file associated with it. The JS files are the model, view
 * and controller objects, and the HTML file contains the base markup for the section that is
 * injected into the section's container element (root element)
 * 
 * The object naming and file placement conventions of the MVC + HTML files is important:
 * 
 * Object: <type>Model			Location: APPROOT/app/sections/models/<type>.js
 * Object: <type>View			Location: APPROOT/app/sections/views/<type>.js
 * Object: <type>Controller		Location: APPROOT/app/sections/controllers/<type>.js
 * HTML							Location: APPROOT/app/sections/html/<type>.html
 */
var SpazSection = function (id, args, window) {
	// constructor
	
	this.id     = id          || null;
	this.window = window      || null;
	this.type   = args.type   || throw new Error('Cannot create a section without a type');
	
	/*
		set some paths
	*/
	this.modelPath		= APPROOT+'/app/sections/models/'+this.type+'.js';
	this.viewPath		= APPROOT+'/app/sections/views/'+this.type+'.js';
	this.controllerPath	= APPROOT+'/app/sections/controllers/'+this.type+'.js';
	this.htmlPath		= APPROOT+'/app/sections/html/'+this.type+'.html';
	
	this.rootElement	= null;
	
	this.model			= null;
	this.controller		= null;
	this.view			= null;
	
};

/**
 * We call this to manually start the process of creating the section, so we have more control 
 * over the timing. Maybe that's not necessary, though. 
 */
SpazSection.prototype.init = function (args) {
	if ( args.beforeInit && typeof args.beforeInit === 'function' ) {
		arhs.beforeInit.call(this);
	}
	
	
	this.setRootDOMElement(args.rootelement);

	this.loadHTMLFromFile();
	
	this.loadMVC();
	
	
	if ( args.afterInit && typeof args.afterInit === 'function' ) {
		arhs.afterInit.call(this);
	}
};


SpazSection.prototype.getRootDOMElement = function() {
	return this.rootElement;
};

SpazSection.prototype.setRootDOMElement = function(element) {
	this.rootElement = element;
};

/**
 * Load the HTML as a string from the file in this.htmlPath and inject it into the root dom element 
 * @TODO
 */
SpazSection.prototype.loadHTMLFromFile  = function() {
	/*
		- get the string from the file
		- inject the string into the root element
	*/
};

/**
 * "Load" the model, view and controller source files by adding <SCRIPT> elements
 * and use their constructors to attach them to this section object
 * @TODO
 */
SpazSection.prototype.loadMVC = function() {
	/*
		somehow load the m,v,and c scripts 
	*/

	/*
		This is a hack to do a sort of variable variable approach, ala PHP.
	*/
	this.model		= new window[this.type+'Model']();
	this.view		= new window[this.type+'View']();
	this.controller	= new window[this.type+'Controller']();
	
};


/**
 * This should be called when the section is made active (shown to the user)
 * At this level it serves as a placeholder
 */
SpazSection.prototype.onActivate   = function() {};

/**
 * This should be called when the section is deactivated (hidden from the user)
 * At this level it serves as a placeholder
 */
SpazSection.prototype.onDeactivate = function() {};
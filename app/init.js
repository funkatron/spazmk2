/**
 * This is our bootstrapper script, loaded from index.html, that 
 * sets up the app object, loads our prefs, and loads our initial window(s) 
 */

var app = {};

/*
	This should be a pointer to the hidden, initial window
*/
app.rootWindow = window;


/*
	Load the model, view and controller scripts somehow
*/
loadJS(APPROOT+'/app/model.js');
loadJS(APPROOT+'/app/view.js');
loadJS(APPROOT+'/app/controller.js');

/*
	create our MVC objects
*/
app.model		= new SpazModel();
app.view  		= new SpazView();
app.controller	= new SpazController();

/*
	Call initializers
*/
app.model.init();
app.view.init();
app.controller.init();

/*
	create our window tracking array
	- maybe this should be an object so we can ID
	  windows with a label and find more easily?
*/
app.windows = [];

/**
 * adds a window object to the app.windows array of windows 
 */
app.registerWindow = function(windowObj) {
	app.view.windows.push( windowObj );
}


/*
	set up a listener for when prefs are loaded
*/
$().bind( 'prefs_loaded', function() {
	
	var newPrimaryWindow = Spaz.View.loadPrimaryWindow();
	app.registerWindow(newPrimaryWindow);
	
});

/*
	point app.prefs to app.model.prefs, because even though prefs are probably a
	model concern, we like having them close to our hearts
*/
app.prefs = app.model.prefs();
app.prefs.load();
/**
 * This is our bootstrapper script, loaded from index.html, that 
 * sets up the app object, loads our prefs, and loads our initial window(s) 
 */

/*
	init.js loads in index.html, so our root is the current dir
*/
const APPROOT = '.';


var app = {};

/**
 * adds a window object to the app.windows array of windows 
 */
app.registerWindow = function(windowObj) {
	app.windows.push( windowObj );
}

app.loadScript = function(scriptsrc, onload) {
	var head= document.getElementsByTagName('head')[0];
	var script= document.createElement('script');
	script.type= 'text/javascript';
	script.src= scriptsrc;
	if (onload) {
		script.onload = onload;
	}	
	head.appendChild(script);
	
}



/*
	This should be a pointer to the hidden, initial window
*/
app.rootWindow = window;


/*
	Load the model, view and controller scripts
	Because the load is async, we have to wait for each file to load.
	this is a hacky, bad was of doing that.
*/
app.loadScript(APPROOT+'/app/model.js', function() {
	app.loadScript(APPROOT+'/app/view.js', function() {
		app.loadScript(APPROOT+'/app/controller.js', function() {
			
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

			/*
				set up a listener for when prefs are loaded
			*/
			$().bind( 'prefs_loaded', function() {

				var newPrimaryWindow = app.view.loadPrimaryWindow();
				app.registerWindow(newPrimaryWindow);

			});

			/*
				point app.prefs to app.model.prefs, because even though prefs are probably a
				model concern, we like having them close to our hearts
			*/

			/*app.prefs = app.model.prefs();
			app.prefs.load();*/
			$().trigger('prefs_loaded');
		});
	});
});




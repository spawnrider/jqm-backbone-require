requirejs.config({
	//By default load any module IDs from js/lib
	baseUrl : 'js/',

	//except, if the module ID starts with "app",
	//load it from the js/app directory. paths
	//config is relative to the baseUrl, and
	//never includes a ".js" extension since
	//the paths config could be for a directory.
	paths : {
		jquery : 'libs/jquery/jquery-1.7.1.min',
		underscore : 'libs/underscore/underscore-min',
		backbone : 'libs/backbone/backbone-min',
		jquerymobile : 'libs/jquery-mobile/jquery.mobile-1.2.0-alpha.1.min',
		app : 'app'
	},
	shim : {
		'backbone' : {
			//These script dependencies should be loaded before loading
			//backbone.js
			deps : ['underscore', 'jquery'],
			//Once loaded, use the global 'Backbone' as the
			//module value.
			exports : 'Backbone'
		},
		'jquerymobile' : {
			deps : ['jquery']
		}
	}
});

require(['require', 'jquery', 'backbone', 'underscore', 'app'], function(require, $,backbone, _, App) {
	$(document).bind("mobileinit", function() {
		console.log("JQuery mobile routing system disabled");
		$.mobile.ajaxEnabled = false;
		$.mobile.linkBindingEnabled = false;
		$.mobile.hashListeningEnabled = false;
		$.mobile.pushStateEnabled = false;
		// Remove page from DOM when it's being replaced
		$('div[data-role="page"]').live('pagehide', function(event, ui) {
			$(event.currentTarget).remove();
		});
	});

	require(['jquerymobile'], function($$) {
		// The "app" dependency is passed in as "App"
		App.initialize();
	});
});

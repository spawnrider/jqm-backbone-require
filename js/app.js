define(['jquery', 'underscore', 'backbone', 'router', 'views/home', 'views/options'], function($, _, Backbone, Router, homeView, optionsView) {
	// Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
	"use strict";

	var MyApp = MyApp || {
		Views : {
			home : homeView,
			options : optionsView
		},
		Models : {
		},
		defaults : {

		},
		Router : {},
		initialize : function() {
			$(document).ready(function() {
				console.log('App initialization...');
				MyApp.Router = new Router(MyApp);
				Backbone.history.start();
				console.log('App initialized');
			});
		}
	};

	// make app global
	window.MyApp = MyApp;
	return MyApp;
}); 
/*
* jqm-backbone-require v@VERSION
* https://github.com/spawnrider/jqm-backbone-require
*
* Copyright 2012 Yohann Ciurlik
* Released under the Creative Commons Attribution-ShareAlike 3.0 France License.
* http://creativecommons.org/licenses/by-sa/3.0/fr/deed.en
*
*/
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
				MyApp.events(); //register event handler
				Backbone.history.start();
				console.log('App initialized');
			});
		}, 
		events : function (){
			$(document).delegate("#home-page", "pageinit", function() {
				console.log("Pageinit fired for #home-page");
			});
		}
	};

	// make app global
	window.MyApp = MyApp;
	return MyApp;
});

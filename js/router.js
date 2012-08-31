/*
* jqm-backbone-require v@VERSION
* https://github.com/spawnrider/jqm-backbone-require
*
* Copyright 2012 Yohann Ciurlik
* Released under the Creative Commons Attribution-ShareAlike 3.0 France License.
* http://creativecommons.org/licenses/by-sa/3.0/fr/deed.en
*
*/
define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	"use strict";
	var App = {};

	var Router = Backbone.Router.extend({
		routes : {
			"" : "defaults",
			":page" : "generic"
		},

		// last argument must always be the Application
		initialize : function() {
			console.log('Router initialization...');
			// App must always be the last argument passed to the router constructor
			App = _.last(arguments);

			// Handle back button throughout the application
			$('.back').live('click', function(event) {
				window.history.back();
				return false;
			});
			this.firstPage = true;
			console.log('Router initialized');
		},
		defaults : function() {
			console.log("View defaults");
			// Retrieve the first view
			for (var view in App.Views) {
				console.log("View : "+view);
				this.changePage(new App.Views[view], view);
				return;
			}
		},
		generic : function(id) {
			console.log("View generic id : "+id);
			for (var view in App.Views) {
				if (view.toLowerCase() === id.toLowerCase()) {
					console.log('routing #%s', id);
					this.changePage(new App.Views[view], id);
					return;
				}
			}
			console.log('no route for #%s', id);
		},
		changePage : function(page, pageid) {
			// page id
			var id = page.id ? page.id : pageid+'-page';
			console.log("Page id :"+id);
			$(page.el).attr('id', id);
			
			$(page.el).attr('data-role', 'page');
			page.render();
			$('body').append($(page.el));
			
			// specific jqm page options
			var transition = page.transition ? page.transition : $.mobile.defaultPageTransition;
			var reverse = page.reverse ? page.reverse : false;
			
			// We don't want to slide the first page
			if (this.firstPage) {
				transition = 'none';
				this.firstPage = false;
			}
			$.mobile.changePage($(page.el), {
				changeHash : false,
				transition : transition,
				reverse : reverse
			});
		}
	});

	return Router;
});

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
			console.log("View default");
			for (var view in App.Views) {
				console.log("View : "+view);
				this.changePage(new App.Views[view]);
				return;
			}
		},
		generic : function(id) {
			console.log("View generic id : "+id);
			for (var view in App.Views) {
				if (view.toLowerCase() === id.toLowerCase()) {
					console.log('routing #%s', id);
					this.changePage(new App.Views[view]);
					return;
				}
			}
			console.log('no route for #%s', id);
		},
		changePage : function(page) {
			$(page.el).attr('data-role', 'page');
			page.render();
			$('body').append($(page.el));
			var transition = page.transition ? page.transition : $.mobile.defaultPageTransition;
			// We don't want to slide the first page
			if (this.firstPage) {
				transition = 'none';
				this.firstPage = false;
			}
			$.mobile.changePage($(page.el), {
				changeHash : false,
				transition : transition
			});
		}
	});

	return Router;
});

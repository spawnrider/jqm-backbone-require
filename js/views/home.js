define(['jquery', 'underscore', 'backbone', 'text!templates/home.html', 'views/car/list'], function($, _, Backbone, tmpHome, carListView) {
	var view = Backbone.View.extend({
		initialize : function() {
			this.carlistview = new carListView();
		},
		render : function() {
			$(this.el).append(_.template(tmpHome, {}));

			console.log("Rendering subelements...");
			this.assign({
				'#carListView' : this.carlistview
			});
			return this.el;
		},
		assign : function(selector, view) {
			var selectors;

			if (_.isObject(selector)) {
				selectors = selector;
			} else {
				selectors = {};
				selectors[selector] = view;
			}

			if (!selectors)
				return;

			_.each(selectors, function(view, selector) {
				view.setElement(this.$(selector)).render();
			}, this);
		}
	});

	return view;
});

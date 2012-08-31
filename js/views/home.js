/*
* jqm-backbone-require v@VERSION
* https://github.com/spawnrider/jqm-backbone-require
*
* Copyright 2012 Yohann Ciurlik
* Released under the Creative Commons Attribution-ShareAlike 3.0 France License.
* http://creativecommons.org/licenses/by-sa/3.0/fr/deed.en
*
*/
define(['jquery', 'underscore', 'backbone', 'helper', 'text!templates/home.html', 'views/car/list'], function($, _, Backbone, Helper, tmpHome, carListView) {
	var view = Backbone.View.extend({
		transition: 'slide',
		reverse: true,
		initialize : function() {
			this.carlistview = new carListView();
		},
		render : function() {
			$(this.el).append(_.template(tmpHome, {}));

			console.log("Rendering subelements...");
			Helper.assign(this, {
				'#carListView' : this.carlistview
			});
			return this.el;
		}
	});

	return view;
});

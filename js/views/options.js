define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/options.html'
],function($,_,Backbone,tmpOptions){ 
	var view = Backbone.View.extend({
		render: function () { 
			$(this.el).append(_.template(tmpOptions, {}));
		}
	});

	return view; 
});
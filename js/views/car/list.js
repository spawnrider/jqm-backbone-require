define([
	'jquery',
	'underscore',
	'backbone',
	'collections/cars',
	'text!templates/car/list.html'
],function($,_,Backbone,carCollection,carListTemplate){ 
	var carListView = Backbone.View.extend({
		el: '#carListView', 
		initialize: function () {
			console.log("CarListView initialization...")
			this.carCollection = new carCollection;
			this.carCollection.sampleContent();
		},
		
		render: function () { 
			console.log("CarListView rendering...")
			this.loadResults();
			return this.el;
		},
	
		loadResults: function () {	
	        // Once the results are returned lets populate our template
			this.$el.html(_.template(carListTemplate, {cars: this.carCollection.models, _:_}));
		}
	});

	return carListView; 
});
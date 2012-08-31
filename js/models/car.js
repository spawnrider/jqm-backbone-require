define([
'backbone',
],function(Backbone){
	var carModel = Backbone.Model.extend({
	    defaults: {
	    	name: "bmw"
	    }
	});
	  
	// You don't return a model instantiated
	return carModel; 
});
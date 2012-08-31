define([
'backbone',
// Pull in the Model module from above 
'models/car'
],function(Backbone,CarModel){
	var carCollection = Backbone.Collection.extend({
		model: CarModel,
		sampleContent: function(){
			this.add(new CarModel({name: "opel"}));
			this.add(new CarModel({name: "renault"}));
			this.add(new CarModel({name: "citroen"}));
			this.add(new CarModel({name: "mercedes"}));
		}
	});
	  
	return carCollection; 
});
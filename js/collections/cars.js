/*
* jqm-backbone-require v@VERSION
* https://github.com/spawnrider/jqm-backbone-require
*
* Copyright 2012 Yohann Ciurlik
* Released under the Creative Commons Attribution-ShareAlike 3.0 France License.
* http://creativecommons.org/licenses/by-sa/3.0/fr/deed.en
*
*/
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
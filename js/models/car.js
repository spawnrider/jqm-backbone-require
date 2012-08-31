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
],function(Backbone){
	var carModel = Backbone.Model.extend({
	    defaults: {
	    	name: "bmw"
	    }
	});
	  
	// You don't return a model instantiated
	return carModel; 
});
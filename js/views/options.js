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
	'jquery',
	'underscore',
	'backbone',
	'text!templates/options.html'
],function($,_,Backbone,tmpOptions){ 
	var view = Backbone.View.extend({
		transition: 'slide',
		render: function () { 
			$(this.el).append(_.template(tmpOptions, {}));
		}
	});

	return view; 
});
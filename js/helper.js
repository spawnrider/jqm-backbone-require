/*
* jqm-backbone-require v@VERSION
* https://github.com/spawnrider/jqm-backbone-require
*
* Copyright 2012 Yohann Ciurlik
* Released under the Creative Commons Attribution-ShareAlike 3.0 France License.
* http://creativecommons.org/licenses/by-sa/3.0/fr/deed.en
*
*/
define(['jquery', 'underscore'], function($, _) {
	var Helper = {};  // Declare Helper namespace
	
	Helper.assign = function(container, selector, view) {
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
			view.setElement(container.$(selector)).render();
		}, container);
	}

	return Helper;
});

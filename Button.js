define([
	// './tmpl',   // comment out for now, templates not implemented yet
	'./widgets',
	'./_Widget'
], function (/* tmpl, */ widgets, _Widget) {
	'use strict';

	/**
	 * Button Class
	 * @class pidgin/Button
	 * @constructor
	 */

	var after = widgets.after,
		template = null	// tmpl('pd-button-template', '<span class="pd-label">{{ label }}</span>'); commented out until templates supported

	/**
	 * The constructor for pidgin/Button and tag pd-button
	 * @return {pidgin/Button}   The constructor function
	 */
	return widgets.register('pd-button', HTMLButtonElement, _Widget, {

		/**
		 * The template for the widget
		 * @type {pidgin/tmpl}
		 */
		template: template,

		/**
		 * A map of attributes that should be mapped to properties during startup
		 * @type {Array}
		 */
		attributeMap: [ 'label' ],

		/**
		 * The text for the widget
		 * @type {String}
		 */
		label: '',

		/**
		 * The definable method that occurs during the readyCallback
		 */
		ready: after(function () {
			if (!this.label) {
				this.label = this.innerHTML;
			}
			if (this.innerHTML) {
				this.innerHTML = '';
			}
		})
	});

});
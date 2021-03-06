/* global LLMS */

/**
 * Localization functions for LifterLMS Javascript
 *
 * @todo  we need more robust translation functions to handle sprintf and pluralization
 *        at this moment we don't need those and haven't stubbed them out
 *        those will be added when they're needed
 *
 * @type Object
 *
 * @since  2.7.3
 */
LLMS.l10n = LLMS.l10n || {};

LLMS.l10n.translate = function ( string ) {

	var self = this;

	if ( self.strings[string] ) {

		return self.strings[string];

	} else {

		return string;

	}

};

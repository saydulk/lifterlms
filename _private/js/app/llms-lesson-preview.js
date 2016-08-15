/* global LLMS, $ */

/**
 * Handle the Collpasible Syllabus Widget / Shortcode
 */
LLMS.LessonPreview = {

	/**
	 * jQuery object of all outlines present on the current screen
	 * @type obj
	 */
	$els: null,

	/**
	 * Initilize
	 * @return void
	 */
	init: function() {

		var self = this;

		this.$locked = $( 'a[href="#llms-lesson-locked"]' );

		if ( this.$locked.length ) {

			self.bind();

		}

		if ( $( '.llms-course-navigation' ).length ) {

			LLMS.wait_for_matchHeight( function() {

				self.match_height();

			} );

		}

	},

	/**
	 * Bind DOM events
	 * @return void
	 * @since    3.0.0
	 * @version  3.0.0
	 */
	bind: function() {

		var self = this;

		this.$locked.on( 'click', function() {
			return false;
		} );

		this.$locked.on( 'mouseenter', function() {

			var $tip = $( this ).find( '.llms-tooltip' );
			if ( !$tip.length ) {
				$tip = self.get_tooltip();
				$( this ).append( $tip );
			}
			setTimeout( function() {
				$tip.addClass( 'show' );
			}, 10 );

		} );

		this.$locked.on( 'mouseleave', function() {

			var $tip = $( this ).find( '.llms-tooltip' );
			$tip.removeClass( 'show' );

		} );

	},

	/**
	 * Match the height of lesson preview items in course navigation blocks
	 * @return   void
	 * @since    3.0.0
	 * @version  3.0.0
	 */
	match_height: function() {

		$( '.llms-course-navigation .llms-lesson-link' ).matchHeight();

	},

	/**
	 * Get a tooltip element
	 * @return   obj
	 * @since    3.0.0
	 * @version  3.0.0
	 */
	get_tooltip: function() {
		var msg = LLMS.l10n.translate( 'You must enroll in this course to unlock this lesson' ),
			$el = $( '<div class="llms-tooltip" />' );

		$el.append( '<div class="llms-tooltip-content">' + msg + '</div>' );

		return $el;
	},

};
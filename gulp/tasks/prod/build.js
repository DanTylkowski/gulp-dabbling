var gulp = require( 'gulp' );
var runSequence = require( 'run-sequence' );

gulp.task(
	'build:prod',
	function( callback ) {
		runSequence(
			//'delete',
			[
				//'sass',
				//'scripts',
				//'images'
			],
			//'base64',
			[
				//'optimize:css',
				//'optimize:js',
				//'optimize:images'
			],
			//'revision',
			//'rev:collect',
			callback
		);
	}
);

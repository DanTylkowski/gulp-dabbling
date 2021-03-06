var gulp = require( 'gulp' );
var runSequence = require( 'run-sequence' );

gulp.task(
	'build',
	function( callback ) {
		runSequence(
			'delete',
			[
				'sass',
				'scripts',
				'images'
			],
			'base64',
			callback
		);
	}
);

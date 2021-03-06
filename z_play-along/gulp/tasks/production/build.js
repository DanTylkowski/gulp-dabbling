var gulp = require( 'gulp' );
var runSequence = require( 'run-sequence' );

gulp.task(
	'build:production',
	function( callback ) {
		runSequence(
			'delete',
			//'jekyll:production',
			[
				'sass',
				'scripts',
				'images'//,
				//'copy:fonts'
			],
			'base64',
			[
				'optimize:css',
				'optimize:js',
				'optimize:images',
				//'optimize:html',
				//'copy:fonts:production'
			],
			'revision',
			'rev:collect',
			//'webp', //Not sure if it's supported server side
			callback
		);
	}
);

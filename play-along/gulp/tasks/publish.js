var gulp = require( 'gulp' );

gulp.task(
	'publish',
	[
		//'browsersync:production'
		'build:production'
	]
);

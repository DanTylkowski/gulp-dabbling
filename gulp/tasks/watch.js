var gulp = require( 'gulp' );
var config = require('../config').watch;

gulp.task(
	'watch',
	[
		//'browsersync',
	],
	function() {
		//gulp.watch( config.sass, [ 'sass', 'scsslint' ] );
		//gulp.watch( config.scripts, [ 'scripts', 'jshint' ] );
		//gulp.watch(config.images,  ['images']);
		//gulp.watch(config.svg,     ['copy:fonts']); // probably not
		//gulp.watch(config.sprites, ['sprites']);
	}
);

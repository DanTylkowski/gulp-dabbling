var gulp = require( 'gulp' );
var config = require('../../config').watch;

gulp.task(
	'watch',
	function() {
		gulp.watch( config.sass, [ 'sass' ] );
		//gulp.watch( config.scripts, [ 'scripts' ] );
		//gulp.watch( config.images, [ 'images' ] );
	}
);

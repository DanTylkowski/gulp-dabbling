var gulp = require( 'gulp' );
var config = require( '../../config' ).copyfonts.development;

gulp.task(
	'copy:fonts',
	[ 'fontcustom' ],
	function() {
		return gulp.src(config.src)
			.pipe(gulp.dest(config.dest));
	}
);

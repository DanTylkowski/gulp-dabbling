var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
var config = require( '../../config' ).upload;
var serverCreds = require( '../../server-creds' ).serverCreds;

gulp.task( 
	'deploy', 
	function() {
		var conn = ftp.create( serverCreds );

		// using base = '.' will transfer everything to /public_html correctly
		// turn off buffering in gulp.src for best performance

		return gulp.src( config.globs, { base: '.', buffer: false } )
		.pipe( conn.newer( '/public_html' ) ) // only upload newer files
		.pipe( conn.dest( '/public_html' ) );
	}
);
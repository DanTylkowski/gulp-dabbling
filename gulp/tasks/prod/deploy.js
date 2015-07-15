var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
var config = require( '../../config' ).deploy;
var serverCreds = require( '../../server-creds' );

gulp.task( 
	'deploy', 
	function() {
		var conn = ftp.create( serverCreds );

		return gulp.src( config.globs, config.options )
			.pipe( conn.newer( config.path ) )
			.pipe( conn.dest( config.path ) );
	}
);
var gulp = require( 'gulp' );
var del = require( 'del' );
var config = require( '../../config' ).deleteProd;

gulp.task(
	'delete:prod',
	function( callback ) {
		del( config.src, callback );
	}
);

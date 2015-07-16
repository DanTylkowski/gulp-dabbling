var gulp = require( 'gulp' );
var sass = require( 'gulp-ruby-sass' );
var gulpFilter = require( 'gulp-filter' );
var autoprefixer = require( 'gulp-autoprefixer' );
var sourcemaps = require( 'gulp-sourcemaps' );
var config = require( '../../config' );
var handleErrors = require( '../../util/handle-errors' );

gulp.task(
	'sass',
	function() {
		var sassConfig = config.sass.options;

		var filter = gulpFilter( [ '*.css', '!*.map' ] );

		return sass( config.sass.src, sassConfig )
			.on( 'error', handleErrors )
			.pipe( sourcemaps.init() )
			.pipe( autoprefixer( config.autoprefixer ) )
			.pipe( filter )
			.pipe( sourcemaps.write( '.', { includeContent: false } ) )
			.pipe( filter.restore() )
			.pipe( gulp.dest( config.sass.dest ) );
	}
);

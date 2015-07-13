var gulp = require( 'gulp' );
var plumber = require( 'gulp-plumber' );
//var browsersync = require( 'browser-sync' );
var sass = require( 'gulp-ruby-sass' );
var gulpFilter = require( 'gulp-filter' );
var autoprefixer = require( 'gulp-autoprefixer' );
var sourcemaps = require( 'gulp-sourcemaps' );
var config = require( '../../config' );

gulp.task(
	'sass',
	function() {
		var sassConfig = config.sass.options;

		//sassConfig.onError = browsersync.notify;

		var filter = gulpFilter( ['*.css', '!*.map' ] );

		//browsersync.notify( 'Compiling SASS' );

		return gulp.src( config.sass.src )
			.pipe( plumber() )
			.pipe( sass( sassConfig ) )
			.pipe( sourcemaps.init() )
			.pipe( autoprefixer( config.autoprefixer ) )
			.pipe( filter )
			.pipe( sourcemaps.write( '.', { includeContent: false } ) )
			.pipe( filter.restore() )
			.pipe( gulp.dest( config.sass.dest ) );
	}
);

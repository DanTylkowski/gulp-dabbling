var gulp = require( 'gulp' );
var browserify = require( 'browserify' );
var source = require( 'vinyl-source-stream' );
var watchify = require( 'watchify' );
var bundleLogger = require( '../../util/bundle-logger' );
var handleErrors = require( '../../util/handle-errors' );
var config = require( '../../config' ).browserify;

gulp.task(
	'scripts',
	function( callback ) {
		var bundleQueue = config.bundleConfigs.length;

		function browserifyThis( bundleConfig ) {
			var bundler = browserify({
				cache: {},
				packageCache: {},
				fullPaths: false,
				entries: bundleConfig.entries,
				extensions: config.extensions,
				debug: config.debug
			});

			function bundle() {
				bundleLogger.start( bundleConfig.outputName );

				return bundler
					.bundle()
					.on( 'error', handleErrors )
					.pipe( source( bundleConfig.outputName ) )
					.pipe( gulp.dest( bundleConfig.dest ) )
					.on( 'end', reportFinished );
			}

			if( global.isWatching ) {
				bundler = watchify( bundler );
				bundler.on( 'update', bundle );
			}

			function reportFinished() {
				bundleLogger.end( bundleConfig.outputName );
				if( bundleQueue ) {
					bundleQueue--;
					if( bundleQueue === 0 ) {
						callback();
					}
				}
			}

			return bundle();
		}

		config.bundleConfigs.forEach( browserifyThis );
	}
);

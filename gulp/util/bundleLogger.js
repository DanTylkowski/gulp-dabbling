var gutil = require( 'gulp-util' );
var prettyHrtime = require( 'pretty-hrtime' );
var startTime;

module.exports = {
	start: function( filepath ) {
		var taskTime = process.hrtime( startTime );
		var prettyTime = prettyHrtime( taskTime );
		gutil.log( 'Bundled', gutil.colors.green( filepath ), 'in', gutil.colors.magenta( prettyTime ) );
	}
};

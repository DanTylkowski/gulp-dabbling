var doIt = require( './module-two' ).doIt;

exports.doSomething = function( val ) {
	doIt( val );
	console.log( 'a console log' );
};

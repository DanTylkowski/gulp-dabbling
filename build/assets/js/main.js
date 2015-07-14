(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var doIt = require( './module-two' ).doIt;

exports.doSomething = function( val ) {
	doIt( val );
};

},{"./module-two":3}],2:[function(require,module,exports){
exports.reallyDoIt = function( val ) {
	console.log( val );
};

},{}],3:[function(require,module,exports){
var reallyDoIt = require( './module-one' ).reallyDoIt;

exports.doIt = function( val ) {
	reallyDoIt( val );
};

},{"./module-one":2}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL2pzL21haW4uanMiLCJzcmMvYXNzZXRzL2pzL21vZHVsZS1vbmUuanMiLCJzcmMvYXNzZXRzL2pzL21vZHVsZS10d28uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBkb0l0ID0gcmVxdWlyZSggJy4vbW9kdWxlLXR3bycgKS5kb0l0O1xuXG5leHBvcnRzLmRvU29tZXRoaW5nID0gZnVuY3Rpb24oIHZhbCApIHtcblx0ZG9JdCggdmFsICk7XG59O1xuIiwiZXhwb3J0cy5yZWFsbHlEb0l0ID0gZnVuY3Rpb24oIHZhbCApIHtcblx0Y29uc29sZS5sb2coIHZhbCApO1xufTtcbiIsInZhciByZWFsbHlEb0l0ID0gcmVxdWlyZSggJy4vbW9kdWxlLW9uZScgKS5yZWFsbHlEb0l0O1xuXG5leHBvcnRzLmRvSXQgPSBmdW5jdGlvbiggdmFsICkge1xuXHRyZWFsbHlEb0l0KCB2YWwgKTtcbn07XG4iXX0=

var src = 'src';
var srcAssets = src + '/assets';

var build = 'build';
var development = build + '/development';
var production = build + '/production';
var developmentAssets = development + '/assets';
var productionAssets = production + '/assets';

module.exports = {
	/*browsersync: {
		server: {
			baseDir: [ development, build, src ]
		},
		files: [
			developmentAssets + '/css/*.css',
			developmentAssets + '/js/*.js',
			developmentAssets + '/iamges/*',
			developmentAssets + '/fonts/*'
		]
	},*/
	delete: {
		src: [ developmentAssets ]
	},
	sass: {
		src: srcAssets + '/sass/**/*.{sass,scss}',
		dest: developmentAssets + '/css',
		options: {
			noCache: true,
			compass: false,
			bundleExec: true,
			sourcemap: true,
			sourcemapPath: '../../assets/sass' //not sure
		}
	},
	autoprefixer: {
		browsers: [
			'last 2 versions',
			'safari 5',
			'ie 8',
			'ie 9',
			'opera 12.1',
			'ios 6',
			'android 4'
		],
		cascade: true
	},
	browserify: {
		debug: true,
		bundleConfigs: {
			entries: './' + srcAssets + '/js/main.js',
			dest: developmentAssets + '/js',
			outputName: 'main.js'
		}
	}
};

var src = 'src';
var srcAssets = src + '/assets';

var build = 'build';
var dev = build + '/dev';
var prod = build + '/prod';
var devAssets = dev + '/assets';
var prodAssets = prod + '/assets';

module.exports = {
	delete: {
		src: [ devAssets ]
	},
	sass: {
		src: srcAssets + '/sass/',
		dest: devAssets + '/css',
		options: {
			noCache: true,
			compass: false,
			bundleExec: true,
			sourcemap: true
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
			dest: devAssets + '/js',
			outputName: 'main.js'
		}
	},
	images: {
		src: srcAssets + '/images/**/*',
		dest: devAssets + '/images'
	},
	base64: {
		src: devAssets + '/css/*.css',
		dest: devAssets + '/css',
		options: {
			baseDir: build,
			extensions: [ 'png' ],
			maxImageSize: 20 * 1024, // bytes
			debug: false
		}
	},
	watch: {
		sass: srcAssets + '/sass/**/*.{sass,scss}',
		scripts: srcAssets + '/js/**/*.js',
		images: srcAssets + '/images/**/*',
		sprites: srcAssets + '/images/**/*.png'
	},
	optimize: {
		css: {
			src:  devAssets + '/css/*.css',
			dest: prodAssets + '/css/',
			options: {
				keepSpecialComments: 0
			}
		},
		js: {
			src: devAssets + '/js/*.js',
			dest: prodAssets + '/js/',
			options: {}
		},
		images: {
			src:  devAssets + '/images/**/*.{jpg,jpeg,png,gif}',
			dest: prodAssets + '/images/',
			options: {
				optimizationLevel: 3,
				progessive: true,
				interlaced: true
			}
		}
	},
	revision: {
		src: {
			assets: [
				prodAssets + '/css/*.css',
				prodAssets + '/js/*.js',
				prodAssets + '/images/**/*'
			],
			base: prod
		},
		dest: {
			assets: prod,
			manifest: {
				name: 'manifest.json',
				path: prodAssets
			}
		}
	},
	collect: {
		src: [
			prodAssets + '/manifest.json',
			prod + '/**/*.{html,xml,txt,json,css,js}',
			'!' + prod + '/feed.xml'
		],
		dest: prod
	},
	rsync: { // Dummy data, will configure later
		src: prod + '/**',
		options: {
			destination: '~/path/to/my/website/root/',
			root: prod,
			hostname: 'mydomain.com',
			username: 'user',
			incremental: true,
			progress: true,
			relative: true,
			emptyDirectories: true,
			recursive: true,
			clean: true,
			exclude: [ '.DS_Store' ],
			include: []
		}
	}
};
